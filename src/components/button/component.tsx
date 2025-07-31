import React from "react";
import { cn } from "../../utils/cn";
import { BottomGradient } from "../bottom_gradient/ui";

type props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  buttonType?: "outlined" | "contained";
  type?: "button" | "submit" | "reset";
  actionType?: "primary" | "secondary" | "danger";
};

const Button = ({ ...props }: props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type ?? "button"}
      className={cn(
        `group/btn shadow-input ${
          props.buttonType === "contained"
            ? "bg-button-background-primary text-button-foreground-primary"
            : "bg-transparent border border-border-primary text-foreground-primary"
        } relative flex p-4 w-full items-center justify-center space-x-2 px-4 font-medium select-none rounded-2xl`,
        props.className
      )}
    >
      {props.children}
      <BottomGradient />
    </button>
  );
};

export default Button;
