import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch, Route, Redirect} from "react-router-dom";
import Home from "./Pages/home";
import Optimization from "./Pages/optimization";

import {Component} from "react";


class App extends Component{
    render() {
        return (
        <div className={"App"}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/optimization" component={Optimization} />
                        <Redirect to="/home" />
                    </Switch>
                </BrowserRouter>
        </div>
      );
    }
}

export default App;
