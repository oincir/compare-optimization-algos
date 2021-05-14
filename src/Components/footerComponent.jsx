import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class FooterComponent extends Component {
    render() {
        return (
            <Container className={"Footer"}>
                <footer className="text-muted">
                    © 2021 Copyright: <cite title="Source Title"> bishamonproject.com</cite>
                    <a style={{ textDecoration: 'none' }} href={"#"}>Yukarı</a>
                </footer>
            </Container>
        );
    }
}

export default FooterComponent;