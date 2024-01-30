import { useAppContext } from "../context/appContext";

export function FetchString(): string {
  const { state } = useAppContext();

  return `http://localhost:4000/api/trip/?country=${state.inputText}&days=${
    state.days
  }${state.advSearch.month ? `&month=${state.advSearch.month}` : ``}${
    state.advSearch.part ? `&part=${state.advSearch.part}` : ``
  }${state.advSearch.nature > 0 ? `&nature=${state.advSearch.nature}` : ``}${
    state.advSearch.history > 0 ? `&history=${state.advSearch.history}` : ``
  }${state.advSearch.cities > 0 ? `&cities=${state.advSearch.cities}` : ``}`;
}
