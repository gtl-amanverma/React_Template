import React from "react";
import { TypewriterEffectSmooth } from "./ui";

interface TTextType {
  text: string;
  className?: string;
}

type props = {
  words: Array<TTextType>;
};

const TypewriterEffect = ({ ...props }: props) => {
  return <TypewriterEffectSmooth words={props.words} />;
};

export default TypewriterEffect;
