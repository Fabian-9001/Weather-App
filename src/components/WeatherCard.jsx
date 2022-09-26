import React, { useState } from 'react'

export const WeatherCard = ({ weather, temperature, DataPicker, startDate, setStartDate }) => {


    const [isCelsius, setIsCelsius] = useState(true)

    const changeTemperature = () => setIsCelsius(!isCelsius)

    const date = <DataPicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        scrollableMonthYearDropdown
    />





    return (
        <div>

            <section className='section__cart'>

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
                                                <p className='card__clouds'>Clouds: {weather?.clouds.all}% <img className='clouds' src="./img/nube.png" alt="" /></p>
                                            </li>
                                            <li className='card_li'>
                                                <p className='card__weather'>Wheater: "{weather?.weather[0].main}"</p>
                                            </li>
                                            <li className='card_li'>
                                                <p className='card__wind'>Wind Speed: {weather?.wind.speed}m/s <img className='wind' src="./img/wind.png" alt="" /></p>
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
                                        <img className='latitude' src="./img/latitud.png" alt="" />
                                        <img className='longitude' src="./img/longitud.png" alt="" />
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
                                            <li className='card2__li'>Temp max: {weather?.main.temp_max}°F</li>
                                            <li className='card2__li'>Temp min: {weather?.main.temp_min}°F</li>
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
                                        <img className='pressure footer__img--width ' src="./img/presion.png" alt="" />
                                        <img className='sea footer__img--width ' src="./img/mar.png" alt="" />
                                        <img className='ground footer__img--width ' src="./img/suelo.png" alt="" />
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
