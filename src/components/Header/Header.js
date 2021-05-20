import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <Navbar color="dark" light expand="md" className="fs-5 box-shadow">
                <div className="container">
                    <Link className="navbar-brand fs-2 pink" to="/">Cake</Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto mb-2 mb-lg-0" navbar>
                            <NavItem>
                                <NavLink exact to="/" activeClassName="pink" className="nav-link">Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink exact to="/menu" activeClassName="pink" className="nav-link">Menu</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink exact to="/service" activeClassName="pink" className="nav-link">Service</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink exact to="/about" activeClassName="pink" className="nav-link">About</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink exact to="/contact" activeClassName="pink" className="nav-link">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;
