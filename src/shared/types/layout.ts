export interface Menu {
  id: number;
  title: string;
  alias: string;
  children: any[];
}
export interface Social {
  id: number;
  title: string;
  options?: string;
  files: {
    img: string;
  }[];
}
