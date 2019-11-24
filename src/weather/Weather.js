import React from "react";
import Icon from "../icon/Icon";

const Weather = (props) => {
    return(
        <div className="container" style={{textAlign: "center"}}>
            {props.data.city &&
            <div className="card-text-center mx-auto" style={{width: "18rem"}}>
                <Icon icon={props.data.icon}/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.city}</h5>
                    {props.data.description && <p className="card-text">description: {props.data.description}</p>}
                </div>
                <ul className="list-group list-group-flush" style={{listStyle: "none"}}>
                    {props.data.temperature && <li className="list-group-item">temperature: {props.data.temperature}°</li>}
                    {props.data.humidity && <li className="list-group-item">humidité: {props.data.humidity}%</li>}
                </ul>
                <div className="card-body">
                    <a href={`/forecast/${props.data.city}`} className="btn btn-primary">
                        Voir les prévisions
                    </a>
                </div>
            </div>
            }
        </div>
    );
}
export default Weather;