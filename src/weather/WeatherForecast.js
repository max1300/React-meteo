import React from "react";
import Card from "./Card";

const WeatherForecast = (props) => {

    return (
        <div className="container">
            <div className='row'>
            {props.data && props.data.map(element => (
                <Card element={element} city={props.city}/>
            ))}
            </div>
        </div>

    );
}
export default WeatherForecast;