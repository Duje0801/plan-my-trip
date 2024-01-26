import { Dispatch, SetStateAction } from "react";
import { useAppContext } from "../../../context/context";

interface Props {
  setSelectedDay: Dispatch<SetStateAction<number>>;
  setNavOption: Dispatch<SetStateAction<number>>;
}

function ItineraryDetails({
  setSelectedDay,
  setNavOption,
}: Props): JSX.Element {
  const { state } = useAppContext();

  const handleSeeMapClick = (i: number): void => {
    setSelectedDay(i + 1);
    setNavOption(2);
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
              <div className="collapse-title flex flex-row text-xl text-slate-100 font-bold p-4">
                Day {day.day} - {day.destination}
              </div>
              <div className="collapse-content">
                <p className="text-justify text-slate-100">
                  <b>What to do:</b> {day.description}
                </p>
                <p className="mt-2 text-slate-100">
                  <b>Main attraction to see:</b> {day.mainAttraction}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleSeeMapClick(i)}
                    className="btn btn-active text-l text-slate-100 bg-slate-700 w-full mt-2 hover:bg-slate-100"
                  >
                    See on the map
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
