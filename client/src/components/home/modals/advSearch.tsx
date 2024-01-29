import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/context";
import { countryParts } from "../../../data/countryParts";
import { months } from "../../../data/months";

function AdvSearch(): JSX.Element {
  const [month, setMonth] = useState<string>(``);
  const [part, setPart] = useState<string>(``);
  const [nature, setNature] = useState<number>(0);
  const [history, setHistory] = useState<number>(0);
  const [cities, setCities] = useState<number>(0);

  const { state, dispatch } = useAppContext();

  useEffect(() => {
    setMonth(state.advSearch.month);
    setPart(state.advSearch.part);
    setNature(state.advSearch.nature);
    setHistory(state.advSearch.history);
    setCities(state.advSearch.cities);
  }, []);

  const changeMonth = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setMonth(event.target.value);
  };

  const changeCountryPart = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setPart(event.target.value);
  };

  const changeNatureValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNature(Number(event.target.value));
    if (Number(event.target.value) === 100) {
      if (history === 100) setHistory(0);
      if (cities === 100) setCities(0);
    }
  };

  const changeHistoryValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setHistory(Number(event.target.value));
    if (Number(event.target.value) === 100) {
      if (nature === 100) setNature(0);
      if (cities === 100) setCities(0);
    }
  };

  const changeCitiesValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCities(Number(event.target.value));
    if (Number(event.target.value) === 100) {
      if (nature === 100) setNature(0);
      if (history === 100) setHistory(0);
    }
  };

  const handleClickSave = (): void => {
    dispatch({
      type: "SET_ADV_SEARCH",
      payload: { month, part, nature, history, cities },
    });
  };

  return (
    <div className="modal-box flex flex-col border-2 border-slate-700 rounded-lg">
      <h1 className="text-2xl text-slate-700 font-bold mb-4">
        Advanced Options
      </h1>
      <div className="flex flex-col gap-2">
        {/*Choosing the month for travel*/}
        <div className="flex flex-col gap-2 border-2 p-2 border-slate-700 rounded-lg">
          <p className="text-slate-700 text-l">I will go in ...</p>
          <select
            onChange={changeMonth}
            className="select select-sm text-slate-700 w-2/3 mx-auto text-l border-2 border-slate-700 rounded-lg 
            focus:outline-none focus:border-2 focus:border-slate-700"
            defaultValue={state.advSearch.month || ""}
          >
            {months.map((month, i) => {
              return (
                <option className="text-slate-700 text-l" key={i}>
                  {month}
                </option>
              );
            })}
          </select>
        </div>

        {/*Choosing the part of the country I'm traveling to*/}
        <div className="flex flex-col gap-2 border-2 p-2 border-slate-700 rounded-lg">
          <p className="text-slate-700 text-l">I want to visit...</p>
          <select
            onChange={changeCountryPart}
            className="select select-sm text-slate-700 w-2/3 mx-auto text-l border-2 border-slate-700 rounded-lg 
            focus:outline-none focus:border-2 focus:border-slate-700"
            defaultValue={state.advSearch.part || ""}
          >
            {countryParts.map((part, i) => {
              return (
                <option className="text-slate-700 text-l" key={i}>
                  {part}
                </option>
              );
            })}
          </select>
          <p className="text-slate-700 text-l">...part(s) of the country.</p>
        </div>

        {/*Choosing what to base the trip around*/}
        <div className="border-2 p-2 border-slate-700 rounded-lg">
          <p className="text-slate-700 text-l">
            I want my trip to be based on...
          </p>
          <div className="flex gap-6 my-2">
            <p className="text-slate-700 text-l w-1/3">Nature</p>
            <input
              type="range"
              min={0}
              max={100}
              value={nature}
              className="range my-auto w-1/2"
              step="50"
              onChange={changeNatureValue}
            />
          </div>
          <div className="flex gap-6 my-2">
            <p className="text-slate-700 text-l w-1/3">History</p>
            <input
              type="range"
              min={0}
              max={100}
              value={history}
              className="range my-auto w-1/2"
              step="50"
              onChange={changeHistoryValue}
            />
          </div>
          <div className="flex gap-6 my-2">
            <p className="text-slate-700 text-l w-1/3">Cities</p>
            <input
              type="range"
              min={0}
              max={100}
              value={cities}
              className="range my-auto w-1/2"
              step="50"
              onChange={changeCitiesValue}
            />
          </div>{" "}
          <p className="text-xs text-slate-700">
            *Only one category can be at maximum
          </p>
        </div>
      </div>

      {/*Buttons*/}
      <form method="dialog">
        <div className="flex justify-between mt-2">
          <button
            onClick={handleClickSave}
            className="btn btn-active text-l bg-slate-300 ml-auto w-fit hover:bg-slate-100"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdvSearch;
