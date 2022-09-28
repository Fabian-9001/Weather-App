import React, { useState } from 'react'

export const WeatherCard = ({ weather, temperature, DataPicker, startDate, setStartDate, setlocation }) => {


    const [isCelsius, setIsCelsius] = useState(true)
    /*-- FUNCION PARA CAMBIAR TEMPERATURA --*/
    const changeTemperature = () => setIsCelsius(!isCelsius)



    /*-- FECHA --*/
    const date = <DataPicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        scrollableMonthYearDropdown
    />


    /*-- FUNCION PARA TRAER LA INFORMACION DE LA LOCALIZACION ESPECIFICADA EN EL INPUT --*/
    const search = (e) => {
        e.preventDefault()
        setlocation(e.target[0].value)
        e.target.reset()
    }

    /*-- FUNCION PARA RECARGAR PAGINA Y IMAGEN --*/
    const reload = () => {
        location.reload(true);
    }


    return (
        <div>
            <section className='section__cart'>


                <div className='container'>

                    <form action="" onSubmit={search}>
                        <input className='input__location' type="text" placeholder='Enter your location' />
                        <div className='container__buttons'>
                            <button className='button__search'>Search</button>
                            <button className='button__IMG' onClick={reload} >Change IMG</button>
                        </div>
                    </form>

                    <div className='tilt-box-wrap'>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <div className='tilt-box'>
                            <article className='card1'>

                                <header className='card__header'>
                                    <div className='card__input'>{date}</div>
                                    <h1 className='card__h1'>Weather App</h1>
                                    <h2 className='card__country'>`{weather?.name}, {weather?.sys.country}`</h2>
                                </header>

                                <div className='card__body'>

                                    <div className='card__subContainer1'>
                                        <img className='card__icon' src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="Imagen de icono de clima actual" />
                                    </div>

                                    <div className='card__subContainer2'>

                                        <ul className='card__description'>
                                            <li className='card_li'>
                                                <p className='card__clouds'>Clouds: {weather?.clouds.all}% <img className='clouds' src="./img/nube.png" alt="Imagen de icono de nubes" /></p>
                                            </li>
                                            <li className='card_li'>
                                                <p className='card__weather'>Wheater: "{weather?.weather[0].main}"</p>
                                            </li>
                                            <li className='card_li'>
                                                <p className='card__wind'>Wind Speed: {weather?.wind.speed}m/s <img className='wind' src="./img/wind.png" alt="iamgen de icono de viento" /></p>
                                            </li>
                                        </ul>

                                    </div>

                                </div>

                                <footer className='card__footer'>
                                    <p className='card__temp'>Temp: {isCelsius ? `${temperature?.celsius} °C` : `${temperature.farenheit} °F`}</p>
                                </footer>

                            </article>
                        </div>
                    </div>
                    <button className='card__button' onClick={changeTemperature} > {isCelsius ? 'Change to °F' : 'Change to °C'}</button>
                </div>



                <div className='container'>
                    <div className='tilt-box-wrap'>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <span className='t_over'></span>
                        <div className='tilt-box'>
                            <article className='card2'>

                                <header className='card2__header'>

                                    <div className='card2__coords'>
                                        <p className='card2__latitude'>Latitude: {weather?.coord.lat}</p>
                                        <p className='card2__longitude'>Longitude: {weather?.coord.lon}</p>
                                    </div>

                                    <div className='card2__cords__img'>
                                        <img className='latitude' src="./img/latitud.png" alt="Imagen de icono de planeta con lineas horizontales" />
                                        <img className='longitude' src="./img/longitud.png" alt="Imagen de icono de planeta con lineas verticales" />
                                    </div>

                                </header>

                                <div className='card2__body'>

                                    <div className='card2__subContainer1'>
                                        <div className='card2__imgs'>
                                            <img className='temp' src="./img/termometro maximo.png" alt="Imagen icono termometro con flecha hacia arriba" />
                                            <img className='temp' src="./img/termometro minimo.png" alt="Imagen icono termometro con flecha hacia abajo" />
                                            <img className='humidity' src="./img/humedad.png" alt="Imagen de icono medidor de humedad" />
                                        </div>
                                    </div>

                                    <div className='card2__subContainer2'>
                                        <ul className='card2__description'>
                                            <li className='card2__li'>Temp max: {weather?.main.temp_max} k</li>
                                            <li className='card2__li'>Temp min: {weather?.main.temp_min} k</li>
                                            <li className='card2__li'>Humedad: {weather?.main.humidity}%</li>
                                        </ul>
                                    </div>

                                </div>

                                <footer className='card2__footer'>
                                    <ul className='card2__levels'>
                                        <li className='card2__pressure'>Pressure: {weather?.main.pressure}hPa</li>
                                        <li className='card2__seaLevel'>Sea level: {weather?.main.sea_level}m</li>
                                        <li className='card2__groundLvel'>Ground level: {weather?.main.grnd_level}m</li>
                                    </ul>

                                    <div className='card2__levels__img'>
                                        <img className='pressure footer__img--width ' src="./img/presion.png" alt="imagen icono reloj de presion" />
                                        <img className='sea footer__img--width ' src="./img/mar.png" alt="imagen icono de barco en marea" />
                                        <img className='ground footer__img--width ' src="./img/suelo.png" alt="imagen icono de montañas" />
                                    </div>

                                </footer>

                            </article>
                        </div>
                    </div>
                </div>

            </section>

        </div >
    )
}
