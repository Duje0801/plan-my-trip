import { useRef } from "react";

export default function Form(): JSX.Element {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4 w-[80vw]">
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder="I am traveling to ..."
            className="input input-bordered bg-slate-100 text-l text-slate-600 m-0 text-black focus:ring-1 ring-slate-300 w-3/5"
            maxLength={10}
          />
          <span className="text-l m-auto">for</span>
          <input
            type="number"
            placeholder="days."
            className="input input-bordered bg-slate-100 text-l text-slate-600 m-0 text-black w-1/4 focus:ring-1 ring-slate-300"
            min="2"
            max="31"
          />
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <button
            type="button"
            className="btn btn-active text-l bg-slate-300 w-1/2 hover:bg-slate-100"
            onClick={openModal}
          >
            Advanced Search
          </button>
          <button
            type="submit"
            className="btn btn-active text-l bg-slate-300 w-2/5 hover:bg-slate-100"
          >
            Submit
          </button>
        </div>
      </form>
      <dialog ref={modalRef} id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
