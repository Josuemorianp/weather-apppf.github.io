import { useState, useEffect } from 'react'
import './App.css'
import SideBar from './components/search-bar/SideBar';
import { OpenWeather } from './components/api/OpenWeather';

function App() {
  const [ searchCity, setSearchCity ] = useState('');
  const [weatherCity, setWeatherCity]=useState('caracas');
  const [weather, setWeather]=useState('');
  const [unit,setUnit]=useState("metric");
  const [unitL,setUnitL]=useState("°C");


  function changeUni(){
    if(unitL=="°F"){
      setUnit("metric")
      setUnitL("°C")
    }else{
      setUnit("imperial")
      setUnitL("°F")}
  }
  useEffect(() => {
    fetchData()
    async function fetchData() {
      console.log("aqui",unit)
      
      const {data} = await OpenWeather.getData2 (weatherCity, unit )
      const {lat, lon} = data.coord
      const res = await OpenWeather.getData(lat, lon, unit)
      console.log(res);
      setWeather(res.data)
    }
  }, [unit, weatherCity]);

  console.log("imprimiendo por ciudad")
  console.log(weatherCity);
  console.log("imprimiendo por lat y lon")
  console.log(weather);
  
  
  return (
    <div>     
      {weather ? 
      <SideBar
        {...weather}
          uni={unitL}
          citySelc={weatherCity}
          setSearchCity={ setSearchCity }
          searchCity={searchCity}
          setCity={ setWeatherCity }
          changeUni={ changeUni }>
      </SideBar>: (<h1>cargando...</h1>)}
    </div>
  )
}

export default App