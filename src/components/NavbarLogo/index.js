/*
* @Author: Ranvir Gorai
* @Date:   2017-08-07 20:02:09
 * @Last Modified by: Ranvir Gorai
 * @Last Modified time: 2019-07-26 17:37:01
*/


import React from 'react';

import Logo from 'assets/r4b-main.png';
export default function Navbar() {
  return (
    <div className="navbar-brand">
      <img src={Logo} width="60px" height="auto" alt="Brand Logo" />
    </div>
  );
}

