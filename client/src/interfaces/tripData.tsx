interface ICountryInfo {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  currencies: string[];
  population: number;
  area: string;
  flag: string;
}

interface IDay {
  day: number;
  destination: string;
  mainAttraction: string;
  coordinates: [number, number];
  description: string;
}

interface IItinerary {
  name: string;
  trip: IDay[];
}

interface IPhoto {
  photographer: string;
  url: string;
}

export interface ITripData {
  info: ICountryInfo;
  itinerary: IItinerary;
  photo: IPhoto;
}
