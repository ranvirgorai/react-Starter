import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import {
  Navbar,
  NavDropdown,
  Nav,
} from "react-bootstrap";

// import NavbarLogo from "components/NavbarLogo";

// const StyledItem = styled.li`
//   border-bottom: 2px solid ${props => (props.current ? "#2892cb" : "inherit")};
//   &:hover StyledSpan {
//     color: "red";
//   }
// `;

// const StyledSpan = styled.span`
//   font-size: 16px;
//   color: ${props => (props.current ? "#2892cb" : "inherit")};
//   &:hover {
//     color: "red";
//   }
// `;

// const MyNavbarItem = ({ currentPathname, to, text }) => {
//   const current = currentPathname === to;
//   return (
//     <StyledItem current={current}>
//       <Link to={to}>
//         <StyledSpan current={current}>{text}</StyledSpan>
//       </Link>
//     </StyledItem>
//   );
// };

export default function MyNavbar(props) {
  // const onClick = props.onLogout;
  // const { currentPathname } = props;
  
  return <Navbar bg="light" expand="lg" fixed="top">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav  className="pull-right">
    <Nav.Link href="#home">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  // return (
  //   <Navbar collapseOnSelect fixedTop>
      
  //       <Navbar.Brand>
  //         <NavbarLogo />
  //       </Navbar.Brand>
  //       <Navbar.Toggle />
      
  //     <Navbar.Collapse>
  //       <Nav>
  //         <MyNavbarItem
  //           to="/dashboard"
  //           currentPathname={currentPathname}
  //           text="Dashboard"
  //         />
  //         <MyNavbarItem
  //           to="/consumer"
  //           currentPathname={currentPathname}
  //           text="Consumer"
  //         />
  //         <MyNavbarItem
  //           to="/order"
  //           currentPathname={currentPathname}
  //           text="Order"
  //         />
  //         <MyNavbarItem
  //           to="/queue"
  //           currentPathname={currentPathname}
  //           text="Queue"
  //         />
  //         <MyNavbarItem
  //           to="/product"
  //           currentPathname={currentPathname}
  //           text="Product"
  //         />
  //       </Nav>
  //       <Nav pullRight>
  //         <MyNavbarItem
  //           to="/user"
  //           currentPathname={currentPathname}
  //           text="Profile"
  //         />
  //         <MyNavbarItem
  //           to="/settings"
  //           currentPathname={currentPathname}
  //           text="Settings"
  //         />
  //         <MyNavbarItem
  //           currentPathname={currentPathname}
  //           text="Logout"
  //           onClick={onClick}
  //         />
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // );
}
