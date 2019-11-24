import React, {useState, useEffect} from "react";
import Axios from "axios";
import WeatherForecast from "./WeatherForecast";


const Forecast = (props) => {
    const API_KEY = "CLE OPENWEATHERMAP";
    const [data, setData] = useState([]);

    const city = props.match.params.city;

    useEffect(() =>{
        async function getData() {
            const apiData = await Axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${API_KEY}&lang=fr&units=metric`)
            setData(apiData.data.list)
        }
        getData()

    },[city])

    return (

        <div className="container">
            <div className="row border-bottom mt-3 mb-4">
                <div className="col">
                    <h1>{city} : Prévisions sur 5 jours</h1>
                </div>
                <WeatherForecast data={data} city={city}/>
            </div>
                <a href="/" className="btn btn-primary">
                    retour page d'accueil
                </a>
        </div>

    );
}

export default Forecast;