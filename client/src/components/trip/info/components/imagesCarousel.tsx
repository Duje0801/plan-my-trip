import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../../../context/appContext";
import { IPhoto } from "../../../../interfaces/tripData";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

function ImagesCarousel(): JSX.Element {
  const [photoInModal, setPhotoInModal] = useState<IPhoto>({
    url: ``,
    photographer: ``,
  });
  const [photoNo, setPhotoNo] = useState<number>(0);

  const { state } = useAppContext();

  const photoRef = useRef<HTMLDialogElement | null>(null);

  //Calculate the number of images before and after the one displayed on the screen
  const photoBefore: number =
    photoNo < 1 ? state.data?.photo.length! - 1 : photoNo - 1;
  const photoAfter: number =
    photoNo === state.data?.photo.length! - 1 ? 0 : photoNo + 1;

  useEffect(() => {
    setPhotoInModal(state.data?.photo[0]!);
  }, []);

  const handlePhotoClick = (): void => {
    if (photoRef.current) {
      photoRef.current.showModal();
    }
  };

  const handleStopPropagation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    iteration: number
  ): void => {
    setPhotoInModal(state.data?.photo[iteration]!);
    setPhotoNo(iteration);
    e.stopPropagation();
    return;
  };

  return (
    <>
      {/*Images in info (between CountryInfo and ItineraryDetails)*/}
      <section className="carousel carousel-item mx-4 mb-4 h-[33vh] bg-slate-700 rounded-lg relative">
        <img src={photoInModal.url} className="w-fit h-full m-auto" />
        <MdOutlineZoomOutMap
          onClick={() => handlePhotoClick()}
          className="absolute top-2 right-2 text-3xl bg-slate-100 rounded-md cursor-pointer hover:bg-slate-300 
              hover:scale-105 transition-transform"
        />
        <div className="absolute bottom-2 left-2 text-slate-100 text-[0.5rem]">
          {photoInModal.photographer}
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            onClick={(e) => handleStopPropagation(e, photoBefore)}
            className="btn btn-circle bg-slate-100 hover:bg-scale-300 hover:scale-105 transition-transform"
          >
            ❮
          </a>
          <a
            onClick={(e) => handleStopPropagation(e, photoAfter)}
            className="btn btn-circle bg-slate-100 hover:bg-scale-300 hover:scale-105 transition-transform"
          >
            ❯
          </a>
        </div>
      </section>

      {/*Photo modal*/}
      <dialog ref={photoRef} id="errorModal" className="modal">
        <div className="modal-box">
          <div>
            <img
              src={photoInModal.url}
              className="w-fit h-fit max-h-[65vh] m-auto"
            ></img>
            <p className="text-center text-xs">
              <b>Photo:</b> {photoInModal.photographer}
            </p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                onClick={(e) => handleStopPropagation(e, photoBefore)}
                className="btn btn-circle bg-slate-100 hover:bg-scale-300 hover:scale-105 transition-transform"
              >
                ❮
              </a>
              <a
                onClick={(e) => handleStopPropagation(e, photoAfter)}
                className="btn btn-circle bg-slate-100 hover:bg-scale-300 hover:scale-105 transition-transform"
              >
                ❯
              </a>
            </div>
          </div>
          <div className="modal-action h-0 m-0">
            <form method="dialog">
              <button>
                <IoMdCloseCircle className="absolute text-5xl bg-white text-red-500 top-0 right-0 rounded-full hover:text-red-300" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ImagesCarousel;
