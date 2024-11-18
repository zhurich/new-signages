import React, { FC, ReactNode } from "react";
import {
  Modal as DefaultModal,
  ModalProps as DefaultModalProps,
} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import block from "bem-cn";
import "./Modal.scss";

export interface ModalProps {
	className?: string;
  title?: string | ReactNode;
  isOpen: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
  showCloseIcon?: boolean;
  classNames?: DefaultModalProps["classNames"];
  styles?: DefaultModalProps["styles"];
  isCompactHeader?: boolean;
  children?: ReactNode;
  footer?: ReactNode;
}

const b = block("modal");
const Modal: FC<ModalProps> = ({
  className = "",
  title = "",
  isOpen,
  setOpen,
  onClose,
  showCloseIcon,
  classNames,
  styles,
  isCompactHeader = false,
  children,
  footer,
}) => {
  return (
    <DefaultModal
      open={isOpen}
      onClose={() => {
        if (onClose) {
          onClose();
        }
        setOpen && setOpen(false);
      }}
      center
      classNames={{
        root: b("root").toString(),
        modal: `${b()} ${className}`.trim().toString(),
        closeButton: b("close", {
          "compact-header": isCompactHeader,
        }).toString(),
        ...classNames,
      }}
      styles={styles}
      showCloseIcon={showCloseIcon}
      closeIcon={<Close />}
      focusTrapped={false}
    >
      <header
        className={b("header", {
          compact: isCompactHeader,
        })}
      >
        {title}
      </header>
      <div className={b("content")}>{children}</div>
      {footer && <footer className={b("footer")}>{footer}</footer>}
    </DefaultModal>
  );
};

export default Modal;
