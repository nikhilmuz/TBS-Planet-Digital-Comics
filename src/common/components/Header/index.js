import React from 'react';
import cookie from 'react-cookies'
import { removeCookies } from './../../utils'
import logo from './../../../assets/images/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropTypes } from 'prop-types'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isLoggedIn: cookie.load('permission')
    };
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.isLoggedIn !== this.props.isLoggedIn) {
      this.setState({
        isLoggedIn: nextProps.isLoggedIn
      })
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logout = () => {
    removeCookies()
    window.location.href = '/'
  }
  render() {
    return (
      <div>
        <Navbar
          color={this.props.color || "light"}
          expand="md"
          light={this.props.light}
          fixed={this.props.fixed}
          tag={this.props.tag}
        >
          <NavbarBrand href="/">
            <img className="logo" src={logo} alt="TBS planet" />
            <span className="brand-name" > </span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {
              !this.state.isLoggedIn ?
              <NavItem>
                <NavLink href='/'>SignIn</NavLink>
              </NavItem> :
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="user-name">
                    Hello, {cookie.load('username') ? `${cookie.load('username')}` : 'Guest'}
                  </span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    My Account
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a onClick={this.logout}>Logout</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}
Header.defaultProps = {
  isLoggedIn: false,
  light: true,
  dark: false,
  color: 'light',
  expand: 'md',
}
NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}