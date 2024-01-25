import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { CountryCode } from "../../interfaces/countryCode";
import { useAppContext } from "../../context/context";

interface Props {
  countriesList: CountryCode[];
  setSelectedCountry: Dispatch<SetStateAction<string>>;
}

export default function SearchResults({
  countriesList,
  setSelectedCountry,
}: Props): JSX.Element {
  const [searchPage, setSearchPage] = useState<number>(1);

  const { state, dispatch } = useAppContext();

  useEffect(() => {
    setSearchPage(1);
  }, [state.inputText]);

  const handleClick = (country: CountryCode) => {
    dispatch({ type: "SET_INPUT_TEXT", payload: country.name });
    setSelectedCountry(country.name);
  };

  const handleClickPage = (newPage: number) => {
    if (
      (newPage === -1 && searchPage === 1) ||
      (newPage === 1 && searchPage >= countriesList.length / 3)
    ) {
      return;
    } else setSearchPage(searchPage + newPage);
  };

  return (
    <div className="join join-vertical absolute mt-14">
      {/* Search Results */}
      {countriesList.map((country, i) => {
        const end: number = searchPage * 3 - 1;
        const start: number = (searchPage - 1) * 3;
        if (i >= start && i <= end)
          return (
            <div
              onClick={(e) => handleClick(country)}
              className="btn join-item w-48 text-slate-700 bg-slate-100 animate-none"
              key={i}
            >
              {country.name.length < 20
                ? country.name
                : country.name.substring(0, 19) + "..."}
            </div>
          );
        else return;
      })}

      {/* Previous and Next Buttons */}
      {countriesList.length >= 3 && (
        <div className="flex flex-row ">
          <button
            type="button"
            onClick={() => handleClickPage(-1)}
            className="btn bg-slate-300 text-slate-700 w-1/2 rounded-t-none rounded-br-none"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => handleClickPage(1)}
            className="btn bg-slate-300 text-slate-700 w-1/2 rounded-t-none rounded-bl-none"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
