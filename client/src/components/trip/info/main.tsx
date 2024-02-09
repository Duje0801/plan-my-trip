import { useEffect } from "react";
import { useTripContext } from "../../../context/tripContext";
import CountryInfo from "./components/countryInfo";
import ImagesCarousel from "./components/imagesCarousel";
import ItineraryDetails from "./components/itineraryDetails";
import MapBox from "./components/mapBox";

function Main() {
  const { tripState, tripDispatch } = useTripContext();

  //The useEffect is necessary because if the map isn't immediately displayed on the screen,
  //it won't load properly. This way, the map will load normally even if it's not displayed on
  //the screen (when it's narrower than 768px).
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768)
        tripDispatch({ type: "SET_NAV_OPTION", payload: 1 });
      else tripDispatch({ type: "SET_NAV_OPTION", payload: 0 });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="md:flex md:flex-row">
      {/*When navOption is 0, both info and map are displayed (Wide screen, greater than 768px). 
      When it's 1, only info is displayed, and when it's 2, only map is displayed (Narrow screen).*/}{" "}
      {tripState.navOption < 2 && (
        <section className="md:w-1/3">
          <CountryInfo />
          <ImagesCarousel />
          <ItineraryDetails />
        </section>
      )}
      {tripState.navOption !== 1 && (
        <section className="md:w-2/3 md:pb-6">
          <MapBox />
        </section>
      )}
    </main>
  );
}

export default Main;
