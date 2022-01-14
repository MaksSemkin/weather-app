let  API_KEY = '0905aa1c1a1d899654d92b73d1f40ea9';



   async function weatherQuery  (cityName) {
    let info;

   await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`) 
      .then (res => res.json())  
      .then(result => {                     
        
         info  = {city: cityName , temp: result.main.temp + 'C', humidity: result.main.humidity + '%',wind: result.wind.speed + 'м/с'} 
        });
       
        return info
    }

export default weatherQuery;