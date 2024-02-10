import { Request, Response } from "express";
import { IErrorObject } from "../interfaces/forFunctions/errorObject";

import dotenv from "dotenv";
dotenv.config();

export default function wrongUrl(req: Request, res: Response) {
  let errorObject: IErrorObject = {};

  if (process.env.NODE_ENV === `production`) {
    errorObject = { message: `Something went wrong, please try again later.` };
  } else {
    errorObject = { message: `Cant find ${req.originalUrl} on this server.` };
  }

  res.status(404).json({
    status: `fail`,
    error: errorObject,
  });
}
