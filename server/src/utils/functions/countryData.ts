import fetch from "node-fetch";
import { ICountryCode } from "../../interfaces/forFunctions/countryCode";
import { ICountryDataFun } from "../../interfaces/forFunctions/countryDataFun";

export default async function countryInfoFun(
  country: ICountryCode
): Promise<ICountryDataFun> {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${country.code}`
  );

  if (!response.ok) {
    return {
      data: null,
      error: `Can't create trip itinerary, please try again later.`,
    };
  }

  const data = (await response.json())[0];

  if (!data) {
    return {
      data: null,
      error: `Can't create trip itinerary, please try again later.`,
    };
  }

  return {
    data: {
      name: {
        common: data.name.common,
        official: data.name.official,
      },
      capital: data.capital,
      region: data.region,
      currencies: Object.keys(data.currencies),
      population: data.population,
      area: data.area,
      flag: data.flags.png,
    },
    error: null,
  };
}
