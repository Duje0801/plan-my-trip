import { useAppContext } from "../../../../context/appContext";
import AreaConverter from "../../../../logic/areaConverter";

function CountryInfo(): JSX.Element {
  const { state } = useAppContext();

  if (!state.data) return <div></div>;
  else
    return (
      <section className="flex flex-col gap-2 mx-4 mb-4 p-4 text-slate-100 bg-slate-700 rounded-lg relative">
        <p className="flex justify-between text-3xl">
          <b>{state.data.info.name.common}</b>
          <img
            src={state.data.info.flag}
            alt="flag"
            className="h-8 my-auto rounded-lg border-2 border-slate-100"
          ></img>
        </p>
        <div>
          <p>
            <b>Official name:</b> {state.data.info.name.official}
          </p>
          <p>
            <b>Region:</b> {state.data.info.region}
          </p>
          <p>
            <b>Capital:</b>{" "}
            {state.data.info.capital.map((el, i) => (
              <span key={i}>{el}</span>
            ))}
          </p>
          <p>
            <b>Area:</b> {AreaConverter(Number(state.data.info.area))} km2
          </p>
          <p>
            <b>Population:</b>{" "}
            {state.data.info.population / 1000000 > 0.1
              ? `${(state.data.info.population / 1000000).toFixed(2)}`
              : `>0.1`}{" "}
            Million
          </p>
          <p>
            <b>Currency:</b>{" "}
            {state.data.info.currencies.map((el, i) => (
              <span key={i}>{el}</span>
            ))}
          </p>
        </div>
      </section>
    );
}

export default CountryInfo;
