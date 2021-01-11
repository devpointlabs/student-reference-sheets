import React, { useState } from 'react';
import { Header, Grid, Accordion, Icon, Image } from 'semantic-ui-react';
import { BoldColor } from '../../styledComponents/styles';
import Logo from '../../images/dpl-logo.png';

const Prod = () => {
  return (
    <>
      <Image src={Logo} centered />
      <Header as='h1' textAlign='center'><BoldColor>Production Steps</BoldColor></Header>
      <br />
    </>
  )
}

export default Prod;