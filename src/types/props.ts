export interface IIcon {
  width: number;
  height: number;
  stroke?: string;
}

export interface ILocationInfo {
  imag: string;
  title: string;
  price: number;
  option?: string[];
  comment: number;
  ownerImg: string;
  rate: number;
}

export interface IFilter {
  openFilter: boolean;
  openSort: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSort: React.Dispatch<React.SetStateAction<boolean>>;
}
