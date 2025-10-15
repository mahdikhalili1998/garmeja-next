export interface IIcon {
  width: number;
  height: number;
  stroke?: string;
}

export interface ILocationInfo {
  imag: string;
  title: string;
  price: number;
  homeInfo?: string[];
  comment: number;
  ownerImg: string;
  rate: number;
  roomNumber: number;
  bedNumber: number;
  capicity: number;
}

export interface IFilter {
  openFilter: boolean;
  openSort: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSort: React.Dispatch<React.SetStateAction<boolean>>;
  setLocationInfo: React.Dispatch<React.SetStateAction<ILocationInfo[]>>;
}

export interface IFilterOptionPage {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setLocationInfo: React.Dispatch<React.SetStateAction<ILocationInfo[]>>;
}
export interface ISortOptionPage {
  setOpenSort: React.Dispatch<React.SetStateAction<boolean>>;
  setLocationInfo: React.Dispatch<React.SetStateAction<ILocationInfo[]>>;
}

export interface IH1 {
  openOption: string[];
  id: string;
  title: string;
  setOpenOption: React.Dispatch<React.SetStateAction<string[]>>;
}
