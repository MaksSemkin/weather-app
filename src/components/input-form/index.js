import React, { useState } from "react";
import './index.css'


function InputForm(props) {
   
   const [term,setTerm] = useState('');
    
   
   
   let  pushCity = (e)=> { 
    e.preventDefault();
    props.addCity(term);
    setTerm('')
    
    }

    let insert = (e) => {
        e.preventDefault();
        setTerm(e.target.value);
    } 

    return (
            <form onSubmit={pushCity}>
            
            <input placeholder=" Введите название города"  
            onChange={insert} 
            onSubmit={pushCity}
            value = {term}
            ></input> 
            <button type="button" onClick={pushCity} >Добавить город </button> 
            
            </form>
    )


}

export default InputForm;