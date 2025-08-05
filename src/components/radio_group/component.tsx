import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui";
import { Label } from "../label/ui";

interface TRadioOptionType {
  id: string;
  title: string;
  value: string;
  htmlFor: string;
  disabled: boolean;
  isError: boolean;
}

type props = {
    options: Array<TRadioOptionType>;
    onChange?: (value: string) => void;
    defaultValue?: string;
    value?: string;
    isError?: boolean;
}

const Radiogroup = ({...props}: props) => {
  const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
    if (props.onChange) {
      const target = event.target as HTMLInputElement;
      props.onChange(target.value);
    }
  };

  return (
    <RadioGroup defaultValue={props.defaultValue} value={props.value} onChange={handleChange}>
      {props.options.map((option, index) => {
        return (
          <div key={index} className="flex items-center gap-3">
            <RadioGroupItem disabled={option.disabled} value={option.value} id={option.id} className={props.isError ? `border-border-danger` : `${option.isError ? "border-border-danger" : ""}`} />
            <Label htmlFor={option.htmlFor} className={props.isError ? `text-foreground-danger` : `${option.isError ? "text-foreground-danger" : ""}`}>{option.title}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};

export default Radiogroup;
