import React, {Component} from 'react';
import { Nav,Navbar } from "react-bootstrap";
import { GiArtificialHive } from "react-icons/gi"

class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="home"><h1><GiArtificialHive/></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Anasayfa</Nav.Link>
                        <Nav.Link href="optimization">Optimizasyon</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;