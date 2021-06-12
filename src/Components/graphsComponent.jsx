import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import LineChart from "./lineChartComponent";
import RadarChart from "./radarChartComponent";
import Algo3DGraph from "./algo3dGraphComponent";

class GraphsComponent extends Component {

    getData (){
        return {
            labels: Array.from({length: 30}, (_, i) => i + 1),
            datasets: [
                {
                    label: "Ant Colony Optimization",
                    data: Array.from({length: 30}, () => Math.floor(Math.random() * 80)),
                    fill: true,
                    lineTension: 0.1,
                    pointRadius: 0,

                }
            ],
        };
    }

    getDataMultiple(){
        return {
            labels: Array.from({length: 15}, (_, i) => i + 1),
            datasets: [
                {
                    label: "Ant Colony Optimization Algorithm",
                    data: Array.from({length: 15}, () => Math.floor(Math.random() * 80)),
                    fill: false,
                    lineTension: 0.2,
                    borderColor: ['rgba(241, 241, 92, 0.35)'],
                },{
                    label: "Genetic Optimization Algorithm",
                    data: Array.from({length: 15}, () => Math.floor(Math.random() * 80)),
                    fill: false,

                    lineTension: 0.2,
                    borderColor: ['rgba(57, 162, 80, 0.35)'],
                },{
                    label: "Whale Optimization Algorithm",
                    data: Array.from({length: 15}, () => Math.floor(Math.random() * 80)),
                    fill: false,
                    lineTension: 0.2,
                    borderColor: ['rgba(32, 54, 158, 0.35)'],
                },{
                    label: "Grey Wolf Optimization Algorithm",
                    data: Array.from({length: 15}, () => Math.floor(Math.random() * 80)),
                    fill: false,
                    lineTension: 0.2,
                    borderColor: ['rgba(177, 45, 159, 0.35)'],
                }
            ],
        };
    }

    render() {
        return (
            <>
                <div className={"Cards"}>
                        <Card className={"lineChartCard"}>
                            <Card.Header>Line Chart</Card.Header>
                                <Card.Body>
                                    {/*<Card.Title>Line Chart</Card.Title>*/}
                                    <div className="LineChart">
                                        <LineChart data={this.getData()}/>
                                    </div>
                                </Card.Body>
                        </Card>

                        <Card className={"radarChartCard"}>
                            <Card.Header>Radar Chart</Card.Header>
                            <Card.Body className={"RadarChart"}>
                                {/*<Card.Title> Chart</Card.Title>*/}
                                    <RadarChart />
                            </Card.Body>
                        </Card>

                        <Card className={"statisticsCard"}>
                            <Card.Header>Statistics</Card.Header>
                            <Card.Body>
                                {/*<Card.Title>Statistics</Card.Title>*/}
                                <h6>Bitiş süresi</h6><p> <span style={{color: 'red'}}>12</span> saniye</p>
                                <h6>Toplam İterasyon sayısı</h6><p> 30 iterasyon</p>
                                <h6>Başarı</h6><p style={{color: 'orange'}}> %74</p>
                                <h6>En yakın Optimizasyon algoritmasına göre başarı</h6><p style={{color: 'green'}}>+%6</p>
                            </Card.Body>
                        </Card>

                        <Card className={"comparisonCard"}>
                            <Card.Header>Comparisons</Card.Header>
                            <Card.Body>
                                {/*<Card.Title>Comparisons</Card.Title>*/}
                                    <div className="LineChart">
                                        <LineChart data={this.getDataMultiple()}/>
                                    </div>
                            </Card.Body>
                        </Card>
                        <Card className={"algo3dGraphCard"}>
                            <Card.Header>3D Algorithm Graph</Card.Header>
                            <Card.Body>
                                {/*<Card.Title>Optimization Algorithm</Card.Title>*/}
                                <Algo3DGraph />
                            </Card.Body>
                        </Card>
                </div>
            </>
        );
    }
}

export default GraphsComponent;
