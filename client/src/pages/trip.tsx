import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/context";
import Top from "../components/trip/navigation/top";
import Tabs from "../components/trip/navigation/tabs";
import CountryInfo from "../components/trip/info/countryInfo";
import ItineraryDetails from "../components/trip/info/itineraryDetails";
import ImagesCarousel from "../components/trip/info/imagesCarousel";
import Map from "../components/trip/info/map";

function Trip(): JSX.Element {
  const [navOption, setNavOption] = useState<number>(1);

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
        {navOption === 1 ? (
          <>
            {" "}
            <CountryInfo />
            <ImagesCarousel />
            <ItineraryDetails />
          </>
        ) : (
          <Map />
        )}
      </div>
    );
}

export default Trip;
