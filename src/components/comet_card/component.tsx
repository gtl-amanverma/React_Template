import React from "react";
import { CometCard as CustomCometCard } from "./ui";
import { cn } from "../../utils/cn";

type props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const CometCard = ({ ...props }: props) => {
  return (
    <CustomCometCard>
      <div
        className={cn(
          "p-4 rounded-xl bg-card-background-primary text-card-foreground-primary",
          props.className
        )}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    </CustomCometCard>
  );
};

export default CometCard;
