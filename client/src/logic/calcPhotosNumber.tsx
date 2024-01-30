import { useAppContext } from "../context/appContext";
import { IPhotosNumbers } from "../interfaces/photosNumbers";

function CalcPhotosNumber(photoNo: number): IPhotosNumbers {
  const { state } = useAppContext();

  const before: number =
    photoNo < 1 ? state.data?.photo.length! - 1 : photoNo - 1;
  const after: number =
    photoNo === state.data?.photo.length! - 1 ? 0 : photoNo + 1;

  return { before, after };
}

export default CalcPhotosNumber;
