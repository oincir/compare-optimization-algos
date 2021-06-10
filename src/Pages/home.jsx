import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Footer from "../Components/footerComponent";
import OptAlgoOptions from "../Components/optAlgoOptionsComponent";

class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <OptAlgoOptions />
                <Footer />
            </>
        );
    }
}

export default Home;