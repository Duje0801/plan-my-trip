import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "leaflet";
import { useAppContext } from "../context/context";
import Navigation from "../components/trip/navigation/navigation";
import Main from "../components/trip/info/main";

function Trip(): JSX.Element {
  const [navOption, setNavOption] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<number>(0);

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
      <div className="bg-slate-100 pb-2 min-h-[100vh]">
        <Navigation
          mapRef={mapRef}
          navOption={navOption}
          setNavOption={setNavOption}
          setSelectedDay={setSelectedDay}
        />
        <Main
          mapRef={mapRef}
          navOption={navOption}
          selectedDay={selectedDay}
          setNavOption={setNavOption}
          setSelectedDay={setSelectedDay}
        />
      </div>
    );
}

export default Trip;
