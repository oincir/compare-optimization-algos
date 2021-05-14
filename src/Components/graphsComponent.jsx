import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import LineChart from "./lineChartComponent";
import RadarChart from "./radarChartComponent";
import Algo3DGraph from "./algo3dGraphComponent";
import createPlotlyComponent from 'react-plotly.js/factory';


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
                    fill: false,
                    lineTension: 0.2,
                    borderColor: ['rgba(241, 241, 92, 0.35)'],
                },{
                    label: "Genetic Algorithm Optimization",
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

    componentDidMount() {
        {
            const Plotly = window.Plotly
            Plotly.newPlot('myDiv', [{
                z:[
                    [8.83, 8.89, 8.81, 8.87, 8.9, 8.87],
                    [8.89, 8.94, 8.85, 8.94, 8.96, 8.92],
                    [8.84, 8.9, 8.82, 8.92, 8.93, 8.91],
                    [8.79, 8.85, 8.79, 8.9, 8.94, 8.92],
                    [8.79, 8.88, 8.81, 8.9, 8.95, 8.92],
                    [8.8, 8.82, 8.78, 8.91, 8.94, 8.92],
                    [8.75, 8.78, 8.77, 8.91, 8.95, 8.92],
                    [8.8, 8.8, 8.77, 8.91, 8.95, 8.94],
                    [8.74, 8.81, 8.76, 8.93, 8.98, 8.99],
                    [8.89, 8.99, 8.92, 9.1, 9.13, 9.11],
                    [8.97, 8.97, 8.91, 9.09, 9.11, 9.11],
                    [9.04, 9.08, 9.05, 9.25, 9.28, 9.27],
                    [9, 9.01, 9, 9.2, 9.23, 9.2],
                    [8.99, 8.99, 8.98, 9.18, 9.2, 9.19],
                    [8.93, 8.97, 8.97, 9.18, 9.2, 9.18]
                ], type: 'surface'
            }])

        }
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
                                {/*<Card.Title>Comparisons</Card.Title>*/}
                                <div className="3dGraph" style={{overflow: "hidden"}} >
                                    <div id={"myDiv"}/>
                                </div>
                            </Card.Body>
                        </Card>
                </div>
            </>
        );
    }
}

export default GraphsComponent;
