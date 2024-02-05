import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L, { Map } from "leaflet";
import MapCentering from "../../../../logic/mapCentering";
import { useAppContext } from "../../../../context/appContext";
import { useTripContext } from "../../../../context/tripContext";
import { ICoordsAndZoom } from "../../../../interfaces/coordsAndZoom";
import "leaflet/dist/leaflet.css";

interface Props {
  mapRef: React.RefObject<Map>;
}

function MapBox({ mapRef }: Props): JSX.Element {
  const { state } = useAppContext();
  const { tripState, tripDispatch } = useTripContext();

  const centerCoordinates: ICoordsAndZoom = MapCentering();

  const handleMarkerClick = (i: number): void => {
    tripDispatch({ type: "SET_SELECTED_DAY", payload: i + 1 });
  };

  return (
    <MapContainer
      className={"mx-4 rounded-lg h-[65vh] md:min-h-full md:pb-4"}
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
                tripState.selectedDay !== i + 1 ? `bg-slate-700` : `bg-red-500`
              }"><p class="w-fit h-fit m-auto">${day.day}</p></div>`,
            })}
            key={i}
          >
            {" "}
            <Popup maxWidth={window.innerWidth < 768 ? 250 : 325}>
              <div>
                <div className="text-base font-bold xl:text-2xl">
                  Day {day.day} - {day.name}
                </div>
                <p className="text-sm text-justify xl:text-xl">{day.description}</p>
              </div>
            </Popup>{" "}
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default MapBox;
