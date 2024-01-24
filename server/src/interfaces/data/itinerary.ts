export interface IDay {
  day: number;
  destination: string;
  mainAttraction: string;
  coordinates: [number, number];
  description: string;
}

export interface IItinerary {
  name: string;
  trip: IDay[];
}
