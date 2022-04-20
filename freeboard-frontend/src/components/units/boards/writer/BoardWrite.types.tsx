import { ChangeEvent } from "react";

export interface IWriteConProps {
  isEdit: boolean;
  ToPre?: any;
}

export interface IPropsWriteUI {
  ToPre?: any;
  ErrorName: String;
  ErrorPassword: String;
  ErrorTitle: String;
  WriterContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  ErrorContent: String;
  isActive: boolean;
  register: () => void;
  EditBtn: () => void;
  isEdit: boolean;
  onTogglePostModal: () => void;
  isModalVisible: boolean;
  onCompleteDaumPostcode: any;
  Address: any;
  zonecode: any;
  data?: any;
  AddressDetail: any;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeUrls: any;
  files: any;
}

export interface IMyVariableUpdateBoard {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}
