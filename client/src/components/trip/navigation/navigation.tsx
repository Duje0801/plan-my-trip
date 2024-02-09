import Top from "./components/top";
import Tabs from "./components/tabs";
import Buttons from "./components/buttons";

function Navigation() {
  return (
    <nav>
      <Top />
      <Tabs />
      <section className="flex flex-row md:hidden">
        <Buttons />
      </section>
    </nav>
  );
}

export default Navigation;
