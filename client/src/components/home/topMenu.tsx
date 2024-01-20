export default function TopMenu(): JSX.Element {
  return (
    <ul className="flex flex-row absolute text-xl top-0 right-2 gap-2">
        <li className="text-slate-700 hover:text-slate-300">About</li>
        <li className="text-slate-700 hover:text-slate-300">Contact</li>
    </ul>
  );
}
