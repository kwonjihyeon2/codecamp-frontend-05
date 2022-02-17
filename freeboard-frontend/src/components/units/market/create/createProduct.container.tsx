import CreateProductUI from "./createProduct.presenter";
import { useMutation, gql } from "@apollo/client";
// import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { useState } from "react";

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      contents
      price
      images
      tags
    }
  }
`;
interface IpropsCreateItem {
  name: string;
  remarks: string;
  price: number;
  contents: string;
  //   images: [string];
}
export default function CreateProductContainer() {
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  //   const [inputs, setInputs] = useState({
  //     name: "",
  //     remarks: "",
  //     price: Number(""),
  //     contents: "",
  //     tags: [""],
  //   });

  //   const onChangeInputs =
  //     (el: string) => (event: ChangeEvent<HTMLInputElement>) => {
  //       setInputs({
  //         ...inputs,
  //         [el]: event?.target.value,
  //       });
  //     };

  const [uploadfile, setUploadfile] = useState(["", ""]);

  const onChangefile = (file, index) => {
    const spreadfiles = [...uploadfile];
    spreadfiles[index] = file;
    setUploadfile(spreadfiles);
  };

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  //   const onClickSubmit = (data) => {
  //     console.log(data);
  //   };
  const onClickSubmit = (data: IpropsCreateItem) => {
    console.log(data);
  };

  const onClickCreate = async (data: IpropsCreateItem) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            // ...data,
            name: String(data.name),
            remarks: data.remarks,
            price: Number(data.price),
            contents: data.contents,
            images: uploadfile,
          },
        },
      });

      console.log(result.data?.createUseditem);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateProductUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickCreate={onClickCreate}
      onChangefile={onChangefile}
      uploadfile={uploadfile}
    />
  );
}
