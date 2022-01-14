import './App.css';

import InputForm  from  './components/input-form'
import React from 'react';
import {useState,useEffect} from 'react'
import CityList from './components/city-list'

let  API_KEY = '0905aa1c1a1d899654d92b73d1f40ea9';
let currId = 10;
let curId = 100;
let location;
let latitude;
let longitude; 


function App() {
  let info;
  const [city,setCity] = useState([{id:0,name: 'Текущее положение',},{id: 1, name: 'Kurgan' },{ id :2,name:'Omsk'},{id:3,name:'Kiev'},{id:4,name:'Moscow'}]) 
  const [weather,setWeather] = useState([])
  
  useEffect(()=>locationDefault(),[])
  
 const currentWeather = async(lat,lon) => {
   await fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
  .then((res)=> res.json())
  .then((result)=> {
    info  = {id: curId++,city: result.name , temp: result.main.temp + ' C', humidity: result.main.humidity + ' %',wind: result.wind.speed+' м/с'} 
    setWeather([...weather,info])
  }
  );
} 

const weatherQuery = async(cityName)=> {

  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`) 
    .then (res => res.json())  
    .then(result => {                     
      
       info  = {id: curId++,city: cityName , temp: result.main.temp + ' C', humidity: result.main.humidity + ' %',wind: result.wind.speed + ' м/с'} 
      });
     
     setWeather([...weather,info])
    }


const locationDefault = ()=> {
 
  function success(pos){
    const crd =  pos.coords
    latitude = crd.latitude;
    longitude = crd.longitude;
    location = {latitude: latitude,longitude:longitude}
    currentWeather(latitude,longitude)
 }

  let geo = navigator.geolocation;
   geo.getCurrentPosition(success);    
}

  const addCity = async(term)=> { 
  
  if(term ===''){
    return
  }
  currId++
   weatherQuery(term)
  
  setCity([...city,{id: currId, name: term }]);
  
  }

  const deleteCity = (e)=> { 
  setWeather((city)=>{
    const idd = Number(e.target.id)
    const indexOfCity = city.map((item)=>item.id).indexOf(idd)
    const beforDeletePart = city.slice(0,indexOfCity)
    const afterDeletePart = city.slice(indexOfCity+1)
    const arr = [...beforDeletePart,...afterDeletePart]
    return city = arr
  })  
  }


 

  return (
    <main>
      <InputForm
        addCity = {addCity}
      ></InputForm>
      
      <CityList
      city = {city}
      deleteCity = {deleteCity}
      weather = {weather}
      ></CityList>
    </main>
    
     
  );
}

export default App;
