import Icon from "../icon/Icon";
import React from "react";

const Card = (props) => {
    return (
        <div className='col-md-3'>
            <div className="card-text-center" style={{width: "18rem", backgroundColor:"lightgray"}}>
                <Icon icon={props.element.weather[0].id}/>
                <div className="card-body">
                    <h3 className="card-title">{props.city}</h3>
                    <p>{props.element.dt_txt}</p>
                    {props.element.weather[0].description &&
                    <p className="card-text">{props.element.weather[0].description}</p>}
                </div>
                <ul className="list-group list-group-flush" style={{listStyle: "none"}}>
                    {props.element.main.temp &&
                    <li className="list-group-item" style={{backgroundColor:"lightgray", fontWeight:"bold"}}>temperature: {props.element.main.temp}°</li>}
                    {props.element.main.humidity &&
                    <li className="list-group-item" style={{backgroundColor:"lightgray", fontWeight:"bold"}}>humidité: {props.element.main.humidity}%</li>}
                </ul>
            </div>
        </div>
    );
}
export default Card;