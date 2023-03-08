import React, {useState} from 'react';
import { Form } from './Form';
import { Card } from './Card';
import { API_KEY } from '../helpers/apiKey';
export const WeatherPanel = () => {
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&lang=es`
    let cityUrl = "&q="
    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lang=es`
    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState("")
    const getLocation = async(loc) => {
        setLoading(true)
        setLocation(loc)

        //Fetch para tiempo actual

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((res) =>{
            if(!res.ok) throw (res)
            return res.json()
        }).then((weatherData) =>{
            setWeather(weatherData)
        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        });

        //Fetch de predicción

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((res) =>{
            if(!res.ok) throw (res)
            return res.json()
        }).then((forecastData) =>{
            setForecast(forecastData)
            setLoading(false)
            setShow(true)

        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        });

    }
    
    return(
        <>    
            <Form newLocation = {getLocation}/>
            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </>
    );
}