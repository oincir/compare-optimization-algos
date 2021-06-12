import React, {Component} from 'react';

class LineChart extends Component{

    componentDidMount (){
        const Plotly = window.Plotly

        const data = [{
            x: Array.from(Array(24).keys()),
            y: [85, 72, 43, 28, 20,12,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1],
            mode: 'lines',
            name: 'hv',
            line: {shape: 'hv'},
            type: 'scatter'
        }];

        const layout = {
            autosize: true,
            width: 600,
            height: 300,
            margin: {
                l: 1,
                r: 1,
                b: 1,
                t: 1,
                pad: 1,
            },
            paper_bgcolor: '#ffffff',
            plot_bgcolor: '#ffffff'
        }

        Plotly.newPlot('lineDiv',
            data,
            layout);

    }

    render(){

        return (
            <>
                <div className="lineChart" style={{overflow: "hidden"}} >
                    <div id={"lineDiv"}/>
                </div>
            </>
        );
    }
}

export default LineChart ;