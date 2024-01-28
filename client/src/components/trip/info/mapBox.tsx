import { useRef, Dispatch, SetStateAction } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L, { Map } from "leaflet";
import MapCentering from "../../../logic/mapCentering";
import { useAppContext } from "../../../context/context";
import { ICoordsAndZoom } from "../../../interfaces/coordsAndZoom";
import "leaflet/dist/leaflet.css";

interface Props {
  selectedDay: number;
  setSelectedDay: Dispatch<SetStateAction<number>>;
}

function MapBox({ selectedDay, setSelectedDay }: Props): JSX.Element {
  const { state } = useAppContext();

  const mapRef = useRef<Map>(null);

  const centerCoordinates: ICoordsAndZoom = MapCentering();

  const handleMarkerClick = (i: number): void => {
    setSelectedDay(i + 1);
  };

  const clickResetMap = (): void => {
    setSelectedDay(0);
    if (mapRef.current) {
      mapRef.current.closePopup();
      mapRef.current.setView(
        centerCoordinates.avgCoordinates,
        centerCoordinates.zoom
      );
    }
  };

  return (
    <section>
      <div className="flex justify-center mt-4">
        <button
          onClick={clickResetMap}
          className="w-fit text-xl font-bold text-center mx-auto bg-slate-700 text-slate-100 py-1 px-4 rounded-lg"
        >
          Reset Map
        </button>
      </div>
      <MapContainer
        className="m-4 h-[70vh] rounded-lg"
        center={centerCoordinates.avgCoordinates}
        zoom={centerCoordinates.zoom}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {state.data?.itinerary.trip.map((day, i) => {
          return (
            <Marker
              position={day.coordinates}
              eventHandlers={{
                click: () => {
                  handleMarkerClick(i);
                },
              }}
              icon={L.divIcon({
                className: `custom-div-icon`,
                html: `<div class="flex translate-x-[-37.5%] custom-div-icon text-slate-100 text-xl w-10 h-10 rounded-full ${
                  selectedDay !== i + 1 ? `bg-slate-700` : `bg-red-500`
                }"><p class="w-fit h-fit m-auto">${day.day}</p></div>`,
              })}
              key={i}
            >
              {" "}
              <Popup maxWidth={250}>
                <div>
                  <div className="text-base font-bold">
                    Day {day.day} - {day.name}
                  </div>
                  <p className="text-sm text-justify">{day.description}</p>
                </div>
              </Popup>{" "}
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
}

export default MapBox;
