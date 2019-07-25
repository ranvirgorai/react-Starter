import React from "react";
import styled from "styled-components";

import BrandLogo from "components/BrandLogo";
import LegalFooter from "components/LegalFooter";
import { Row, Col } from "react-bootstrap";

const LogoCenter = styled.div({
  textAlign: "center"
});

export default function FormWorkspace(props) {
  return (
    <Row>
      <Col xs={12} md={12}>
        <LogoCenter>
          <BrandLogo />
        </LogoCenter>
        {React.Children.toArray(props.children)}
        <LegalFooter />
      </Col>
    </Row>
  );
}
