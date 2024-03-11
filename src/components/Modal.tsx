"use client";

import { ModalBg, ModalContainer } from "./Modal.styles";

const Modal = ({
  children,
  width,
  height,
}: {
  children: React.ReactNode;
  width: string;
  height: string;
}) => {
  return (
    <ModalBg>
      <ModalContainer width={width} height={height}>
        {children}
      </ModalContainer>
    </ModalBg>
  );
};

export default Modal;
