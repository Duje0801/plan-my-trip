import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../../../context/appContext";
import { IPhoto } from "../../../../interfaces/tripData";
import { useCalcPhotosNumber } from "../../../../hooks/useCalcPhotosNumber";
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
  const photoNumbers = useCalcPhotosNumber(photoNo);

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

  if (!state.data?.photo || state.data?.photo.length === 0) return <div></div>;
  else
    return (
      <>
        {/*Images in info (between CountryInfo and ItineraryDetails)*/}
        <section className="carousel carousel-item mx-4 mb-4 h-[33vh] bg-slate-700 rounded-lg relative">
          <img src={photoInModal.url} className="w-auto h-full m-auto" />
          <MdOutlineZoomOutMap
            onClick={() => handlePhotoClick()}
            className="absolute top-2 right-2 text-3xl bg-slate-100 rounded-md cursor-pointer xl:text-5xl hover:bg-slate-300 
              hover:scale-105 transition-transform"
          />
          <div className="absolute bottom-2 left-2 text-slate-100 text-[0.5rem] xl:text-xl">
            {photoInModal.photographer}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              onClick={(e) => handleStopPropagation(e, photoNumbers.before)}
              className="btn btn-circle bg-slate-100 xl:text-4xl xl:h-16 xl:w-16 hover:bg-scale-300 hover:scale-105 transition-transform"
            >
              ❮
            </a>
            <a
              onClick={(e) => handleStopPropagation(e, photoNumbers.after)}
              className="btn btn-circle bg-slate-100 xl:text-4xl xl:h-16 xl:w-16 hover:bg-scale-300 hover:scale-105 transition-transform"
            >
              ❯
            </a>
          </div>
        </section>

        {/*Photo modal*/}
        <dialog ref={photoRef} id="errorModal" className="modal">
          <div className="modal-box xl:min-w-fit">
            <img
              src={photoInModal.url}
              className="m-auto max-h-[70vh] xl:min-h-[70vh]"
            ></img>
            <p className="text-center text-xs xl:text-xl">
              <b>Photo:</b> {photoInModal.photographer}
            </p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                onClick={(e) => handleStopPropagation(e, photoNumbers.before)}
                className="btn btn-circle bg-slate-100 transition-transform xl:h-24 xl:w-24 xl:text-6xl xl:ml-6 hover:bg-scale-300 hover:scale-105"
              >
                ❮
              </a>
              <a
                onClick={(e) => handleStopPropagation(e, photoNumbers.after)}
                className="btn btn-circle bg-slate-100 transition-transform xl:h-24 xl:w-24 xl:text-6xl xl:mr-6 hover:bg-scale-300 hover:scale-105"
              >
                ❯
              </a>
            </div>
            <div className="modal-action h-0 m-0">
              <form method="dialog">
                <button>
                  <IoMdCloseCircle className="absolute text-5xl bg-white text-red-500 top-0 right-0 rounded-full xl:h-24 xl:w-24 xl:text-6xl hover:text-red-300" />
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
}

export default ImagesCarousel;
