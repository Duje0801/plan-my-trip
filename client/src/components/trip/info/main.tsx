import { Dispatch, SetStateAction } from "react";
import { Map } from "leaflet";
import CountryInfo from "./components/countryInfo";
import ImagesCarousel from "./components/imagesCarousel";
import ItineraryDetails from "./components/itineraryDetails";
import MapBox from "./components/mapBox";

interface Props {
  mapRef: React.RefObject<Map>;
  navOption: number;
  selectedDay: number;
  setNavOption: Dispatch<SetStateAction<number>>;
  setSelectedDay: Dispatch<SetStateAction<number>>;
}

function Main({
  mapRef,
  navOption,
  selectedDay,
  setNavOption,
  setSelectedDay,
}: Props) {
  return (
    <main>
      {/*If navOption is 1 it shows info, photos and itinerary (day by day), otherwise it shows the map*/}
      {navOption === 1 ? (
        <>
          {" "}
          <CountryInfo />
          <ImagesCarousel />
          <ItineraryDetails
            setSelectedDay={setSelectedDay}
            setNavOption={setNavOption}
          />
        </>
      ) : (
        <MapBox
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          mapRef={mapRef}
        />
      )}
    </main>
  );
}

export default Main;
