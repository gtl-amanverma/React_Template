import { Plane } from "lucide-react";
import "./App.css";
import Button from "./components/button/component";
import CometCard from "./components/comet_card/component";
import Loader from "./components/loader/component";
import Modal from "./components/modal/component";
import Navbar from "./components/navbar/component";
import TypewriterEffect from "./components/typewriter_effect/component";

function App() {
  return (
    <div className="w-screen h-screen p-16 flex flex-col items-center justify-center gap-2">
      <div className="w-full">
        <Navbar className="top-2" />
      </div>
      <Button buttonType="contained" type="reset">
        Aman Verma
      </Button>
      <div>
        <CometCard className="w-96 h-96 mb-10">Aman</CometCard>
      </div>
      <div className="border">
        <Loader
          isFullScreen={false}
          loaderType="loaderOne"
          className="bg-gray-800"
        />
      </div>
      <TypewriterEffect
        words={[
          {
            text: "Build",
          },
          {
            text: "awesome",
          },
          {
            text: "apps",
          },
          {
            text: "with",
          },
          {
            text: "Aceternity.",
            className: "text-blue-500 dark:text-blue-500",
          },
        ]}
      />

      <Modal
        triggerText="Open Modal"
        triggerIcon={<Plane />}
        onCloseText="Close"
        onSubmitText="Submit"
      >
        <div>Aman Verma</div>
      </Modal>
    </div>
  );
}

export default App;
