import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Graphs from "../Components/graphsComponent";

class Optimization extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Graphs/>
            </>
        );
    }
}

export default Optimization;