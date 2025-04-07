import React from 'react'
import { useState, useEffect} from 'react'
import Weather from './Weather'
const Header = () => {

  const [weatherData, setWeatherData] = useState([])
  let api_key = '76a427aa28f8c63c16dde43bd96a8fcd';

  const currentLocationWeather = () =>{

    let getCurrentWeather = async(positionData)=>{
       let lat = positionData.coords.latitude;
       let lon = positionData.coords.longitude;
       try{
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then((data)=>{
          setWeatherData(data)
        }).catch((error)=>{
          console.log(error)
        })

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then((data)=>{
          console.log(data)
        }).catch((error)=>{
          console.log(error)
        })
      }catch(error){
        console.log(error);
      }
    }
    let currentPositionError = async(error)=>{
       console.log(error)
    }
    //navigator geolocation getacurrentposition is pre defined js object to get users location. It takes two functions as params  first one is executed when succes and it returns an object , second fun is executed when there is an error
    navigator.geolocation.getCurrentPosition(getCurrentWeather, currentPositionError);
  }
  useEffect(() => {
    console.log("Updated weatherData:", weatherData);
  }, [weatherData]);
  return (
    <>
        <header className='flex flex-wrap justify-between p-5 border-b-2 sticky top-0 border-b-gray-300 bg-white'>
          <section className="weather-title flex justify-center">
            <div className='title-logo'>
                <img src="images/weatherapp-logo-main1.png" className='max-w-3xs' alt="" />
              </div>
          </section>
          <section className="search-buttons flex justify-center align-middle items-center gap-1">
            <div className='location-items text-center flex justify-center max-h-10 bg-gray-100 rounded-r-full max-w-2xl'>
              <input
                  type="text"
                  id="name"
                  placeholder="Enter Location"
                  className="bg-gray-100 border-b-2 border-gray-300 text-indigo-900 px-3 focus:outline-none focus:border-sky-300"
              />
              <button className='bg-sky-300 cursor-pointer rounded-full p-1 hover:shadow-black hover:shadow-xs'><img src="images/search.svg" className='max-w-8' alt="" /></button>
            </div>
            <div className='bg-sky-300 cursor-pointer p-2 rounded-2xl font-bold flex align-middle max-h-10'
            onClick={currentLocationWeather}>
              <span className='flex'>
                <img src="images/target.png" className='' alt="" />
              </span>
              <span className=''>Current Location</span>
            </div>
          </section>
        </header>
        <Weather weatherData ={weatherData}/>
    </>
  )
}

export default Header