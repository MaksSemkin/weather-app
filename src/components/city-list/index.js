import React from "react";
import './index.css';

let CityList = (props) => {
    
    
    let list = props.weather.map((item) => 
    <li key = {item.id}> 
       <section>
           <div className='card'>
            <p>{item.city}</p>
            <p>Температура воздуха {item.temp}</p> 
            <p>Скорость ветра {item.wind}</p>
            <p>Влажность воздуха {item.humidity}</p> 
           </div>
           <button onClick = {props.deleteCity} id = {item.id} className = 'delBtn'>X</button> 
           
       </section> 
    </li>
    )

    return (
        <ul > {list} </ul>

    )

}
export default CityList;