import { ICountryInfo } from "../data/countryInfo";

export interface ICountryDataFun {
  data: ICountryInfo | null;
  error: string | null;
}
