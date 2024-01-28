import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "leaflet";
import { useAppContext } from "../../../../context/context";
import MapCentering from "../../../../logic/mapCentering";
import { ICoordsAndZoom } from "../../../../interfaces/coordsAndZoom";

interface Props {
  navOption: number;
  mapRef: React.RefObject<Map>;
  setSelectedDay: Dispatch<SetStateAction<number>>;
}

function Buttons({ navOption, mapRef, setSelectedDay }: Props): JSX.Element {
  const { dispatch } = useAppContext();

  const navigate = useNavigate();

  const centerCoordinates: ICoordsAndZoom = MapCentering();

  const clickResetMap = (): void => {
    setSelectedDay(0);
    if (mapRef.current) {
      mapRef.current.closePopup();
      mapRef.current.setView(
        centerCoordinates.avgCoordinates,
        centerCoordinates.zoom
      );
    }
  };

  const handleClickHomePage = () => {
    dispatch({ type: "SET_INPUT_TEXT", payload: `` });
    dispatch({ type: "SET_DAYS", payload: 0 });
    dispatch({
      type: "SET_ADV_SEARCH",
      payload: { month: ``, part: ``, nature: 0, history: 0, cities: 0 },
    });
    navigate(`/`);
  };

  return (
    <div className="flex flex-row px-4">
      {/*Go to home page button*/}
      <div className="flex justify-center mt-4 mx-auto w-1/2">
        <button
          onClick={handleClickHomePage}
          className="w-fit text-xl font-bold text-center mx-auto bg-slate-700 text-slate-100 py-1 px-4 rounded-lg"
        >
          Home Page
        </button>
      </div>
      {/*Reset map button*/}
      {navOption === 2 ? (
        <div className="flex justify-center mt-4 w-1/2">
          <button
            onClick={clickResetMap}
            className="w-fit text-xl font-bold text-center mx-auto bg-slate-700 text-slate-100 py-1 px-4 rounded-lg"
          >
            Reset Map
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Buttons;
