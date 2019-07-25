/*
* @Author: Samal
* @Date:   2017-08-07 20:02:09
 * @Last Modified by: Ranvir Gorai
 * @Last Modified time: 2019-07-25 23:06:55
*/


import React from 'react';

import Logo from 'assets/r4b-main.png';

export default function Navbar() {
  return (

    <a className="navbar-brand" href="/" >
      <img src={Logo} width="100px" alt="Brand Logo" />
    </a>
  );
}

