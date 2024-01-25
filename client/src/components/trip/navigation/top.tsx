import logo from "../../../img/logo.png";

function Top() {
  return (
    <div className="flex overflow-hidden p-4 h-[10vh]">
      {" "}
      <img src={logo} alt="logo" className="h-24 mx-auto" />
      <p className="m-auto text-slate-700 text-3xl font-bold">PLAN MY TRIP</p>
    </div>
  );
}

export default Top;
