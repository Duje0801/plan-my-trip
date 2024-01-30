import { useAppContext } from "../context/appContext";
import { ICoordsAndZoom } from "../interfaces/coordsAndZoom";

function MapCentering(): ICoordsAndZoom {
  const { state } = useAppContext();

  let avgCoordinates: [number, number] = [0, 0];
  let allLat: number[] = [];
  let zoom: number = 0;

  const width: number = window.innerWidth;

  state.data?.itinerary.trip.forEach((day) => {
    avgCoordinates[0] += day.coordinates[0];
    avgCoordinates[1] += day.coordinates[1];
  });

  avgCoordinates[0] = avgCoordinates[0] / state.data?.itinerary.trip.length!;
  avgCoordinates[1] = avgCoordinates[1] / state.data?.itinerary.trip.length!;

  state.data?.itinerary.trip.forEach((day) => {
    allLat.push(day.coordinates[1]);
  });

  const maxLat: number = Math.max(...allLat);
  const minLat: number = Math.min(...allLat);

  if (maxLat - minLat < 2) zoom = 7;
  else if (maxLat - minLat < 5) zoom = width < 768 ? 5 : 7;
  else if (maxLat - minLat < 14) zoom = width < 768 ? 4 : 6;
  else if (maxLat - minLat < 20) zoom = width < 768 ? 3 : 5;
  else zoom = width < 768 ? 2 : 4;

  return { avgCoordinates, zoom };
}

export default MapCentering;
