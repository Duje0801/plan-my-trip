import { Dispatch, SetStateAction } from "react";
import { MdDangerous } from "react-icons/md";

interface Props {
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

function ErrorModal({ error, setError }: Props): JSX.Element {
  const handleClick = (): void => {
    setError(``);
  };

  return (
    <div className="modal-box border-2 border-black border-solid rounded-lg">
      <MdDangerous className="text-red-500 mx-auto text-6xl" />
      <p className="text-xl text-red-500 font-bold mt-6">{error}</p>
      <div className="modal-action">
        <form method="dialog">
          <button
            onClick={handleClick}
            className="btn bg-red-500 text-white hover:bg-red-300 hover:border-red-500"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default ErrorModal;
