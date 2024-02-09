import { useAppContext } from "../context/appContext";

function useCalcPopulation(): string {
  const { state } = useAppContext();

  if (state.data) {
    if (
      state.data.info.population / 1000000 >= 0.1 &&
      state.data.info.population / 1000000 < 1000
    )
      return `${(state.data.info.population / 1000000).toFixed(2)} Million`;
    else if (state.data.info.population / 1000000 < 0.1) return `>0.1 Million`;
    else
      return `${(state.data.info.population / 1000000000).toFixed(2)} Billion`;
  } else return ``;
}

export { useCalcPopulation };
