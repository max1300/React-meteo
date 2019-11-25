import React from "react";
import Card from "./Card";

const WeatherForecast = (props) => {

    return (
            <div className='row'>
                {props.data && props.data.map(element => (
                    <Card key={element.dt} element={element} city={props.city}/>
                ))}
            </div>
    );
}
export default WeatherForecast;