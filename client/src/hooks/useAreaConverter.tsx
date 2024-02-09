import { useAppContext } from "../context/appContext";

function useAreaConverter(): string {
  const { state } = useAppContext();

  let toReturn: string = ``;
  const areaString: string = String(Number(state.data?.info.area));

  if (Number(state.data?.info.area) < 1000) return areaString;

  for (let i = 1; i <= areaString.length; i++) {
    if (i % 3 === 0 && i !== areaString.length)
      toReturn = `,${areaString[areaString.length - i]}${toReturn}`;
    else toReturn = `${areaString[areaString.length - i]}${toReturn}`;
  }

  return toReturn;
}

export { useAreaConverter };
