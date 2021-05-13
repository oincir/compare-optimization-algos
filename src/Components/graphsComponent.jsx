import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import LineChart from "./lineChartComponent";

class GraphsComponent extends Component {

    getData (){
        return {
            labels: Array.from({length: 30}, (_, i) => i + 1),
            datasets: [
                {
                    label: "Ant Colony Optimization",
                    data: Array.from({length: 30}, () => Math.floor(Math.random() * 80)),
                    fill: true,
                    lineTension: 0.2,

                }
            ],
        };
    }

    getDataMultiple(){
        return {
            labels: Array.from({length: 15}, (_, i) => i + 1),
            datasets: [
                {
                    label: "Ant Colony Optimization",
                    data: Array.from({length: 15}, () => Math.floor(Math.random() * 80)),
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: ['rgba(241, 241, 92, 0.2)'],
                },{
                    label: "Genetic Algorithm Optimization",
                    data: Array.from({length: 15}, () => Math.floor(Math.random() * 80)),
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: ['rgba(57, 162, 80, 0.2)'],
                },{
                    label: "Whale Optimization Algorithm",
                    data: Array.from({length: 15}, () => Math.floor(Math.random() * 80)),
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: ['rgba(32, 54, 158, 0.2)'],
                },{
                    label: "Grey Wolf Optimization Algorithm",
                    data: Array.from({length: 15}, () => Math.floor(Math.random() * 80)),
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: ['rgba(26, 137, 46, 0.2)'],
                }
            ],
        };
    }

    render() {
        return (
            <>
                <div className={"Cards"}>
                        <Card className={"lineChart"}>
                            <Card.Header>Line Chart</Card.Header>
                                <Card.Body>
                                    {/*<Card.Title>Line Chart</Card.Title>*/}
                                    <div className="LineChart">
                                        <LineChart data={this.getData()}/>
                                    </div>
                                </Card.Body>
                        </Card>

                        <Card className={"pieChart"}>
                            <Card.Header>Pie Chart</Card.Header>
                            <Card.Body>
                                {/*<Card.Title>Pie Chart</Card.Title>*/}

                            </Card.Body>
                        </Card>

                        <Card className={"statistics"}>
                            <Card.Header>Statistics</Card.Header>
                            <Card.Body>
                                {/*<Card.Title>Statistics</Card.Title>*/}

                            </Card.Body>
                        </Card>

                        <Card className={"comparison"}>
                            <Card.Header>Comparisons</Card.Header>
                            <Card.Body>
                                {/*<Card.Title>Comparisons</Card.Title>*/}
                                    <div className="LineChart">
                                        <LineChart data={this.getDataMultiple()}/>
                                    </div>
                            </Card.Body>
                        </Card>
                        <Card className={"algo3dGraph"}>
                            <Card.Header>3D Algorithm Graph</Card.Header>
                            <Card.Body>
                                {/*<Card.Title>Comparisons</Card.Title>*/}
                                <div className="3dGraph">
                                {/*    3d graph goes here*/}
                                </div>
                            </Card.Body>
                        </Card>
                </div>
            </>
        );
    }
}

export default GraphsComponent;
