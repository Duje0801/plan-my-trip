import { useState, useEffect, useRef, FormEvent } from "react";
import SearchResults from "./searchResults";
import { CountryCode } from "../../interfaces/countryCode";
import { MdDangerous } from "react-icons/md";
import { useAppContext } from "../../context/context";
import axios from "axios";

export default function Form(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>(``);
  const [countriesList, setCountriesList] = useState<CountryCode[]>([]);
  const [error, setError] = useState<string>(``);

  const advSearchRef = useRef<HTMLDialogElement | null>(null);
  const errorRef = useRef<HTMLDialogElement | null>(null);

  const { state, dispatch } = useAppContext();

  useEffect(() => {
    function fetchData() {
      axios
        .get(`http://localhost:4000/api/search/${state.inputText}`)
        .then((res) => {
          setCountriesList(res.data.countries);
        })
        .catch((err: any) => {
          setError("Something went wrong, please try again later.");
          if (errorRef.current) {
            errorRef.current.showModal();
          }
        });
    }
    if (state.inputText.length < 3) return setCountriesList([]);
    fetchData();
  }, [state.inputText]);

  const openAdvSearchModal = (): void => {
    if (advSearchRef.current) {
      advSearchRef.current.showModal();
    }
  };

  const checkOnlyLetters = (text: string): void => {
    //In country search only letters , ( and ) are allowed
    const regex = /^[a-zA-Z,() ]*$/;

    if (regex.test(text) || text === "") {
      dispatch({ type: "SET_INPUT_TEXT", payload: text });
    }
  };

  //The itinerary is generated only after clicking the submit button
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    return;
  };

  const handleClickSubmit = () => {
    dispatch({ type: "SET_WAITING", payload: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[80vw]">
        {/* 1st Row */}
        <div className="flex flex-row">
          {/* Destination Input */}
          <input
            type="text"
            placeholder="I am traveling to ..."
            className="input input-bordered bg-slate-100 text-l text-slate-600 m-0 text-black focus:ring-1 ring-slate-300 w-3/5"
            maxLength={30}
            value={state.inputText}
            onChange={(e) => checkOnlyLetters(e.target.value)}
          />
          {/* Search Results */}
          {selectedCountry === state.inputText ? null : (
            <SearchResults
              countriesList={countriesList}
              setSelectedCountry={setSelectedCountry}
            />
          )}
          <span className="text-l m-auto">for</span>
          {/* Days Input */}
          <input
            type="number"
            placeholder="...days"
            className="input input-bordered bg-slate-100 text-l text-slate-600 m-0 text-black w-1/4 focus:ring-1 ring-slate-300"
            min="2"
            max="31"
            value={state.days || ``}
            onChange={(e) =>
              dispatch({ type: "SET_DAYS", payload: Number(e.target.value) })
            }
          />
        </div>

        {/* 2nd Row */}
        <div className="flex flex-row gap-4 justify-between">
          {/* Advanced Search Button */}
          <button
            type="button"
            className="btn btn-active text-l bg-slate-300 w-1/2 hover:bg-slate-100"
            onClick={openAdvSearchModal}
          >
            Advanced Search
          </button>
          {/* Submit Button */}
          <button
            type="button"
            onClick={handleClickSubmit}
            className="btn btn-active text-l bg-slate-300 w-2/5 hover:bg-slate-100"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Advanced Search Modal */}
      <dialog ref={advSearchRef} id="advancedSearchModal" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Error Modal */}
      <dialog ref={errorRef} id="advancedSearchModal" className="modal">
        <div className="modal-box border-2 border-black border-solid">
          <MdDangerous className="text-red-500 mx-auto text-6xl" />
          <p className="text-xl text-red-500 font-bold mt-6">{error}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-red-500 text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
