import { Dispatch, SetStateAction } from "react";
import Top from "./components/top";
import Tabs from "./components/tabs";
import Buttons from "./components/buttons";
import { Map } from "leaflet";

interface Props {
  mapRef: React.RefObject<Map>;
  navOption: number;
  setNavOption: Dispatch<SetStateAction<number>>;
  setSelectedDay: Dispatch<SetStateAction<number>>;
}

function Navigation({
  mapRef,
  navOption,
  setNavOption,
  setSelectedDay,
}: Props) {
  return (
    <nav>
      <Top />
      <Tabs navOption={navOption} setNavOption={setNavOption} />
      <Buttons
        navOption={navOption}
        mapRef={mapRef}
        setSelectedDay={setSelectedDay}
      />
    </nav>
  );
}

export default Navigation;
