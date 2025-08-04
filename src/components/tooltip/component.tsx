import React from "react";
import { Tooltip as CustomTooltip, TooltipContent, TooltipTrigger } from "./ui";

type props = {
  triggerComponent?: React.ReactNode;
  children?: React.ReactNode;
};

const Tooltip = ({ ...props }: props) => {
  return (
    <CustomTooltip>
      <TooltipTrigger asChild>
        <button className="border-none bg-none outline-none">
          {props.triggerComponent}
        </button>
      </TooltipTrigger>
      <TooltipContent className="text-card-foreground-primary">
        {props.children}
      </TooltipContent>
    </CustomTooltip>
  );
};

export default Tooltip;
