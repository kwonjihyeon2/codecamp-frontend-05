import CreateProductUI from "./createProduct.presenter";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./createProduct.queries";
import {
  IMyVariableUpdateItem,
  IpropsCreateItem,
  IPropsType,
} from "./createProduct.types";

export default function CreateProductContainer(props: IPropsType) {
  const router = useRouter();

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const [uploadfile, setUploadfile] = useState(["", ""]);

  const onChangefile = (file: string, index: number) => {
    const spreadfiles = [...uploadfile];
    spreadfiles[index] = file;
    setUploadfile(spreadfiles);
  };

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const [isModal, setIsModal] = useState(false);
  const [Address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");

  const onToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const onPostcode = (data: any) => {
    console.log(data);
    setAddress(data.address);
    setZonecode(data.zonecode);
    onToggleModal();
  };

  const [tag, setTag] = useState<string[]>([]);
  const onChangeTag = (event) => {
    if (event.target.value && event.key === "Enter") {
      const NewTag = [...tag, event.target.value];
      if (NewTag.length > 5) {
        Modal.error({
          content: "태그는 5개까지만 등록 가능합니다",
        });
        event.target.value = "";
        return;
      }
      setTag(NewTag);
      event.target.value = "";
    }
  };

  const onDeleteTag = (number: number) => () => {
    const SliceTag = tag.splice(number, 1);
    setTag(SliceTag);
  };
  // console.log(tag);

  const onClickSubmit = async (data: IpropsCreateItem) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            useditemAddress: {
              zipcode: zonecode,
              address: Address,
            },
            price: Number(data.price),
            images: uploadfile,
            tags: tag,
          },
        },
      });

      console.log(result.data?.createUseditem);
      Modal.success({
        content: "상품이 등록되었습니다.",
      });
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickEdit = async (data: IpropsCreateItem) => {
    try {
      const variables: IMyVariableUpdateItem = {};

      if (data.name) variables.name = data.name;
      if (data.price) variables.price = Number(data.price);
      if (data.contents) variables.contents = data.contents;
      if (data.remarks) variables.remarks = data.remarks;
      if (uploadfile) variables.images = uploadfile;

      await updateUseditem({
        variables: {
          updateUseditemInput: variables,
          useditemId: String(router.query.ItemId),
        },
      });

      router.push(`/market/${router.query.ItemId}`);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
      console.log(error.message);
    }
  };

  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  return (
    <CreateProductUI
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onChangefile={onChangefile}
      uploadfile={uploadfile}
      onClickEdit={onClickEdit}
      fetchItem={props.fetchItem}
      onChangeContents={onChangeContents}
      isModal={isModal}
      Address={Address}
      zonecode={zonecode}
      onToggleModal={onToggleModal}
      onPostcode={onPostcode}
      onChangeTag={onChangeTag}
      tag={tag}
      onDeleteTag={onDeleteTag}
    />
  );
}
