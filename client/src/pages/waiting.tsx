import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/context";
import waitingGif from "../img/waiting-img.gif";
import errorGif from "../img/error-img.gif";
import axios from "axios";

export default function Waiting() {
  const [error, setError] = useState(``);

  const { state, dispatch } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    function fetchData() {
      axios
        .get(
          `http://localhost:4000/api/trip/?country=${state.inputText}&days=${state.days}`
        )
        .then((res) => {
          dispatch({ type: "SET_DATA", payload: res.data.data });
          dispatch({ type: "SET_WAITING", payload: false });
          navigate(`/trip`);
        })
        .catch((err: any) => {
          if (err?.response?.data?.error?.message)
            setError(err.response.data.error.message);
          else setError("Something went wrong, please try again later.");
        });
    }
    fetchData();
  }, []);

  const handleGoBack = () => {
    dispatch({ type: "SET_WAITING", payload: false });
  };

  return (
    <div className="flex p-4 bg-slate-100 h-[100vh]">
      {" "}
      {!error ? (
        <div className="h-fit w-fit m-auto">
          <img src={waitingGif} alt="waitingGif" className="h-28 mx-auto" />
          <p className="text-3xl text-slate-700 font-bold text-center mt-6">
            Generating Itinerary
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6 h-fit w-fit m-auto">
          <img src={errorGif} alt="waitingGif" className="h-28 mx-auto" />
          <p className="text-3xl text-slate-700 font-bold text-center">
            Error! {error}
          </p>
          <button
            onClick={handleGoBack}
            className="btn bg-red-500 text-white border-0 w-fit mx-auto"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}
