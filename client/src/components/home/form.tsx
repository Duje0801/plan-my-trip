import { useState, useEffect, useRef } from "react";
import SearchResults from "./searchResults";
import { Country } from "../../interfaces/country";
import { MdDangerous } from "react-icons/md";
import axios from "axios";

export default function Form(): JSX.Element {
  const [inputText, setInputText] = useState<string>(``);
  const [selectedCountry, setSelectedCountry] = useState<string>(``);
  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const [days, setDays] = useState<number>(0);
  const [error, setError] = useState<string>(``);

  const advSearchRef = useRef<HTMLDialogElement | null>(null);
  const errorRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    function fetchData() {
      axios
        .get(`http://localhost:4000/api/search/${inputText}`)
        .then((res) => {
          setCountriesList(res.data.countries);
        })
        .catch((err) => {
          setError("Something went wrong, please try again later.");
          if (errorRef.current) {
            errorRef.current.showModal();
          }
        });
    }
    if (inputText.length < 3) return setCountriesList([]);
    fetchData();
  }, [inputText]);

  const openAdvSearchModal = (): void => {
    if (advSearchRef.current) {
      advSearchRef.current.showModal();
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4 w-[80vw]">
        {/* 1st Row */}
        <div className="flex flex-row">
          {/* Destination Input */}
          <input
            type="text"
            placeholder="I am traveling to ..."
            className="input input-bordered bg-slate-100 text-l text-slate-600 m-0 text-black focus:ring-1 ring-slate-300 w-3/5"
            maxLength={15}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {/* Search Results */}
          {selectedCountry === inputText ? null : (
            <SearchResults
              inputText={inputText}
              countriesList={countriesList}
              setInputText={setInputText}
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
            value={days || ``}
            onChange={(e) => setDays(Number(e.target.value))}
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
            type="submit"
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
