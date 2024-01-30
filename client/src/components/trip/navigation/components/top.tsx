import { Map } from "leaflet";
import Buttons from "./buttons";
import logo from "../../../../img/logo.png";

interface Props {
  mapRef: React.RefObject<Map>;
}

function Top({ mapRef }: Props) {
  return (
    <section className="flex overflow-hidden p-4 h-[10vh] md:flex md:flex-row md:justify-around md:h-24">
      {" "}
      <div className="w-1/3">
        <img src={logo} alt="logo" className="h-24 mx-auto md:h-32" />
      </div>
      <p className="m-auto text-slate-700 text-3xl font-bold md:w-1/3 md:text-center">
        PLAN MY TRIP
      </p>
      <div className="hidden md:visible md:w-1/3 md:flex md:flex-col md:gap-2">
        <Buttons mapRef={mapRef} />
      </div>
    </section>
  );
}

export default Top;
