import { useAppContext } from "../context/context";

function MapCentering(): [number, number] {
  const { state } = useAppContext();

  let allCoordinatesSum: [number, number] = [0, 0];

  state.data?.itinerary.trip.forEach((day) => {
    allCoordinatesSum[0] += day.coordinates[0];
    allCoordinatesSum[1] += day.coordinates[1];
  });

  allCoordinatesSum[0] =
    allCoordinatesSum[0] / state.data?.itinerary.trip.length!;
  allCoordinatesSum[1] =
    allCoordinatesSum[1] / state.data?.itinerary.trip.length!;

  return allCoordinatesSum;
}

export default MapCentering;
