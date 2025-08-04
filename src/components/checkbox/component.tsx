import React from "react";
import { Checkbox as CustomCheckbox } from "./ui";
import { Label } from "../label/ui";
import { cn } from "../../utils/cn";

type props = {
  id?: string;
  label?: string;
  description?: string;
  children?: React.ReactNode;
  checkboxType?: "text" | "single" | "component" | "outlined";
  disabled?: boolean;
  onChange?: () => void;
  checked?: boolean;
  defaultChecked?: boolean;
  isError?: boolean;
  mainClassName?: string;
  labelClassName?: string;
  checkboxClassName?: string;
  descriptionClassName?: string;
};

const Checkbox = ({ ...props }: props) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {props.checkboxType === "text" && (
        <div className={cn("flex items-start gap-3", props.mainClassName)}>
          <CustomCheckbox
            disabled={props.disabled}
            className={cn("border-border-primary", props.checkboxClassName)}
            checked={props.checked}
            defaultChecked={props.defaultChecked}
            onChange={props.onChange}
            id={props.id}
          />
          <Label
            htmlFor={props.id}
            className={cn("text-foreground-primary", props.labelClassName)}
          >
            {props.label}
          </Label>
        </div>
      )}
      {props.checkboxType === "single" && (
        <div className={cn("flex items-start gap-3", props.mainClassName)}>
          <CustomCheckbox
            disabled={props.disabled}
            className={cn("border-border-primary", props.checkboxClassName)}
            checked={props.checked}
            defaultChecked={props.defaultChecked}
            onChange={props.onChange}
            id={props.id}
          />
          <div className="grid gap-2">
            <Label
              htmlFor={props.id}
              className={cn("text-foreground-primary", props.labelClassName)}
            >
              {props.label}
            </Label>
            <p
              className={cn(
                "text-foreground-primary text-sm",
                props.descriptionClassName
              )}
            >
              {props.description}
            </p>
          </div>
        </div>
      )}
      {props.checkboxType === "outlined" && (
        <Label
          className={cn(
            "hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950",
            props.mainClassName
          )}
        >
          <CustomCheckbox
            disabled={props.disabled}
            checked={props.checked}
            defaultChecked={props.defaultChecked}
            onChange={props.onChange}
            id={props.id}
            className={cn(
              "data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700",
              props.checkboxClassName
            )}
          />
          <div className="grid gap-1.5 font-normal">
            <Label
              htmlFor={props.id}
              className={cn("text-foreground-primary", props.labelClassName)}
            >
              {props.label}
            </Label>
            <p
              className={cn(
                "text-foreground-primary text-sm",
                props.descriptionClassName
              )}
            >
              {props.description}
            </p>
          </div>
        </Label>
      )}

      {props.checkboxType === "component" && (
        <div
          className={cn(
            "hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950",
            props.mainClassName
          )}
        >
          <CustomCheckbox
            disabled={props.disabled}
            checked={props.checked}
            defaultChecked={props.defaultChecked}
            onChange={props.onChange}
            id={props.id}
            className={cn(
              "data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700",
              props.checkboxClassName
            )}
          />
          <div className="grid gap-1.5 font-normal">{props.children}</div>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
