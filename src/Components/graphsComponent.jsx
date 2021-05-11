import React, {Component} from 'react';
import { Card } from "react-bootstrap";

class GraphsComponent extends Component {
    render() {
        return (
            <>
                <div className={"Cards"}>
                        <Card className={"barChart "}>
                            <Card.Header>Bar Chart</Card.Header>
                                <Card.Body>
                                    <Card.Title>Bar Chart</Card.Title>

                                </Card.Body>
                        </Card>

                        <Card className={"pieChart"}>
                            <Card.Header>Pie Chart</Card.Header>
                            <Card.Body>
                                <Card.Title>Pie Chart</Card.Title>

                            </Card.Body>
                        </Card>

                        <Card className={"statistics"}>
                            <Card.Header>Statistics</Card.Header>
                            <Card.Body>
                                <Card.Title>Statistics</Card.Title>

                            </Card.Body>
                        </Card>

                        <Card className={"comparison"}>
                            <Card.Header>Comparisons</Card.Header>
                            <Card.Body>
                                <Card.Title>Comparisons</Card.Title>

                            </Card.Body>
                        </Card>

                </div>
            </>
        );
    }
}

export default GraphsComponent;
