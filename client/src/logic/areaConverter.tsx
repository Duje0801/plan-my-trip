function AreaConverter(areaNumber: number): string {
  let toReturn: string = ``;
  const areaString: string = String(areaNumber);

  if (areaNumber < 1000) return areaString;

  for (let i = 1; i <= areaString.length; i++) {
    if (i % 3 === 0 && i !== areaString.length)
      toReturn = `,${areaString[areaString.length - i]}${toReturn}`;
    else toReturn = `${areaString[areaString.length - i]}${toReturn}`;
  }

  return toReturn;
}

export default AreaConverter;
