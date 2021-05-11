import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch, Route, Redirect} from "react-router-dom";
import Home from "./Pages/home";
import Optimization from "./Pages/optimization";

function App() {
  return (
    <>
        {/*<Provider store={store}>*/}
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/optimization" component={Optimization} />
                    <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
        {/*</Provider>*/}

    </>
  );
}

export default App;
