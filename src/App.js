import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch, Route, Redirect} from "react-router-dom";
import Home from "./Pages/home";
import Optimization from "./Pages/optimization";

import {Provider} from "react-redux";
import {Component} from "react";
import {ConfigureStore} from "./redux/ConfigureStore";

const store = ConfigureStore();

class App extends Component{
    render() {
        return (
        <div className={"App"}>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/optimization" component={Optimization} />
                        <Redirect to="/home" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
      );
    }
}

export default App;
