import { useNavigate } from "react-router-dom";
import { Map } from "leaflet";
import MapCentering from "../../../../logic/mapCentering";
import { useAppContext } from "../../../../context/appContext";
import { useTripContext } from "../../../../context/tripContext";
import { ICoordsAndZoom } from "../../../../interfaces/coordsAndZoom";

interface Props {
  mapRef: React.RefObject<Map>;
}

function Buttons({ mapRef }: Props): JSX.Element {
  const { dispatch } = useAppContext();
  const { tripState, tripDispatch } = useTripContext();

  const navigate = useNavigate();

  //Code from this file (buttons) is used in two cases: the first one is when the screen is narrow,
  //in the 'navigation' file, and the second one is when the screen is wide, in the 'top' file.

  const centerCoordinates: ICoordsAndZoom = MapCentering();

  const clickResetMap = (): void => {
    tripDispatch({ type: "SET_SELECTED_DAY", payload: 0 });
    if (mapRef?.current) {
      mapRef.current.closePopup();
      mapRef.current.setView(
        centerCoordinates.avgCoordinates,
        centerCoordinates.zoom
      );
    }
  };

  const handleClickHomePage = (): void => {
    dispatch({ type: "SET_INPUT_TEXT", payload: `` });
    dispatch({ type: "SET_DAYS", payload: 0 });
    dispatch({
      type: "SET_ADV_SEARCH",
      payload: { month: ``, part: ``, nature: 0, history: 0, cities: 0 },
    });
    navigate(`/`);
  };

  return (
    <>
      {/*Go to Home Page button*/}
      <div className="flex justify-center my-4 mx-auto w-1/2 md:my-0 md:max-w-fit md:ml-auto md:mr-0">
        <button
          onClick={handleClickHomePage}
          className="w-fit text-xl font-bold text-center mx-auto bg-slate-700 text-slate-100 py-1 px-4 rounded-lg hover:text-slate-300 md:text-sm"
        >
          Home Page
        </button>
      </div>
      {/*Reset Map button*/}
      {tripState.navOption !== 1 ? (
        <div className="flex justify-center my-4 w-1/2 md:my-0 md:max-w-fit md:ml-auto md:mr-0">
          <button
            onClick={clickResetMap}
            className="w-fit text-xl font-bold text-center mx-auto bg-slate-700 text-slate-100 py-1 px-4 rounded-lg hover:text-slate-300 md:text-sm"
          >
            Reset Map
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Buttons;
