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
import { IpropsCreateItem, IPropsType } from "./createProduct.types";

export default function CreateProductContainer(props: IPropsType) {
  const router = useRouter();

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUsedItem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

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
      Modal.success({
        content: "상품이 등록되었습니다.",
      });
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickEdit = async (data: IpropsCreateItem) => {
    // const variables :IMutationUpdateUseditemArgs ={};

    try {
      await updateUsedItem({
        variables: {
          updateUseditemInput: {
            ...data,
          },
          useditemId: String(router.query.ItemId),
        },
      });

      console.log(props.fetchItem);
    } catch (error) {
      console.log(error.message);
    }
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
    />
  );
}
