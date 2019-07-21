/*
* @Author: Samal
* @Date:   2017-08-07 20:02:09
 * @Last Modified by: Ranvir Gorai
 * @Last Modified time: 2019-07-22 00:13:01
*/


import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/r4b-main.png';

const LogoDiv = styled.div({
  margin: 'auto',
  marginBottom: '17px',
  width: '250px',
});
const Img = styled.img({
  width: '100%',
});
export default function BrandLogo() {
  return (
    <LogoDiv>
      <Img src={Logo} />
    </LogoDiv>
  );
}

