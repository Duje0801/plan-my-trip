function Tabs(): JSX.Element {
  return (
    <div role="tablist" className="tabs tabs-lifted bg-slate-700 p-4 mx-4 rounded-lg">
      <div role="tablist" className="tabs tabs-boxed text-center bg-slate-100">
        <div
          role="tab"
          className="tab text-xl bg-slate-700 text-slate-100 mx-auto font-bold w-[25vw]"
        >
          Itinerary
        </div>
        <div role="tab" className="tab text-xl text-slate-700 mx-auto font-bold w-[25vw]">
          Map
        </div>
      </div>
    </div>
  );
}

export default Tabs;
