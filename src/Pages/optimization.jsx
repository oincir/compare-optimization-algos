import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Graphs from "../Components/graphsComponent";
import Footer from "../Components/footerComponent";

class Optimization extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Graphs />
                <Footer />
            </>
        );
    }
}

export default Optimization;