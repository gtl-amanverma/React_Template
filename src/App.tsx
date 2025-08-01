import "./App.css";
import Button from "./components/button/component";
import CometCard from "./components/comet_card/component";
import Loader from "./components/loader/component";
import Navbar from "./components/navbar/component";

function App() {
  return (
    <div className="w-screen h-screen p-16 flex flex-col items-center justify-center gap-2">
      <div className="w-full">
        <Navbar className="top-2" />
      </div>
      <Button buttonType="contained" type="reset">
        Aman Verma
      </Button>
      <CometCard className="w-96 h-96 mb-64">Aman</CometCard>
      <Loader
        isFullScreen={false}
        loaderType="loaderOne"
        className="bg-gray-800"
      />
    </div>
  );
}

export default App;
