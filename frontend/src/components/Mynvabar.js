import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-scroll'



import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


const Logo = styled.img`

height: 50px;
width: auto;
`

const MyLink = styled(Link)`

color:#ff00c7 !important;

font-size: 1.2em;

:hover{
    cursor:pointer;
}

`

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" className="bg-white" light expand="md">
                    <NavbarBrand href="/">
                        <Logo alt="logo" src="/assets/logo.png"></Logo>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mr-auto" navbar>
                            <NavItem>
                                <MyLink className="nav-link" activeClass="active" to="live" spy={true} smooth={true} duration={500} >
                                    Live Stats</MyLink>
                            </NavItem>
                            <NavItem>
                                <MyLink className="nav-link" activeClass="active" to="Current" spy={true} smooth={true} duration={500} >
                                    Summary</MyLink>
                            </NavItem>
                            <NavItem>

                                <MyLink className="nav-link" activeClass="active" to="stats" spy={true} smooth={true} duration={500} >
                                    Stats</MyLink>

                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MyNavbar 