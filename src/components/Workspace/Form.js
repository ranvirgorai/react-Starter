import React from 'react';
import styled from 'styled-components';

import BrandLogo from 'components/BrandLogo';
import LegalFooter from 'components/LegalFooter';

const LogoCenter = styled.div({
  textAlign: 'center',
});

export default function FormWorkspace(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <LogoCenter>
              <BrandLogo />
            </LogoCenter>
            { React.Children.toArray(props.children)}
            <LegalFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
