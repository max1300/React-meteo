import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import WeatherMain from "./weather/WeatherMain";
import Forecast from "./weather/Forecast";


const App = () => {

  return (
    <>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={WeatherMain} />
                    <Route path="/forecast/:city" component={Forecast} />
                </Switch>
            </div>
        </Router>
    </>
  );
}

export default App;
