import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Upload from "../Components/uploadComponent";
import Footer from "../Components/footerComponent";

class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Upload />
                <Footer />
            </>
        );
    }
}

export default Home;