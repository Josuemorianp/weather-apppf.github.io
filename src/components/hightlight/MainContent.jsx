import React from 'react'
import './MainContent.css'

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

//fin imagenes de clima

function MainContent(props) {

  const dateString = props.day; // día de la semana
  let numeroDia = new Date(dateString).getDay();
  
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
    dia = new Date(dateString).getDate();
  }
  
  
  let mes = new Date(dateString).getMonth();
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
    let image=props.description
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

  return (  
    <div className="cont">
      <p className='date'>{numeroDia}{props.day==="Tomorrow"? "Tomorrow" : dia}{mes}</p>
        <div className="contImg">
        <p>
          <img className="imageMin" src={imageI} alt={props.description}/>
        </p>     
      </div>
      <div className='temperatures'>
          <span className='tem temMax'>{parseInt(props.tepMax)}{props.uni}</span> 
          <span className='tem temMin'>{parseInt(props.tepMin)}{props.uni}</span>
      </div>
    </div>
  )
}

export default MainContent