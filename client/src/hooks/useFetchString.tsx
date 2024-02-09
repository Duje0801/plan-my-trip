import { useAppContext } from "../context/appContext";

function useFetchString(): string {
  const { state } = useAppContext();

  return `https://plan-my-tripappts-production.up.railway.app/api/trip/?country=${
    state.inputText
  }&days=${state.days}${
    state.advSearch.month ? `&month=${state.advSearch.month}` : ``
  }${state.advSearch.part ? `&part=${state.advSearch.part}` : ``}${
    state.advSearch.nature > 0 ? `&nature=${state.advSearch.nature}` : ``
  }${state.advSearch.history > 0 ? `&history=${state.advSearch.history}` : ``}${
    state.advSearch.cities > 0 ? `&cities=${state.advSearch.cities}` : ``
  }`;
}

export { useFetchString };
