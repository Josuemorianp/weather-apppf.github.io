import { useEffect, useState } from "react";
import "./SideBar.css";

import Clear from "../../../public/images/Clear.png"
import Hail from "../../../public/images/Hail.png"
import HeavyCloud from "../../../public/images/HeavyCloud.png"
import HeavyRain from "../../../public/images/HeavyRain.png"
import LightCloud from "../../../public/images/LightCloud.png"
import LightRain from "../../../public/images/LightRain.png"
import Shower from "../../../public/images/Shower.png"
import Sleet from "../../../public/images/Sleet.png"
import Snow from "../../../public/images/Snow.png"
import Thunderstorm from "../../../public/images/Thunderstorm.png"
import MainContent from "../hightlight/MainContent";

function SideBar(props) {
  const [modalSearch,SetModalSearch]=useState(false);
  const [modalToday,SetModalToday]=useState(true);

  function show(){
    if(modalToday){
      SetModalSearch(true)
      SetModalToday(false)
    }else{
      SetModalSearch(false)
      SetModalToday(true)
    }
    
  }

  const {setSearchCity, setCity, searchCity, citySelc, changeUni} = props

  console.log("Imprimiendo seleccion de ciudad desde componente blockSearch")
  console.log(props.citySelc)

  const datestring = props.list[0].dt_txt; // día de la semana
  let numeroDia = new Date(datestring).getDay();
  
  switch (numeroDia) {
    case 0:
      numeroDia="Sun, ";
      break;
    case 1:
      numeroDia="Tue, ";
      break;
    case 2:
      numeroDia="Mon, ";
      break;
    case 3:
      numeroDia="Wed, ";
      break;
    case 4:
        numeroDia="Thu, ";
      break;
    case 5:
        numeroDia="Fri, ";
      break;
    case 6:
        numeroDia="Sat, ";
      break;
  
    default:
      numeroDia="";
      break;
  }

  let dia =""
  if(props.day !="Tomorrow"){
    dia = new Date(datestring).getDate();
  }
  
  let mes = new Date(datestring).getMonth();
  switch (mes) {
    case 0:
      mes=" Jan";
      break;
    case 1:
      mes=" Feb";
      break;
    case 2:
      mes=" Mar";
      break;
    case 3:
      mes=" Apr";
      break;
    case 4:
      mes=" May";
      break;
    case 5:
      mes=" Jun";
      break;
    case 6:
      mes=" Jul";
      break;
    case 7:
      mes=" Aug";
      break;
      case 8:
        mes=" Sep";
      break;
      case 9:
        mes=" Oct";
      break;
      case 10:
        mes=" Nov";
      break;
      case 11:
        mes=" Dec";
      break;
      default:
      mes="";
      break;
  }

  console.log(props)
  let image=(props.list[0].weather[0].description)
  let imageI;
  if(image=="light rain"){
    imageI=LightRain
  }
  if(image=="moderate rain"){
    imageI=HeavyRain
  }
  if(image=="broken clouds"){
    imageI=LightCloud
  }
  if(image=="few clouds"){
    imageI=HeavyCloud
  }
  if(image=="overcast clouds"){
    imageI=HeavyCloud
  }
  if(image=="scattered clouds"){
    imageI=LightCloud
  }
  if(image=="clear sky"){
    imageI=Clear
  }
  if(image=="thunderstorm"){
    imageI=Thunderstorm
  }
  if(image=="snow"){
    imageI=Snow
  }
  if(image=="rain" || image=="shower rain"){
    imageI=Shower
  }
  if(image=="mist"){
    imageI=LightCloud
  }
  if(image=="light snow"){
    imageI=Sleet
  }
  if(image=="heavy intensity rain"){
    imageI=HeavyRain
  }

  const handleSearchClick = () => {
    setCity(searchCity)
    if(citySelc){
    SetModalSearch(false)
    SetModalToday(true)
  }
  }

  return (
    <div className="main">

      <div className="contSearch">
      {modalSearch && <>
      <section className="conBtn">
        <div className="close" onClick={show}>
          <span className="material-symbols-outlined">close</span>
        </div>
        <div className="search">
          <span className="material-symbols-outlined lup">search</span>
          <input className="inputSearchI" autoFocus placeholder='Search location' onChange={ (e) => setSearchCity(e.target.value) }></input>
          <button className="btnSearchI" onClick={handleSearchClick} >Search</button>
        </div>
      </section></>
      }
      { modalToday && <>
      <div className="todayMain">
        <section className="btns">
          <button className="btnSearch" onClick={show}>Search for places</button>
          <button className="btnGps"><span className="material-symbols-outlined gps">my_location</span></button>
        </section>

        <div className="contImgC">
          <img src={imageI} alt={props.list[0].weather[0].description}></img>
        </div>
        <div className="todayInfo">
          <p><span className="tempToday">{parseInt(props.list[0].main.temp_max)}</span><span className="tempTodayU">{props.uni}</span></p>
          <p className="descToday"> {props.list[0].weather[0].description}</p>
          <p className="todayDate"> <span className="day">Today   </span> <span className="day">   ·   </span> <span className="day">{numeroDia}{dia}{mes}</span> </p>
          <p className="locationActive">
          <span className="material-symbols-outlined iconLoc">location_on</span><span className="iconLoc">{props.city.name} {props.city.country}</span></p>
        </div>
        
      </div>
      </> }
      </div>

      <div className="contDetail">
        {/* <section className="contUni">
          <button className="uni btnC" onClick={changeUni}>{props.uni}</button>
        </section> */}

        <section className="days">
          <MainContent
            day="Tomorrow"
            description={props.list[8].weather[0].description}
            tepMax={props.list[8].main.temp_max}
            tepMin={props.list[8].main.temp_min}
            uni={props.uni}>
          </MainContent>
          <MainContent
            day={props.list[16].dt_txt}
            description={props.list[16].weather[0].description}
            tepMax={props.list[16].main.temp_max}
            tepMin={props.list[16].main.temp_min}
            uni={props.uni}>
          </MainContent>
          <MainContent
            day={props.list[24].dt_txt}
            description={props.list[24].weather[0].description}
            tepMax={props.list[24].main.temp_max}
            tepMin={props.list[24].main.temp_min}
            uni={props.uni}>
          </MainContent>
          <MainContent
            day={props.list[32].dt_txt}
            description={props.list[32].weather[0].description}
            tepMax={props.list[32].main.temp_max}
            tepMin={props.list[32].main.temp_min}
            uni={props.uni}>
          </MainContent>
          <MainContent
            day={props.list[39].dt_txt}
            description={props.list[39].weather[0].description}
            tepMax={props.list[39].main.temp_max}
            tepMin={props.list[39].main.temp_min}
            uni={props.uni}>          
          </MainContent>
        </section>

        <section className="contenedorSecundary">
          <p className="titleSecAdi">Today's Hightlights</p>
          <section className="detailAdi">
            <article className="det">
              <p><span className="titleSec">Wind Status</span> </p>
              <p className="cValue"> <span className="value">{props.list[0].wind.speed}</span><span className="unit">mph</span></p>
              
              <div className="barPor">
                <p className="contWind"><span className="material-symbols-outlined wind">near_me</span><span>WSW</span></p>
              </div>
            </article>
            <article className="det">
              <p><span className="titleSec">Humidity</span></p>
              <p className="cValue"> <span className="value">{props.list[0].main.humidity}</span><span className="unit">%</span></p>
              <div className="contBar">
                <div className="ind"><span className="ba">0</span><span className="ba">50</span><span className="ba">100</span></div>
                  <progress className="porcHum" max="100" value={props.list[0].main.humidity}>{props.list[0].main.humidity}</progress>
                  <div className="indP"><span className="ba">%</span></div>
              </div>
            </article>
            <article className="det">
              <p><span className="titleSec">Visibility</span></p>
              <p> <span className="value">{(props.list[0].visibility)/1000}</span><span className="unit">miles</span></p>
            </article>
            <article className="det">
              <p><span className="titleSec">Air Pressure</span></p>
              <p> <span className="value">{props.list[0].main.pressure}</span><span className="unit">mb</span></p>
            </article>
          </section>
        </section>
      </div>
    </div>
  );
};

export default SideBar