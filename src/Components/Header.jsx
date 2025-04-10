import React from 'react'
import { useState, useEffect} from 'react'
import Weather from './Weather'
import WeatherSkeleton from './WeatherSkeleton'
const Header = () => {

  const [weatherData, setWeatherData] = useState([])
  const [hForecastData, setHForecastData] = useState([])
  const [day7ForecastData, SetDay7ForecastData] = useState([])
  const [searchedData, setSearchedData] = useState([])
  const [city, setCity] = useState('')

  const [isLoading, setIsLoading] = useState(true);

  let api_key = '76a427aa28f8c63c16dde43bd96a8fcd';

  const currentLocationWeather = () =>{

    let getCurrentWeather = async(positionData)=>{
       let lat = positionData.coords.latitude;
       let lon = positionData.coords.longitude;
       try{

        // api for fetching current weather
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then((data)=>{
          setWeatherData(data)
          setIsLoading(false)
        }).catch((error)=>{
          console.log(error)
        })

        // api for fetching hourly forecast data
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then((fdata)=>{
          setHForecastData(fdata)
        }).catch((error)=>{
          console.log(error)
        })
        // api for fetching 7 days forecast data
        // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${7}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then((SevenDaysData)=>{
          SetDay7ForecastData(SevenDaysData)
        }).catch((error)=>{
          console.log(error)
        })
      }catch(error){
        console.log(error);
        setIsLoading(false)
      }
    }
    let currentPositionError = async(error)=>{
       console.log(error)
    }
    //navigator geolocation getacurrentposition is pre defined js object to get users location. It takes two functions as params  first one is executed when succes and it returns an object , second fun is executed when there is an error
    navigator.geolocation.getCurrentPosition(getCurrentWeather, currentPositionError,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      })
  }
  const searchLocation = () =>{
    if(!city){
      alert("Enter a city Name")
      return;
    }
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then((sdata)=>{
      setSearchedData(sdata)
    }).catch((error)=>{
      console.log(error)
    })
  }
  useEffect(() => {
    console.log("Updated weatherData:", weatherData);
    console.log("forecastData :", hForecastData);
    console.log("7 days forecast:", day7ForecastData);
  }, [weatherData]);
  return (
    <>
      <header className="flex flex-wrap justify-between items-center gap-4 p-5 border-b-2 sticky top-0 border-b-gray-300 bg-white">
        {/* Title Section */}
        <section className="flex justify-center flex-1 min-w-[200px]">
            <div className="title-logo">
              <img src="images/weatherapp-logo-main1.png" className="max-w-48" alt="Weather App Logo" />
            </div>
        </section>

        {/* Search & Button Section */}
        <section className="flex flex-wrap justify-center items-center gap-2 flex-1 min-w-[250px]">
            {/* Location Search Box */}
            <div className="flex items-center bg-gray-100 rounded-r-full overflow-hidden max-w-full">
              <input
                type="text"
                id="name"
                placeholder="Enter Location"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                className="bg-gray-100 text-indigo-900 px-3 py-1 focus:outline-none border-b-2 border-gray-300 focus:border-sky-300 w-[150px] sm:w-[200px] md:w-[250px]"
              />
              <button onClick={searchLocation} className="bg-sky-300 cursor-pointer rounded-full p-1 hover:shadow-black hover:shadow-xs">
                <img src="images/search.svg" className="w-6 h-6" alt="Search" />
              </button>
            </div>

            {/* Current Location Button */}
            <div
              className="bg-sky-300 cursor-pointer px-3 py-2 rounded-2xl font-bold flex items-center gap-1 max-h-10"
              onClick={currentLocationWeather}
            >
              <img src="images/target.png" className="w-5 h-5" alt="Target" />
              <span>Current Location</span>
            </div>
        </section>
      </header>
      <section className=''>
      {isLoading ? 
        <WeatherSkeleton /> : 
        <Weather weatherData ={weatherData} hForecastData={hForecastData} SevenDaysForecastData={day7ForecastData} searchedData={searchedData} api_key={api_key}/>
      }
      </section>
    </>
  )
}

export default Header