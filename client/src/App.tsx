import TopMenu from "./components/home/topMenu";
import Middle from "./components/home/middle";
import video from "./img/video.mp4";

function App(): JSX.Element {
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

export default App;
