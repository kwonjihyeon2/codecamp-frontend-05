import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsCart {
  data?: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}

export interface basketType {
  _id: string;
  tags: string[];
  remarks: string;
  price: number;
  name: string;
  images: string[];
}
