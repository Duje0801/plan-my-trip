import countriesList from "../../data/countriesList.json";
import { ICountryCode } from "../../interfaces/forFunctions/countryCode";

export default function checkCountryExistFun(
  country: string
): ICountryCode | null {
  let countryExist: ICountryCode | null = null;

  for (let i = 0; i < countriesList.length; i++) {
    if (country.toLowerCase() === countriesList[i].name.toLowerCase()) {
      countryExist = countriesList[i];
      break;
    }
  }

  return countryExist;
}
