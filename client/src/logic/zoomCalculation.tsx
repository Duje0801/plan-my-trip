import { useAppContext } from "../context/context";

function ZoomCalculation(): number {
  const { state } = useAppContext();

  let allLat: number[] = [];

  state.data?.itinerary.trip.forEach((day) => {
    allLat.push(day.coordinates[1]);
  });

  const maxLat: number = Math.max(...allLat);
  const minLat: number = Math.min(...allLat);

  if (maxLat - minLat < 2) return 7;
  else if (maxLat - minLat < 5) return 6;
  else if (maxLat - minLat < 14) return 5;
  else if (maxLat - minLat < 20) return 4;
  else return 3;
}

export default ZoomCalculation;
