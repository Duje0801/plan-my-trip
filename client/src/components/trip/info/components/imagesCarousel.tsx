import { useAppContext } from "../../../../context/context";

function ImagesCarousel(): JSX.Element {
  const { state } = useAppContext();

  return (
    <section className="carousel mx-4 mb-4 h-[33vh] rounded-lg">
      {state.data?.photo.map((photo, i) => {
        return (
          <div
            key={i}
            id={`slide${i}`}
            className="carousel-item bg-slate-700 relative w-full relative"
          >
            <img src={photo.url} className="w-fit h-full m-auto" />
            <div className="absolute bottom-2 left-2 text-slate-100 text-[0.5rem]">{photo.photographer}</div>
          </div>
        );
      })}
    </section>
  );
}

export default ImagesCarousel;
