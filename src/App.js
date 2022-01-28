import logo from "./logo.svg";
import "./App.css";
import myWonderfulImage from "./IMG_20200826_114009.jpg"

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Yacine Babour</h1>
      <br />
      <img src="/1369012.jpg" />
      <br />
      <img src="/IMG_20200826_114009.jpg" />

      <video width={320} height={240} controls="">
        <source src="Snapchat-1279937773.mp4" type="video/mp4" />
      </video>
      return <img src={myWonderfulImage}  />
    </div>
  );
}

   
export default App;
