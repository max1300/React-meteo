import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import WeatherMain from "./weather/WeatherMain";
import Forecast from "./weather/Forecast";
import Header from "./Header";


const App = () => {

  return (
    <>
        <Header/>
        <Router>
            <div>
                <Switch>
                    <Route path="/forecast/:city" component={Forecast} />
                    <Route exact path="/" component={WeatherMain} />
                </Switch>
            </div>
        </Router>
    </>
  );
}

export default App;
