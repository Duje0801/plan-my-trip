import { useAppContext } from "../../context/context";

interface Props {
  openAdvSearchModal: () => void;
}

function ButtonsRow({ openAdvSearchModal }: Props): JSX.Element {
  const { dispatch } = useAppContext();

  const handleClickSubmit = () => {
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
