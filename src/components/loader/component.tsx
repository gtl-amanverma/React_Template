import React from "react";
import { cn } from "../../utils/cn";
import {
  LoaderFive,
  LoaderFour,
  LoaderOne,
  LoaderThree,
  LoaderTwo,
} from "./ui";

type props = {
  isFullScreen?: boolean;
  className?: string;
  loaderType?:
    | "loaderOne"
    | "loaderTwo"
    | "loaderThree"
    | "loaderFour"
    | "loaderFive";
  text?: string;
};

const Loader = ({ ...props }: props) => {
  return props.isFullScreen ? (
    <div
      className={cn(
        "w-screen h-screen absolute left-0 top-0 flex items-center justify-center bg-background-secondary",
        props.className
      )}
    >
      {props.loaderType === "loaderFive" ? (
        <LoaderFive text={props.text ?? "Loading..."} />
      ) : props.loaderType === "loaderTwo" ? (
        <LoaderTwo />
      ) : props.loaderType === "loaderThree" ? (
        <LoaderThree />
      ) : props.loaderType === "loaderFour" ? (
        <LoaderFour />
      ) : (
        <LoaderOne />
      )}
    </div>
  ) : (
    <div>
      {props.loaderType === "loaderFive" ? (
        <LoaderFive text={props.text ?? "Loading..."} />
      ) : props.loaderType === "loaderTwo" ? (
        <LoaderTwo />
      ) : props.loaderType === "loaderThree" ? (
        <LoaderThree />
      ) : props.loaderType === "loaderFour" ? (
        <LoaderFour />
      ) : (
        <LoaderOne />
      )}
    </div>
  );
};

export default Loader;
