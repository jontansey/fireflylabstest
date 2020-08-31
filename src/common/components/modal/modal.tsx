import React, { ReactNode } from "react";
import ReactModal from "styled-react-modal";
import { Container, Row, Col, Offsets } from "react-grid-system";

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
  width?: Offsets;
  height?: string;
  offset?: Offsets;
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
  width = { xs: 11, md: 8 },
  offset = { xs: 0.5, md: 2 },
  close,
  closeText = "Close",
  children,
  actions = [],
  showClose = true,
  renderFooter = DefaultFooterRenderer,
  height = "610px",
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onBackgroundClick={close}
      onEscapeKeydown={close}
    >
      <Wrapper>
        <Container fluid>
          <Row>
            <Col {...width} offset={offset}>
              <Panel
                id="modalContent"
                canClose={true}
                onClose={close}
                title={title}
                height={height}
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
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </ReactModal>
  );
};

export default Modal;
