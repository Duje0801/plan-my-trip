import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/context";
import Top from "../components/trip/navigation/top";
import Tabs from "../components/trip/navigation/tabs";
import CountryInfo from "../components/trip/info/countryInfo";
import ItineraryDetails from "../components/trip/info/itineraryDetails";
import ImagesCarousel from "../components/trip/info/imagesCarousel";
import MapBox from "../components/trip/info/mapBox";

function Trip(): JSX.Element {
  const [navOption, setNavOption] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const { state } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state.data) navigate(`/`);
  }, []);

  if (!state.data) return <div className="h-[100vh] bg-slate-100"></div>;
  else
    return (
      <div className="bg-slate-100 pb-2 min-h-[100vh]">
        <nav>
          <Top />
          <Tabs navOption={navOption} setNavOption={setNavOption} />
        </nav>
        {/*If navOption is 1 it shows info, photos and itinerary (day by day), otherwise it shows the map*/}
        <main>
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
            <MapBox selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          )}
        </main>
      </div>
    );
}

export default Trip;
