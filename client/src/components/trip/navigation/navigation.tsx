import { useEffect } from "react";
import { useTripContext } from "../../../context/tripContext";
import Top from "./components/top";
import Tabs from "./components/tabs";
import Buttons from "./components/buttons";
import { Map } from "leaflet";

interface Props {
  mapRef: React.RefObject<Map>;
}

function Navigation({ mapRef }: Props) {
  const { tripDispatch } = useTripContext();

  useEffect(() => {
    //Setting a new value for navOption if the screen is narrower than 768px.
    if (window.innerWidth < 768)
      tripDispatch({ type: "SET_NAV_OPTION", payload: 1 });
  }, []);

  return (
    <nav>
      <Top mapRef={mapRef} />
      <Tabs />
      <section className="flex flex-row md:hidden">
        <Buttons mapRef={mapRef} />
      </section>
    </nav>
  );
}

export default Navigation;
