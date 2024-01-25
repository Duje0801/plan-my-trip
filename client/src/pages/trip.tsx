import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/context";
import Top from "../components/trip/navigation/top";
import Tabs from "../components/trip/navigation/tabs";
import CountryInfo from "../components/trip/info/countryInfo";
import ItineraryDetails from "../components/trip/info/itineraryDetails";

function Trip(): JSX.Element {
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
          <Tabs />
        </nav>
        <CountryInfo />
        <ItineraryDetails />
      </div>
    );
}

export default Trip;
