import { Dispatch, SetStateAction } from "react";

interface Props {
  navOption: number;
  setNavOption: Dispatch<SetStateAction<number>>;
}

function Tabs({ navOption, setNavOption }: Props): JSX.Element {
  const selected: string =
    "tab text-xl bg-slate-700 text-slate-100 mx-auto font-bold w-[25vw]";
  const notSelected: string =
    "tab text-xl text-slate-700 mx-auto font-bold w-[25vw]";

  return (
    <div
      role="tablist"
      className="tabs tabs-lifted bg-slate-700 p-4 mx-4 rounded-lg"
    >
      <div role="tablist" className="tabs tabs-boxed text-center bg-slate-100">
        <div
          role="tab"
          onClick={() => setNavOption(1)}
          className={navOption === 1 ? selected : notSelected}
        >
          Itinerary
        </div>
        <div
          role="tab"
          onClick={() => setNavOption(2)}
          className={navOption === 2 ? selected : notSelected}
        >
          Map
        </div>
      </div>
    </div>
  );
}

export default Tabs;
