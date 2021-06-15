import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Graphs from "../Components/graphsComponent";
import Footer from "../Components/footerComponent";

import {withRouter} from "react-router-dom";

class Optimization extends Component {


    render() {
        return (
            <>
                <Navbar />
                <Graphs
                    // graphs={this.props.graph}
                    // TODO send graph data to graphComponent for plotting
                />
                <Footer />
            </>
        );
    }
}

export default withRouter( Optimization);