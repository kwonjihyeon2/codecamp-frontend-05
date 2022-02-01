import { ChangeEvent } from "react";

export interface IWriteConProps {
  isEdit: boolean;
  ToPre?: any;
}

export interface IPropsWriteUI {
  ToPre?: any;
  ErrorName: String;
  WriterName: (event: ChangeEvent<HTMLInputElement>) => void;
  WriterPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  ErrorPassword: String;
  WriterTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  ErrorTitle: String;
  WriterContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  ErrorContent: String;
  isActive: boolean;
  register: () => void;
  EditBtn: () => void;
  isEdit: boolean;
  MyYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onTogglePostModal: () => void;
  isModalVisible: boolean;
  onCompleteDaumPostcode: any;
  Address: any;
  zonecode: any;
  data?: any;
  AddressDetail: any;
}
