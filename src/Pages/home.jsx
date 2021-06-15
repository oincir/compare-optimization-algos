import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Footer from "../Components/footerComponent";
import OptAlgoOptions from "../Components/optAlgoOptionsComponent";
import OptAlgoInfoChart from "../Components/optAlgoInfoChartComponent";
import {Col, Container, Row} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Row>
                    <Col >
                        <OptAlgoOptions />
                    </Col>
                    <Col>
                        <OptAlgoInfoChart />
                    </Col>
                </Row>

                <Footer />
            </>
        );
    }
}

export default Home;