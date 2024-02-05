import logo from "../../../img/logo.png";

export default function Title(): JSX.Element {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div>
        <img src={logo} alt="logo" className="h-28 mx-auto" />
      </div>
      <div className="flex flex-col gap-2 text-slate-300">
        <h1 className="text-5xl font-bold xl:text-7xl">PLAN MY TRIP</h1>
        <p className="text-l xl:text-2xl">AI Generated Trips</p>
      </div>
    </div>
  );
}
