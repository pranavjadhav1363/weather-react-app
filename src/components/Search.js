import React, { useState, useEffect } from 'react'
// import './App.css';

import haze from '../haze.png';
import wind from '../wind.png';
import humidity from '../humidity.jpg';
import maxtemp from '../maxtemp.jpg';
import mintemp from '../mintemp.png';
export const Search = () => {
    const [search, setsearch] = useState('Mumbai')
    const [cityinfo, setcityinfo] = useState("")
    const apikey = process.env.REACT_APP_WEATHER_API

    const onchange = (e) => {
        let newsearch = e.target.value
        setsearch(newsearch)
    }
    useEffect(() => {
        // console.log(cityinfo)
        // setcityinfo({name:})
        const fetchweather = async () => {
            // console.log(search)
            const url = await `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}`
            const response = await fetch(url)
            const data = await response.json();
            const completedata = await data
            setcityinfo({
                main: completedata.main, sys: completedata.sys, wind: completedata.wind, weather: completedata.weather

            })
            console.log(cityinfo)




        }
        fetchweather()

        // eslint-disable-next-line
    }, [search])



    return (
        <>
            <div class="container-fluid my-5" style={{ width: "18rem" }}>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" onChange={onchange} value={search} type="search" placeholder="Enter the City name" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            {!cityinfo.main ? <p className='text-center'>Result not found {!search ? "" : `for ${search}`}</p> : <div class="card container my-5" style={{ width: "34rem", height: "19rem" }}>
                <h5 class="card-header">{search}</h5>
                <div class="card-body container text-center">
                    <h5 class="card-title ">{Math.floor(cityinfo.main.temp - 273.15)}℃ <img src={haze} alt="" width="30" height="24" class="d-inline-block align-text-top" /></h5>
                    <p class="card-text">{cityinfo.weather[0].description}</p>

                </div>
                <div class="container">
                    <div class="row text-center">
                        <div class="col"><h5 class="card-title ">{Math.floor(cityinfo.main.temp_min - 273.15)}℃ <img src={mintemp} alt="" width="30" height="24" class="d-inline-block align-text-top" /></h5>
                            <p class="card-text">Minimum Tempreature</p></div>
                        <div class="col"><h5 class="card-title ">{Math.floor(cityinfo.main.temp_max - 273.15)}℃ <img src={maxtemp} alt="" width="30" height="24" class="d-inline-block align-text-top" /></h5>
                            <p class="card-text">Maximum Tempreature</p></div>
                        <div class="w-100"></div>
                        <div class="col my-3"><h5 class="card-title ">{Math.floor(cityinfo.main.humidity)}% <img src={humidity} alt="" width="30" height="24" class="d-inline-block align-text-top" /></h5>
                            <p class="card-text">Humidity</p></div>
                        <div class="col my-3"><h5 class="card-title ">{Math.floor(cityinfo.wind.speed)}m/s <img src={wind} alt="" width="30" height="24" class="d-inline-block align-text-top" /></h5>
                            <p class="card-text">Wind Speed</p></div>
                    </div>
                </div>
            </div>}




        </>
    )
}
