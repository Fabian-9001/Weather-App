import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { Loading } from './components/Loading'
import { WeatherCard } from './components/WeatherCard'
import DataPicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"



function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [location, setlocation] = useState()



  useEffect((location) => {

    /*-- FUNCION QUE SE EJECUTA CUANDO LLEGA LA INFORMACION DE NUESTRA UBICACION --*/
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    /*-- ESTO HACE EL LLAMADO A LA API DEL NAVEGADOR PARA USAR LA UBICACION ACTUAL --*/
    navigator.geolocation.getCurrentPosition(success)
  }, [location])



  // =================== PETICION DEL CLIMA ======================== //



  useEffect(() => {
    if (coords) {

      const APIKEY = 'c5ee6a5d3f66992411d82111501f47eb'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&q=${location || ''}&appid=${APIKEY}`

      axios.get(URL)
        .then(res => {

          const celsius = (res.data.main.temp - 273.15).toFixed(0)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(0)

          setTemperature({ celsius, farenheit })
          setWeather(res.data)

        })
        .catch(err => console.log(err))
    }
  }, [coords])



  return (
    <div className="App">
      {
        weather ? <WeatherCard weather={weather} temperature={temperature} DataPicker={DataPicker} startDate={startDate} setStartDate={setStartDate} setlocation={setlocation} /> : <Loading />
      }
    </div>

  )

}

export default App
