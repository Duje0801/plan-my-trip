import { useAppContext } from "../../../../context/appContext";
import { useTripContext } from "../../../../context/tripContext";

function ItineraryDetails(): JSX.Element {
  const { state } = useAppContext();

  const { tripDispatch } = useTripContext();

  const handleSeeMapClick = (i: number): void => {
    tripDispatch({ type: "SET_SELECTED_DAY", payload: i + 1 });
    if (window.innerWidth < 768) {
      tripDispatch({ type: "SET_NAV_OPTION", payload: 2 });
    }
  };

  if (!state.data) return <div></div>;
  else
    return (
      <section>
        {state.data.itinerary.trip.map((day, i) => {
          return (
            <div
              key={i}
              className="collapse collapse-arrow bg-slate-700 mx-4 mb-4 w-fit rounded-lg"
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title flex flex-row text-xl text-slate-100 font-bold p-4 xl:text-3xl">
                Day {day.day} - {day.name}
              </div>
              <div className="collapse-content">
                <p className="text-justify text-slate-100 xl:text-2xl">
                  <b>What to do:</b> {day.description}
                </p>
                <p className="mt-2 text-slate-100 xl:text-2xl">
                  <b>Main attraction to see:</b> {day.mainAttraction}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleSeeMapClick(i)}
                    className="btn btn-active text-l text-slate-700 bg-slate-100 w-full mt-2 xl:text-2xl hover:bg-slate-300"
                  >
                    {window.innerWidth < 768 ? "See" : "Highlight"} on the map
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
}

export default ItineraryDetails;
