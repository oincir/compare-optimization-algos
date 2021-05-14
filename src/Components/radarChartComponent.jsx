import React, {Component} from 'react';
import {Radar} from "react-chartjs-2";

class RadarChartComponent extends Component {

    getData() {
        return {

            labels: ["Bitiş süresi(saniye)","En yüksek başarı","Param3","Param4","Param5"],
            datasets: [
                {
                    label: "Ant Colony Optimization",
                    data: Array.from({length: 5}, () => Math.floor(Math.random() * 20)),
                    backgroundColor: ['rgba(241, 241, 15, 0.5)'],
                },{
                    label: "Genetic Algorithm Optimization",
                    data: Array.from({length: 5}, () => Math.floor(Math.random() * 20)),
                    backgroundColor: ['rgba(57, 162, 80, 0.5)'],
                },{
                    label: "Whale Optimization Algorithm",
                    data: Array.from({length: 5}, () => Math.floor(Math.random() * 20)),
                    backgroundColor: ['rgba(32, 54, 158, 0.5)'],
                },{
                    label: "Grey Wolf Optimization Algorithm",
                    data: Array.from({length: 5}, () => Math.floor(Math.random() * 20)),
                    backgroundColor: ['rgba(177, 45, 159, 0.5)'],
                }
            ],
        };
    }

    render() {
        return (
            <>
              <Radar data={this.getData()} />
            </>
        );
    }
}

export default RadarChartComponent;