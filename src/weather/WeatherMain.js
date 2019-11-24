import React, {useState} from 'react';
import Axios from "axios";
import Form from "./Form";
import Weather from "./Weather";


const WeatherMain = () => {
    const API_KEY = "CLE OPENWEATHERMAP";
    const [data, setData] = useState([]);

    const useAxios = async(e) => {
        const city = e.target.elements.city.value;
        e.preventDefault();
        const apiData = await Axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&lang=fr&units=metric`)
            .then(res => res.data)
            .then(data => data)
        setData({
            data: apiData,
            city: apiData.name,
            temperature: apiData.main.temp,
            humidity: apiData.main.humidity,
            description: apiData.weather[0].description,
            icon: apiData.weather[0].id
        })
    }

    return (
        <>
            <div className="container" style={{textAlign: "center"}}>
                <h1>WEATHER APP</h1>
                <Form getWeather={useAxios}/>
                <Weather data={data}/>
            </div>
        </>
    );
}
export default WeatherMain;