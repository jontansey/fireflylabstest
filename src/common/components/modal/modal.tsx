import React, { ReactNode } from "react";
import ReactModal from "styled-react-modal";

import Button from "../button";
import noop from "../../../utils/noop";
import Panel from "../panel";
import { Wrapper, ContentWrapper, Footer } from "./modal.styled";

export type FooterOptions = {
  close(): void;
  closeText?: string;
  showClose?: boolean;
  actions?: ModalAction[];
};

const DefaultFooterRenderer = ({
  closeText = "Cancel",
  showClose = true,
  actions = [],
  close = noop,
}: FooterOptions) => (
  <>
    {showClose ? (
      <Button onClick={close} style={{ marginRight: "23px" }}>
        {closeText.toUpperCase()}
      </Button>
    ) : null}
    {actions.map(({ text, action, disabled }, i) => (
      <Button key={i} onClick={action} disabled={disabled}>
        {text.toUpperCase()}
      </Button>
    ))}
  </>
);

type Props = {
  isOpen: boolean;
  title: string;
  width?: string;
  height?: string;
  renderFooter?: (options: FooterOptions) => ReactNode;
};

interface ModalAction {
  text: string;
  action(): void;
  disabled?: boolean;
}

export type ModalProps = Props & FooterOptions;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  close,
  closeText = "Close",
  children,
  actions = [],
  showClose = true,
  renderFooter = DefaultFooterRenderer,
  height = "610px",
  width = "800px",
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onBackgroundClick={close}
      onEscapeKeydown={close}
    >
      <Wrapper>
        <Panel
          id="modalContent"
          canClose={true}
          onClose={close}
          title={title}
          height={height}
          width={width}
        >
          <ContentWrapper>{children}</ContentWrapper>
          <Footer>
            {renderFooter({
              actions,
              close,
              closeText,
              showClose,
            })}
          </Footer>
        </Panel>
      </Wrapper>
    </ReactModal>
  );
};

export default Modal;
