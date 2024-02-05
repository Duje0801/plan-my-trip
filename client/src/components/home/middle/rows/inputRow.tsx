import { Dispatch, SetStateAction } from "react";
import SearchResults from "./inputRowResults/searchResults";
import { useAppContext } from "../../../../context/appContext";
import { ICountryCode } from "../../../../interfaces/countryCode";

interface Props {
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  countriesList: ICountryCode[];
}

function InputRow({
  selectedCountry,
  setSelectedCountry,
  countriesList,
}: Props): JSX.Element {
  const { state, dispatch } = useAppContext();

  const checkOnlyLetters = (text: string): void => {
    //In country search only letters , ( and ) are allowed
    const regex = /^[a-zA-Z,() ]*$/;

    if (regex.test(text) || text === "") {
      dispatch({ type: "SET_INPUT_TEXT", payload: text });
    }
  };

  return (
    <div className="flex flex-row">
      {/* Destination Input */}
      <input
        type="text"
        placeholder="I am traveling to ..."
        className="input input-bordered bg-slate-100 text-l text-slate-700 m-0 text-black w-3/5 xl:text-2xl focus:bg-slate-300"
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
      <span className="text-l m-auto xl:text-2xl">for</span>
      {/* Days Input */}
      <input
        type="number"
        placeholder="...days"
        className="input input-bordered bg-slate-100 text-l text-slate-600 m-0 text-black w-1/4 xl:text-2xl focus:bg-slate-300"
        min="2"
        max="31"
        value={state.days || ``}
        onChange={(e) =>
          dispatch({ type: "SET_DAYS", payload: Number(e.target.value) })
        }
      />
    </div>
  );
}

export default InputRow;
