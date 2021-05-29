import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import {CgPushChevronUp} from "react-icons/cg"

class FooterComponent extends Component {
    render() {
        return (
            <Container>
                <Container className={"Footer bottom-0 m-4 "}>
                    <footer className="text-muted">
                        <cite title="Source Title"/><a style={{ textDecoration: 'none' }} href={"#"}>
                        <h1><CgPushChevronUp/></h1>
                         Yukarı</a>
                    </footer>
                </Container>
            </Container>
        );
    }
}

export default FooterComponent;