import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import LineChart from "./lineChartComponent";
import RadarChart from "./radarChartComponent";
import Algo3DGraph from "./algo3dGraphComponent";


class GraphsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            plot: null,
            error: null
        };
    }
    async componentDidMount() {
        const url = "http://bishamon.ml/res/plots/f1.json";

        fetch(url, {
            credentials: 'include',
            method: 'GET',
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', response))
            .catch(error => console.error('Error:', error));
    }


    getData (){
        return {
            labels: Array.from({length: 22}, (_, i) => i + 1),
            datasets: [
                {
                    label: "Ant Colony Optimization",
                    data: [85, 72, 43, 28, 20,12,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1],
                    fill: true,
                    stepped: true,
                    lineTension: 0.1,
                    pointRadius: 0,
                    borderColor: ['rgba(117, 2, 155, 0.8)'],
                },{
                    label: "Genetic Optimization Algorithm",
                    data: [70, 70, 69, 55, 55,42,40,30,28,25,10,10,8,8,7,7,7,4,4,4,4,4],
                    fill: false,
                    stepped: true,
                    pointRadius: 0,
                    lineTension: 0.2,
                    borderColor: ['rgba(57, 162, 80, 0.8)'],
                }
            ],
        };
    }

    getDataMultiple(){
        return {
            labels: Array.from({length: 22}, (_, i) => i + 1),
            datasets: [
                {
                    label: "Ant Colony Optimization Algorithm",
                    data: [85, 72, 43, 28, 20,12,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1],
                    fill: false,
                    pointRadius: 0,
                    lineTension: 0.4,
                    borderColor: ['rgba(117, 2, 155, 0.8)'],
                },{
                    label: "Genetic Optimization Algorithm",
                    data: [70, 70, 69, 55, 55,42,40,30,28,25,10,10,8,8,7,7,7,2,2,2,2,2],
                    fill: false,
                    pointRadius: 0,
                    lineTension: 0.4,
                    borderColor: ['rgba(57, 162, 80, 0.8)'],
                },{
                    label: "Whale Optimization Algorithm",
                    data: [95, 82, 73, 58, 40,22,20,19,18,13,13,13,8,8,8,8,8,8,8,8,7,7],
                    fill: false,
                    pointRadius: 0,
                    lineTension: 0.4,
                    borderColor: ['rgba(32, 54, 158, 0.8)'],
                },{
                    label: "Grey Wolf Optimization Algorithm",
                    data: [99, 89, 85, 45, 25,15,10,7,3,2,1,1,1,1,1,1,1,1,1,1,0,0],
                    fill: false,
                    lineTension: 0.4,
                    pointRadius: 0,
                    borderColor: ['rgba(177, 245, 159, 0.8)'],
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
                                <h6>Toplam İterasyon sayısı</h6><p> 22 iterasyon</p>
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
