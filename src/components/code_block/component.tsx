import React from "react";
import { CodeBlock } from "./ui";

type props = {
  file: React.ComponentType<any> | ((...args: any[]) => React.JSX.Element);
};

const Codeblock = ({ ...props }: props) => {
  return (
    <CodeBlock
      language="tsx"
      filename="DummyComponent.tsx"
      highlightLines={[9, 13, 14, 18]}
      code={typeof props.file === "function" ? props.file.toString() : ""}
    />
  );
};

export default Codeblock;
