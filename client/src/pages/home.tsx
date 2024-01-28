import { useAppContext } from "../context/context";
import TopMenu from "../components/home/topMenu/topMenu";
import Middle from "../components/home/middle/middle";
import Waiting from "./waiting";
import video from "../img/video.mp4";

function Home(): JSX.Element {
  const { state } = useAppContext();

  if (state.waiting) return <Waiting />;
  else
    return (
      <div className="hero max-h-screen max-w-screen relative">
        <video className="h-[100vh] w-[100vw] object-cover" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <TopMenu />
        <Middle />
      </div>
    );
}

export default Home;
