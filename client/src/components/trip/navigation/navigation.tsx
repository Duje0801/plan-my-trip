import Top from "./components/top";
import Tabs from "./components/tabs";
import Buttons from "./components/buttons";
import { Map } from "leaflet";

interface Props {
  mapRef: React.RefObject<Map>;
}

function Navigation({ mapRef }: Props) {
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
