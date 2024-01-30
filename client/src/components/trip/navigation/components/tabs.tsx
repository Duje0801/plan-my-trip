import { useTripContext } from "../../../../context/tripContext";

function Tabs(): JSX.Element {
  const { tripState, tripDispatch } = useTripContext();

  const selected: string =
    "tab text-xl bg-slate-700 text-slate-100 mx-auto font-bold w-[25vw]";
  const notSelected: string =
    "tab text-xl text-slate-700 mx-auto font-bold w-[25vw]";

  return (
    <section
      role="tablist"
      className="tabs tabs-lifted bg-slate-700 p-4 mx-4 rounded-lg md:hidden"
    >
      <div role="tablist" className="tabs tabs-boxed text-center bg-slate-100">
        <div
          role="tab"
          onClick={() => tripDispatch({ type: "SET_NAV_OPTION", payload: 1 })}
          className={tripState.navOption === 1 ? selected : notSelected}
        >
          Itinerary
        </div>
        <div
          role="tab"
          onClick={() => tripDispatch({ type: "SET_NAV_OPTION", payload: 2 })}
          className={tripState.navOption === 2 ? selected : notSelected}
        >
          Map
        </div>
      </div>
    </section>
  );
}

export default Tabs;
