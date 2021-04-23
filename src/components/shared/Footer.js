import React from 'react';
import { CopyRight, FooterContainer } from '../../styledComponents/styles';
import { Segment } from 'semantic-ui-react';

const Footer = () => (
  <FooterContainer>
    <Segment>
      <CopyRight>
        © {new Date().getFullYear()} DevPoint Labs
      </CopyRight>  
    </Segment>
  </FooterContainer>
)

export default Footer;