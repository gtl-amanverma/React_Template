import React from "react";
import {
  Sheet as CustomSheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui";
import { cn } from "../../utils/cn";

type props = {
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
};

const Sheet = ({ ...props }: props) => {
  return (
    <CustomSheet>
      <SheetTrigger asChild>
        <button className="border-none outline-none">{props.trigger}</button>
      </SheetTrigger>
      <SheetContent
        className={cn(
          "bg-background-primary backdrop-blur-md w-[95%] md:w-auto overflow-auto scrollbar-hide"
        )}
        side={props.side ?? "right"}
      >
        <SheetHeader>
          {props.title && <SheetTitle>{props.title}</SheetTitle>}
          {props.description && (
            <SheetDescription>{props.description}</SheetDescription>
          )}
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4 mb-5">
          {props.children}
        </div>
      </SheetContent>
    </CustomSheet>
  );
};

export default Sheet;
