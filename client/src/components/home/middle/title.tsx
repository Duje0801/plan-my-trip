import logo from "../../img/logo.png";

export default function Title(): JSX.Element {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div>
        <img src={logo} alt="logo" className="h-28 mx-auto" />
      </div>
      <div className="flex flex-col gap-2 text-slate-300">
        <div className="text-5xl font-bold">PLAN MY TRIP</div>
        <div className="text-l">AI Generated Trips</div>
      </div>
    </div>
  );
}
