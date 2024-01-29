import { Dispatch, SetStateAction } from "react";
import { useAppContext } from "../../../../context/context";

interface Props {
  setError: Dispatch<SetStateAction<string>>;
  openAdvSearchModal: () => void;
}

function ButtonsRow({ setError, openAdvSearchModal }: Props): JSX.Element {
  const { state, dispatch } = useAppContext();

  const handleClickSubmit = () => {
    if (state.inputText.length < 3)
      return setError(
        `Error! The number of characters in country search must be 3 or more.`
      );
    if (state.days < 2 || state.days > 31)
      return setError(`Error! The allowed number of days is between 2 and 31.`);
    dispatch({ type: "SET_WAITING", payload: true });
  };

  return (
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
  );
}

export default ButtonsRow;
