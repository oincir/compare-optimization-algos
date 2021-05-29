import React, {Component} from 'react';
import Navbar from "../Components/navbarComponent";
import Graphs from "../Components/graphsComponent";
import Footer from "../Components/footerComponent";
import {
    fetchGraph,
    sendGraph,
} from "../redux/ActionCreators"

import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {actions} from "react-redux-form"


const mapStateToProps= (state) =>{
    return{
        graph: state.graph,
    }
}


const mapDispatchToProps = dispatch => ({
    fetchGraph: () => dispatch(fetchGraph()),
    sendGraph: () => dispatch(sendGraph()),
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
});



class Optimization extends Component {

    componentDidMount() {
        this.props.fetchGraph();
        this.props.sendGraph();
    }

    render() {
        return (
            <>
                <Navbar />
                <Graphs
                    graphs={this.props.graph}
                    // graphsLoading = {this.props.graph.isLoading}
                    // graphsErrMess = {this.props.graph.errMess}
                />
                <Footer />
            </>
        );
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Optimization)
);