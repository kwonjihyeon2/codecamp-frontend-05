import CreateProductUI from "./createProduct.presenter";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [uploadfile, setUploadfile] = useState(["", ""]);

  const onChangefile = (file: string, index: number) => {
    const spreadfiles = [...uploadfile];
    spreadfiles[index] = file;
    setUploadfile(spreadfiles);
  };

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onClickSubmit = async (data: IpropsCreateItem) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            price: Number(data.price),
            images: uploadfile,
          },
        },
      });

      console.log(result.data?.createUseditem);
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CreateProductUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onChangefile={onChangefile}
      uploadfile={uploadfile}
    />
  );
}
