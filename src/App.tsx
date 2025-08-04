import { Plane } from "lucide-react";
import "./App.css";
import Button from "./components/button/component";
import CometCard from "./components/comet_card/component";
import Loader from "./components/loader/component";
import Modal from "./components/modal/component";
import Navbar from "./components/navbar/component";
import TypewriterEffect from "./components/typewriter_effect/component";
import { AnimatedTooltip } from "./components/animated_tooltip/ui";
import Carousel from "./components/carousel/component";
import Codeblock from "./components/code_block/component";
import Compare from "./components/compare/component";
import Tooltip from "./components/tooltip/component";
import Checkbox from "./components/checkbox/component";
import Badge from "./components/badge/component";
import Contextmenu from "./components/context_menu/component";

function App() {
  return (
    <div className="w-screen h-screen p-16 flex flex-col items-center justify-start gap-2">
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

      <div className="mt-10">
        <Tooltip triggerComponent={<>Hover</>}>Hovered component</Tooltip>
      </div>

      <div>
        <Checkbox
          checkboxType="outlined"
          label="Accept the terms and conditions!"
          description="This is description."
        />
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <Badge badgeType="default" label="default" />
        <Badge badgeType="outline" label="Outline" />
        <Badge badgeType="secondary" label="secondary" />
        <Badge badgeType="destructive" label="destructive" />
        <Badge badgeType="verified" label="verified" />
        <Badge badgeType="digit" label="8" />
        <Badge badgeType="digit-destructive" label="99" />
        <Badge badgeType="digit-outline" label="99+" />
        <Badge badgeType="digit-secondary" label="9" />
      </div>

      <div className="mt-10">
        <Contextmenu triggerComponent={<div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">Right click here</div>} />
      </div>

      <div className="flex flex-row items-center justify-center mb-10 w-full mt-10">
        <AnimatedTooltip
          items={[
            {
              id: 1,
              name: "John Doe",
              designation: "Software Engineer",
              image:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
            },
            {
              id: 2,
              name: "Robert Johnson",
              designation: "Product Manager",
              image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            },
            {
              id: 3,
              name: "Jane Smith",
              designation: "Data Scientist",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            },
            {
              id: 4,
              name: "Emily Davis",
              designation: "UX Designer",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            },
            {
              id: 5,
              name: "Tyler Durden",
              designation: "Soap Developer",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
            },
            {
              id: 6,
              name: "Dora",
              designation: "The Explorer",
              image:
                "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
            },
          ]}
        />
      </div>
      <div className="w-full mb-20">
        <Carousel
          items={[
            {
              component: "Explore Component",
              src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              component: "Explore Component",
              src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              component: "Explore Component",
              src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              component: "Explore Component",
              src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ]}
        />
      </div>
      <div>
        <Codeblock file={Loader} />
      </div>
      <div>
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className=""
        />
      </div>
    </div>
  );
}

export default App;
