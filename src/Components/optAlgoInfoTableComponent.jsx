import React, {Component} from 'react';

class OptAlgoInfoTableComponent extends Component {
    componentDidMount() {
        const Plotly = window.Plotly

        const labels = ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"]
        const parents = ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve"]
        const data = [{
            type: "treemap",
            labels: labels,
            parents: parents,
            values:  [10, 14, 12, 10, 2, 6, 6, 1, 4],
            textinfo: "label+value+percent parent+percent entry",
            domain: {"x": [0, 0.48]},
            outsidetextfont: {"size": 20, "color": "#377eb8"},
            marker: {"line": {"width": 2}},
            pathbar: {"visible": false}
        }];
        const layout = {
            annotations: [{
                showarrow: false,
                text: "branchvalues: <b>remainder</b>",
                x: 0.25,
                xanchor: "center",
                y: 1.1,
                yanchor: "bottom"
            }]}

        Plotly.newPlot('infoTable', data, layout)
    }

    render() {
        return (
            <>
                <div id={"infoTable"}> </div>
            </>
        );
    }
}

export default OptAlgoInfoTableComponent;