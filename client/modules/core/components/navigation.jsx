import React from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
const Navigation = () => (
  <Navbar >
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">森林天使</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/search">我要捐助</NavItem>
        <NavItem eventKey={2} href="#">感恩故事</NavItem>
        <NavItem eventKey={3} href="#">信息公开</NavItem>
        <NavItem eventKey={4} href="#">关于我们</NavItem>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={5} title="我的" id="basic-nav-dropdown">
          <MenuItem eventKey={5.1}>我的捐助</MenuItem>
          <MenuItem eventKey={5.2}>联系我们</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={5.3}>退出</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;