import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "leaflet";
import { useAppContext } from "../context/appContext";
import { useTripContext } from "../context/tripContext";
import Navigation from "../components/trip/navigation/navigation";
import Main from "../components/trip/info/main";

function Trip(): JSX.Element {
  const { state } = useAppContext();

  const navigate = useNavigate();

  //This is a map reference, the code for the map is in the MapBox file
  const mapRef = useRef<Map>(null);

  const { tripDispatch } = useTripContext();

  useEffect(() => {
    if (!state.data) navigate(`/`);

    //Setting a new value for navOption if the screen is narrower than 768px.
    if (window.innerWidth < 768)
      tripDispatch({ type: "SET_NAV_OPTION", payload: 1 });
  }, []);

  if (!state.data) return <div className="h-[100vh] bg-slate-100"></div>;
  else
    return (
      <div className="bg-slate-100 pb-2 min-h-[100vh]">
        <Navigation mapRef={mapRef} />
        <Main mapRef={mapRef} />
      </div>
    );
}

export default Trip;
