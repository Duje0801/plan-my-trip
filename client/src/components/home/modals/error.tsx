import { MdDangerous } from "react-icons/md";

interface Props {
  error: string;
}

function ErrorModal({ error }: Props): JSX.Element {
  return (
    <div className="modal-box border-2 border-black border-solid rounded-lg">
      <MdDangerous className="text-red-500 mx-auto text-6xl" />
      <p className="text-xl text-red-500 font-bold mt-6">{error}</p>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn bg-red-500 text-white">Close</button>
        </form>
      </div>
    </div>
  );
}

export default ErrorModal;
