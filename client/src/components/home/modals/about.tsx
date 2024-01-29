function About(): JSX.Element {
  return (
    <div className="modal-box flex flex-col gap-4 border-2 border-black border-solid rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">About</h1>
      <p className="text-base text-slate-700 text-justify">
        Welcome to Plan My Trip! We are an innovative platform utilizing
        advanced artificial intelligence technologies to simplify the process of
        planning your perfect journey.
      </p>
      <p className="text-base text-slate-700 text-justify">
        Our platform allows you to effortlessly create travel itineraries
        tailored to your desires. You can select the specific region of the
        country you wish to visit, specify the preferred month of travel, and
        determine the priorities for your trip.
      </p>
      <p className="text-base text-slate-700 text-justify">
        {" "}
        Start planning your dream trip with us today!
      </p>

      <div className="modal-action mt-4">
        <form method="dialog">
          <button className="btn bg-slate-300 hover:bg-slate-100">Close</button>
        </form>
      </div>
    </div>
  );
}

export default About;
