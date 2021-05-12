import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Upload from "../Components/uploadComponent";

class Home extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Upload/>
            </>
        );
    }
}

export default Home;