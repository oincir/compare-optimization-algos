import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Upload from "../Components/uploadComponent";
import Footer from "../Components/footerComponent";
import OptAlgoOptions from "../Components/optAlgoOptionsComponent";

class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Upload />
                <OptAlgoOptions />
                <Footer />
            </>
        );
    }
}

export default Home;