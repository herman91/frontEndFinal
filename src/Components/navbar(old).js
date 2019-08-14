import React from 'react';
import '../css/navbar.css'
import DropDown from './dropDown'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,

    Button} from 'reactstrap';
import { NavLink } from 'react-router-dom'


export default class Nav_bar extends React.Component {
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
                <Navbar color="dark" light expand="md">


                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to="/" tag="{home}">StarFood</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/OurMenu" tag="{menu}">Our menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Plans" tag="{plans}">Plans</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/About" tag="{about}">About</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>

                    <div></div>

                    <Button outline color="success">LOG IN</Button>{' '}

                </Navbar>
            </div>
        );
    }
}

