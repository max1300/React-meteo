import Icon from "../icon/Icon";
import React from "react";

const Card = (props) => {
    return <div className='col-md-3'>
        <div className="card-text-center" style={{width: "18rem"}}>
            <Icon icon={props.element.weather[0].id}/>
            <div className="card-body">
                <h5 className="card-title">{props.city}</h5>
                {props.element.weather[0].description &&
                <p className="card-text">description: {props.element.weather[0].description}</p>}
            </div>
            <ul className="list-group list-group-flush" style={{listStyle: "none"}}>
                {props.element.main.temp &&
                <li className="list-group-item">temperature: {props.element.main.temp}°</li>}
                {props.element.main.humidity &&
                <li className="list-group-item">humidité: {props.element.main.humidity}%</li>}
            </ul>
        </div>
    </div>;
}
export default Card;