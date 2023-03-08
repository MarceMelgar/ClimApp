import Spinner from './Spinner';

export const Card = ({loadingData, showData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    if(loadingData){
        return  <Spinner />;
    }

    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(2, 4) + ' - ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(2, 4) + ' - ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(2, 4) + ' - ' +  forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="container">
            {
                showData === true 
                ?
                <div className="card mx-auto bg-dark text-light">
                    <div className="col-12">                       
                        <div className='datos-consulta'>
                            <div className='info-ciudad-left'>
                                <h3>{weather.name}</h3>
                                <p>{date}</p>
                                <div className='d-flex gap-2 justify-content-center align-items-center'>
                                    <p><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                </div>
                                <h2>{(weather.main.temp - 273.15).toFixed(1)}ºC</h2>
                            </div>
                            <div className="info-ciudad-right">
                                <h5 className="card-text">Min: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                <h5 className="card-text">Máx: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                <h5 className="card-text">Sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC</h5>
                                <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                            </div>
                        </div>
                        <hr/>
                        <div className="datos-pronostico">
                            <div className="col">
                                <p>{forecastDate3} hs</p>
                                <img src={iconUrl3} alt="icon"/>
                                <p className="description">{forecast.list[1].weather[0].description}</p>
                                <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                            </div>
                            <div className="col">
                                <p>{forecastDate6} hs</p>
                                <img src={iconUrl6} alt="icon"/>
                                <p className="description">{forecast.list[2].weather[0].description}</p>
                                <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                            </div>
                            <div className="col">
                                <p>{forecastDate9} hs</p>
                                <img src={iconUrl9} alt="icon"/>
                                <p className="description">{forecast.list[3].weather[0].description}</p>
                                <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <h2 className="text-light">Sin datos</h2> 
            }
        </div>
    );
}

