export interface IDay {
  day: number;
  name: string;
  mainAttraction: string;
  coordinates: [number, number];
  description: string;
}

export interface IItinerary {
  name: string;
  trip: IDay[];
}
