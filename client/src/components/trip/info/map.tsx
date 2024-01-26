import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import MapCentering from "../../../logic/mapCentering";
import ZoomCalculation from "../../../logic/zoomCalculation";
import { useAppContext } from "../../../context/context";
import "leaflet/dist/leaflet.css";

function Map(): JSX.Element {
  const { state } = useAppContext();

  const centerCoordinates: [number, number] = MapCentering();

  const zoomCalculation: number = ZoomCalculation();

  return (
    <div>
      <MapContainer
        className="m-4 h-[70vh] rounded-lg"
        center={centerCoordinates}
        zoom={zoomCalculation}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {state.data?.itinerary.trip.map((day, i) => {
          return (
            <Marker
              position={day.coordinates}
              icon={L.divIcon({
                className: `custom-div-icon`,
                html: `<div class="flex translate-x-[-37.5%] custom-div-icon text-slate-100 text-xl w-10 h-10 rounded-full bg-slate-700">
                <p class="w-fit h-fit m-auto">
                ${day.day}
                </p>
                </div>`,
              })}
              key={i}
            >
              {" "}
              <Popup maxWidth={250}>
                <div className="p-2">
                  <div className="text-base font-bold">
                    Day {day.day} - {day.destination}
                  </div>
                  <p className="text-sm text-justify">{day.description}</p>
                </div>
              </Popup>{" "}
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
