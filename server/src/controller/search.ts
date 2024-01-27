import { Request, Response } from "express";
import countriesList from "../data/countriesList.json";
import { ICountryCode } from "../interfaces/forFunctions/countryCode";

export default function search(req: Request, res: Response) {
  const params: string = req.params.id;
  let countriesArray: ICountryCode[] = [];

  if (params.length < 3 || params.length > 30)
    return res.status(400).json({
      status: `fail`,
      error: `Search text length must be between 3 characters and 30 characters`,
    });

  for (let i = 0; i < countriesList.length; i++) {
    if (countriesList[i].name.toLowerCase().includes(params.toLowerCase()))
      countriesArray.push(countriesList[i]);
  }

  res.status(200).json({ status: `success`, countries: countriesArray });
}
