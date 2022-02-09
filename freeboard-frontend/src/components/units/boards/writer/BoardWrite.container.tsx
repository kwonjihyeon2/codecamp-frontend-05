import { useRef, ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import FreeBoardWriteUI from "./BoardWrite.presenter";
import {
  CREATE_NEWBOARD,
  UPDATE_BOARD,
  UPLOAD_FILES,
} from "./BoardWrite.queries";
import { Modal } from "antd";
import { IWriteConProps, IMyVariableUpdateBoard } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { checkFileValidation } from "../../../../commons/libraries/uitils";

export default function FreeBoardWrite(props: IWriteConProps) {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    youtubeUrl: "",
  });
  const [content, setContent] = useState<string>("");

  const [ErrorName, setErrorName] = useState<string>("");
  const [ErrorPw, setErrorPw] = useState<string>("");
  const [ErrorTitle, setErrorTitle] = useState<string>("");
  const [Errorcontent, setErrorContent] = useState<string>("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_NEWBOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [isActive, setIsActive] = useState(false);

  function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
    // setName(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (inputs.writer) {
      setErrorName("");
    }
    if (inputs.password.length > 3) {
      setErrorPw("");
    }
    if (inputs.title) {
      setErrorTitle("");
    }
    if (
      inputs.writer &&
      inputs.password.length > 3 &&
      inputs.title &&
      content
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function MainContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value) {
      setErrorContent("");
    }
    if (
      inputs.writer &&
      inputs.password.length > 3 &&
      inputs.title &&
      event.target.value
    ) {
      setIsActive(true);
      console.log(isActive);
    } else {
      setIsActive(false);
    }
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [AddressDetail, setAddressDetail] = useState("");

  const onTogglePostModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompleteDaumPostcode = (data: any) => {
    console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    setAddressDetail(data.addressDetail);
    onTogglePostModal();
  };

  const ChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const [fimage, setFimage] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILES);
  const filesRef = useRef<HTMLInputElement>(null);

  const onChangeFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = [];
    for (let i = 0; i < event.target.files?.length; i++) {
      const imgurl = event.target.files?.[i];
      console.log(file, imgurl);

      const isvaild = checkFileValidation(imgurl);
      if (!isvaild) return;

      try {
        const ImageResult = await uploadFile({
          variables: { file: imgurl },
        });
        file.push(ImageResult.data?.uploadFile.url);
        console.log(ImageResult.data?.uploadFile.url);
      } catch (error) {
        console.log(error.message);
      }
    }

    setFimage(...fimage, ...file);
    console.log(fimage);
  };

  const ClickImage = () => {
    filesRef.current?.click();
  };

  const register = async () => {
    try {
      if (!inputs.writer) {
        setErrorName("이름은 필수입력 항목입니다.");
        window.scrollTo(0, 0);
      } else {
        setErrorName("");
      }

      if (!inputs.password || inputs.password.length < 4) {
        setErrorPw("비밀번호는 필수입력 항목입니다. 4자리 이상 입력하세요.");
        window.scrollTo(0, 0);
      } else {
        setErrorPw("");
      }

      if (!inputs.title) {
        setErrorTitle("제목은 필수입력 항목입니다.");
        window.scrollTo(0, 0);
      } else {
        setErrorTitle("");
      }

      if (!content) {
        setErrorContent("내용은 필수입력 항목입니다.");
      } else {
        setErrorContent("");
      }
      if (
        inputs.writer &&
        inputs.password.length > 3 &&
        inputs.title &&
        content
      ) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              contents: content,
              images: fimage,
              boardAddress: {
                zipcode: zonecode,
                address: Address,
                addressDetail: AddressDetail,
              },
            },
          },
        });

        Modal.success({ content: "게시물이 등록되었습니다." });
        router.push(`/boards/${result.data?.createBoard._id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const EditBtn = async () => {
    try {
      const MyVariables: IMyVariableUpdateBoard = {};

      if (inputs.title) MyVariables.title = inputs.title;
      if (inputs.youtubeUrl) MyVariables.youtubeUrl = inputs.youtubeUrl;
      if (content) MyVariables.contents = content;
      if (zonecode || Address || AddressDetail) {
        MyVariables.boardAddress = {};
        if (zonecode) MyVariables.boardAddress.zipcode = zonecode;
        if (Address) MyVariables.boardAddress.address = Address;
        if (AddressDetail)
          MyVariables.boardAddress.addressDetail = AddressDetail;
      }

      await updateBoard({
        variables: {
          updateBoardInput: MyVariables,
          password: inputs.password,
          boardId: String(router.query.board_Id),
        },
      });

      Modal.success({ content: "게시물이 수정되었습니다." });
      console.log(props.ToPre?.fetchBoard.boardAddress);
      router.push(`/boards/${router.query.board_Id}`);
    } catch (error) {
      Modal.error({
        title: "게시물 수정 실패",
        content: `${error.message}`,
      });
    }
  };

  return (
    <FreeBoardWriteUI
      ErrorName={ErrorName}
      ErrorPassword={ErrorPw}
      ErrorTitle={ErrorTitle}
      WriterContent={MainContent}
      ErrorContent={Errorcontent}
      isActive={isActive}
      register={register}
      EditBtn={EditBtn}
      isEdit={props.isEdit}
      ToPre={props.ToPre}
      isModalVisible={isModalVisible}
      onTogglePostModal={onTogglePostModal}
      onCompleteDaumPostcode={onCompleteDaumPostcode}
      Address={Address}
      zonecode={zonecode}
      AddressDetail={ChangeAddressDetail}
      onChangeInputs={onChangeInputs}
      onChangeFiles={onChangeFiles}
      filesRef={filesRef}
      ClickImage={ClickImage}
    />
  );
}
