/*
* @Author: Ranvir Gorai
* @Date:   2017-08-07 20:16:34
 * @Last Modified by: Ranvir Gorai
 * @Last Modified time: 2019-07-26 17:37:03
*/

import React from 'react';
import styled from 'styled-components';

const Div = styled.div({
  textAlign: 'center',
  margin: '10px 0 10px 0',

});

export default function LegalFooter(props) {
  return (
    <Div>
      <span> &copy; 2017 Starter. </span> |
        <a target="_blank" href="/docs/privacy_note.html">
          <span>Privacy</span>
        </a> |
        <a target="_blank" href="/docs/terms.html">
          <span>Terms</span>
        </a>
    </Div>
  );
}
