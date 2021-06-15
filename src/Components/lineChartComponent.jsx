import React from 'react';
import {Line} from "react-chartjs-2";

function LineChart({data}) {

    var delayed;
    const options = {
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                let ms = 120
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * ms ;
                    // delay = context.dataIndex * 300 + context.datasetIndex * 0;
                }
                return delay;
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',

                // grid line settings
                grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            },
        }
    }




    return (
        <Line data={data} options={options}/>
    );
}

export default LineChart ;