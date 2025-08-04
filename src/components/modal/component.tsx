import React, { useState } from "react";
import {
  Modal as CustomModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui";
import Button from "../button/component";

type props = {
  triggerText?: string;
  triggerIcon?: React.ReactNode;
  children?: React.ReactNode;
  onSubmit?: (value?: any) => void;
  onCloseText?: string;
  onSubmitText?: string;
};

const Modal = ({ ...props }: props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <ModalTrigger className="bg-button-background-primary h-12 items-center text-button-foreground-primary flex justify-center group/modal-btn">
        <span
          className={`${
            props.triggerIcon ? "group-hover/modal-btn:translate-x-40" : ""
          } text-center transition duration-500`}
        >
          {props.triggerText}
        </span>
        {props.triggerIcon && (
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
            {props.triggerIcon}
          </div>
        )}
      </ModalTrigger>
      <ModalBody>
        <ModalContent>{props.children}</ModalContent>
        <ModalFooter className="gap-4">
          <Button
            onClick={() => setOpen(false)}
            buttonType="outlined"
            className="text-sm px-2 py-1 h-10 rounded-md w-28"
          >
            {props.onCloseText}
          </Button>
          <Button
            onClick={() => {
              props.onSubmit && props.onSubmit();
              setOpen(false);
            }}
            buttonType="contained"
            className="text-sm px-2 py-1 h-10 rounded-md w-28"
          >
            {props.onSubmitText}
          </Button>
        </ModalFooter>
      </ModalBody>
    </CustomModal>
  );
};

export default Modal;
