export default function AskQuestion(
  country: string,
  days: number,
  month: string,
  part: string,
  nature: number,
  history: number,
  cities: number
): string {
  return `Hi, give me ${days} day itinerary for trip in ${
    part ? `${part}` : ``
  } ${country}${month ? ` in ${month}` : ``}. ${
    nature === 50 ? `At least one day, the destination must be in nature.` : ``
  }${
    nature === 100 ? `The trip must be based on traveling through nature.` : ``
  }${
    history === 50
      ? `At least one day, the destination must be in history.`
      : ``
  }${
    history === 100
      ? `The trip must be based on traveling through historic places.`
      : ``
  }${
    cities === 50 ? `At least one day, the destination must be in city.` : ``
  }${
    cities === 100 ? `The trip must be based on traveling through cities.` : ``
  }
      Each day's description must have at least 30 words.`;
}
