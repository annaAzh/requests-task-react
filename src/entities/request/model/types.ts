export type ISODate = string;

export interface RequestType {
  id: number;
  title: string;
  description: string;
  category: string;
  created: ISODate;
}
