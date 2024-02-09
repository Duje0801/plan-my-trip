import Buttons from "./buttons";
import logo from "../../../../img/logo.png";

function Top() {
  return (
    <section className="flex overflow-hidden p-4 h-[10vh] md:flex md:flex-row md:justify-around md:h-24 xl:h-[20vh]">
      {" "}
      <div className="w-1/3">
        <img src={logo} alt="logo" className="h-24 mx-auto md:h-32 xl:h-full" />
      </div>
      <p className="m-auto text-slate-700 text-3xl font-bold md:w-1/3 md:text-center xl:text-8xl">
        PLAN MY TRIP
      </p>
      <div className="hidden md:visible md:w-1/3 md:flex md:flex-col md:my-auto md:gap-2">
        <Buttons />
      </div>
    </section>
  );
}

export default Top;
