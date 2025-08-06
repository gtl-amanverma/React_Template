import "./App.css";
import BackgroundOne from "./components/animated_background/background_1";
import BackgroundTwo from "./components/animated_background/background_2";
import BackgroundThree from "./components/animated_background/background_3";
import { Card } from "./components/card/ui";
import DemoCode from "./demo/demo_code";
import LoginTemplate from "./templates/public/login/template";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* <DemoCode /> */}
      {/* <BackgroundOne /> */}
      {/* <BackgroundTwo /> */}
      <BackgroundThree />
      <LoginTemplate />
    </div>
  );
}

export default App;
