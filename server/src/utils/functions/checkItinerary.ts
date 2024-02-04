import { IItinerary } from "../../interfaces/data/itinerary";

export default function checkItinerary(itinerary: IItinerary): boolean {
  let isCorrect: boolean = true;

  //1. Check if the destination starts with day 1.
  for (let i = 0; i < itinerary.trip.length; i++) {
    if (itinerary.trip[i].name.toLowerCase().startsWith(`day ${i + 1}`)) {
      isCorrect = false;
      return isCorrect;
    }
  }

  for (let day of itinerary.trip) {
    //2. Check if the coordinates are in array format
    if (!Array.isArray(day.coordinates)) {
      isCorrect = false;
      return isCorrect;
    }

    //3. Check if the coordinates are numbers
    for (let i = 0; i < day.coordinates.length; i++) {
      if (typeof day.coordinates[i] !== `number` || isNaN(day.coordinates[i])) {
        isCorrect = false;
        return isCorrect;
      }
    }
  }

  return isCorrect;
}
