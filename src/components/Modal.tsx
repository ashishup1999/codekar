"use client";

import { ModalBg, ModalContainer } from "./Modal.styles";

const Modal = ({
  children,
  width,
  height,
  zInd,
}: {
  children: React.ReactNode;
  width?: string;
  height?: string;
  zInd?: number;
}) => {
  return (
    <ModalBg zInd={zInd}>
      <ModalContainer width={width} height={height}>
        {children}
      </ModalContainer>
    </ModalBg>
  );
};

export default Modal;
