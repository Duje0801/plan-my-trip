import OpenAI from "openai";
import { IItinerary } from "../../interfaces/data/itinerary";

import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export default async function generateItineraryFun(
  question: string
): Promise<IItinerary> {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0613",
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
    functions: [
      {
        name: "createItinerary",
        parameters: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Name of the Country where I will travel",
            },
            trip: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  day: {
                    type: "number",
                    description: "Day of the trip",
                  },
                  name: {
                    type: "string",
                    description: "Name of the destination",
                  },
                  mainAttraction: {
                    type: "string",
                    description: "Name of the main attraction for this day",
                  },
                  coordinates: {
                    type: "array",
                    description:
                      "Coordinates of the main attraction (lat and lng)",
                    items: {
                      type: "number",
                    },
                  },
                  description: {
                    type: "string",
                    description:
                      "Explane what to do on this day of the trip with description of main attraction.",
                  },
                },
                required: [
                  "day",
                  "destination",
                  "coordinates",
                  "mainAttraction",
                  "description",
                ],
              },
            },
          },
          required: ["name", "trip"],
        },
      },
    ],
    function_call: "auto",
  });

  const functionCall: any = chatCompletion.choices[0].message.function_call;
  return JSON.parse(functionCall.arguments);
}
