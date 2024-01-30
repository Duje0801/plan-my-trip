import { useAppContext } from "../../../../context/appContext";
import AreaConverter from "../../../../logic/areaConverter";
import CalcPopulation from "../../../../logic/calcPopulation";

function CountryInfo(): JSX.Element {
  const { state } = useAppContext();

  const areaNo: string = AreaConverter();
  const populationNo: string = CalcPopulation();

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
            <b>Area:</b> {areaNo} km2
          </p>
          <p>
            <b>Population:</b> {populationNo}
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
