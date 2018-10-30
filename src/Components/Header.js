import React from 'react';
import logo from './../Assets/Images/logo.png'
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

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isLoggedIn: this.props.isLoggedIn||false,
        };
    }
    componentWillReceiveProps (nextProps) {
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    logout = () => {
        localStorage.clear();
        window.location.href="/";
    };
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
                                        <NavLink href='https://www.tbsplanet.com/'>Visit TBS Planet</NavLink>
                                    </NavItem> :
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                  <span className="user-name">
                    Hello, {localStorage.getItem('short_name')}
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
Header.defaultProps = {
    isLoggedIn: false,
    light: true,
    dark: false,
    color: 'light',
    expand: 'md',
};