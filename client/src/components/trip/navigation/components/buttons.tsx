import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../../context/appContext";
import { useTripContext } from "../../../../context/tripContext";
import { BsFillQuestionCircleFill } from "react-icons/bs";

function Buttons(): JSX.Element {
  const { dispatch } = useAppContext();
  const { tripState, tripDispatch } = useTripContext();

  const navigate = useNavigate();

  const modalRef = useRef<HTMLDialogElement | null>(null);

  //Code from this file (buttons) is used in two cases: the first one is when the screen is narrow,
  //in the 'navigation' file, and the second one is when the screen is wide, in the 'top' file.

  const handleOpenModal = (): void => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const clickResetMap = (): void => {
    tripDispatch({ type: "SET_SELECTED_DAY", payload: 0 });
    tripDispatch({
      type: "SET_RESETMAP",
      payload: tripState.resetMap === true ? false : true,
    });
  };

  const answerHomePageYes = (): void => {
    dispatch({ type: "SET_INPUT_TEXT", payload: `` });
    dispatch({ type: "SET_DAYS", payload: 0 });
    dispatch({
      type: "SET_ADV_SEARCH",
      payload: { month: ``, part: ``, nature: 0, history: 0, cities: 0 },
    });
    navigate(`/`);
  };

  const answerHomePageNo = (): void => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      {/*Go to Home Page button*/}
      <div className="flex justify-center my-4 mx-auto w-1/2 md:my-0 md:max-w-fit md:ml-auto md:mr-0">
        <button
          onClick={handleOpenModal}
          className="w-fit text-xl font-bold text-center mx-auto bg-slate-700 text-slate-100 py-1 px-4 rounded-lg md:text-sm xl:text-4xl hover:text-slate-300"
        >
          Home Page
        </button>
      </div>
      {/*Reset Map button*/}
      {tripState.navOption !== 1 ? (
        <div className="flex justify-center my-4 w-1/2 md:my-0 md:max-w-fit md:ml-auto md:mr-0">
          <button
            onClick={clickResetMap}
            className="w-fit text-xl font-bold text-center mx-auto bg-slate-700 text-slate-100 py-1 px-4 rounded-lg md:text-sm xl:text-4xl hover:text-slate-300"
          >
            Reset Map
          </button>
        </div>
      ) : null}
      <dialog ref={modalRef} id="toHomeModal" className="modal">
        <div className="modal-box">
          <BsFillQuestionCircleFill className="text-6xl mx-auto xl:text-8xl" />
          <p className="py-4 text-xl font-bold text-center xl:text-3xl">
            Are you sure you want to go to the home page?
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => answerHomePageYes()}
                className="btn bg-red-500 text-white hover:bg-red-300 xl:text-xl"
              >
                Yes
              </button>
            </form>
            <button
              onClick={() => answerHomePageNo()}
              className="btn bg-slate-300 text-slate-700 hover:bg-slate-100 xl:text-xl"
            >
              No
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Buttons;
