import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Graphs from "../Components/graphsComponent";

class Home extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Graphs/>
            </>
        );
    }
}

export default Home;