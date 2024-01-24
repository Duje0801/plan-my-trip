import { Request, Response } from "express";

//Functions
import checkCountryExistFun from "../functions/checkCountryExist";
import countryDataFun from "../functions/countryData";
import generateItineraryFun from "../functions/generateItinerary";
import generatePhotosFun from "../functions/generatePhotos";

//Interfaces
import { ICountryCode } from "../interfaces/forFunctions/countryCode";
import { IItinerary } from "../interfaces/data/itinerary";
import { IPhoto } from "../interfaces/data/photo";
import { ICountryDataFun } from "../interfaces/forFunctions/countryDataFun";

//Dotenv
import dotenv from "dotenv";
dotenv.config();

export default async function results(req: Request, res: Response) {
  try {
    const country: string = String(req.query.country);
    const days: number = Number(req.query.days);

    //Checking whether the requested country exists in the database
    const checkCountryExist: ICountryCode | null =
      checkCountryExistFun(country);

    if (!checkCountryExist) {
      throw new Error("Can't find country in database.");
    }

    //Checking whether the number of days is below the minimum or above the maximum
    if (!days || days < 2 || days > 31)
      throw new Error("Allowed days number is between 2 and 31");

    //Obtaining general information about the country
    const countryData: ICountryDataFun = await countryDataFun(
      checkCountryExist
    );

    if (!countryData.data && countryData.error) {
      throw new Error(countryData.error);
    }

    //Generating itineraries from AI
    const itinerary: IItinerary = await generateItineraryFun(country, days);

    //Itinerary generation from Pexels
    const pictures: IPhoto[] | null = await generatePhotosFun(country);

    //Response
    res.json({
      status: `success`,
      countryData: countryData.data,
      itinerary,
      pictures,
    });
  } catch (error: any) {
    let errorObj = {};

    //Error handling if we are in production mode
    if (process.env.NODE_ENV === `production`) {
      if (
        error.message === "Allowed days number is between 2 and 31" ||
        error.message === "Can't find country in database."
      )
        errorObj = error.message;
      else
        errorObj = {
          message: "Can't create itinerary. Please try again later.",
        };
    }
    //Error handling if we are in development mode
    else {
      errorObj = {
        error: error.message,
        stack: error.stack,
        name: error.name,
      };
    }
    //Error response
    res.status(404).json({
      status: `fail`,
      error: errorObj,
    });
  }
}
