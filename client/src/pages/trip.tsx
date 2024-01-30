import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "leaflet";
import { useAppContext } from "../context/appContext";
import Navigation from "../components/trip/navigation/navigation";
import Main from "../components/trip/info/main";
import { TripContextProvider } from "../context/tripContext";

function Trip(): JSX.Element {
  const { state } = useAppContext();

  const navigate = useNavigate();

  //This is a map reference, the code for the map is in the MapBox file
  const mapRef = useRef<Map>(null);

  useEffect(() => {
    if (!state.data) navigate(`/`);
  }, []);

  if (!state.data) return <div className="h-[100vh] bg-slate-100"></div>;
  else
    return (
      <TripContextProvider>
        <div className="bg-slate-100 pb-2 min-h-[100vh]">
          <Navigation mapRef={mapRef} />
          <Main mapRef={mapRef} />
        </div>
      </TripContextProvider>
    );
}

export default Trip;
