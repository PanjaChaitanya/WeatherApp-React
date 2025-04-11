import React from 'react'
import { useState, useEffect} from 'react'
import Weather from './Weather'
const Header = () => {

  const [weatherData, setWeatherData] = useState([])
  const [hForecastData, setHForecastData] = useState([])
  const [daysForecast, setDaysForecast] = useState([])
  
  const [searchedData, setSearchedData] = useState([])
  const [city, setCity] = useState('')

  const [isRevealed, setIsRevealed] = useState(false);

  let api_key = '76a427aa28f8c63c16dde43bd96a8fcd';

  const currentLocationWeather = () =>{
    setIsRevealed(true)
    let getCurrentWeather = async(positionData)=>{

       let lat = positionData.coords.latitude;
       let lon = positionData.coords.longitude;
       try{

        // api for fetching current weather
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then((data)=>{ setWeatherData(data) })
        .catch((error)=>{ console.log(error) })

      // api for fetching hourly forecast data
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
      .then(response => response.json())
      .then((fdata) => {
        setHForecastData(fdata);
        // only filter after data is available
        const dayForecastData = fdata.list.filter(item => item.dt_txt.includes("12:00:00"));
        setDaysForecast(dayForecastData);
      })
      .catch((error) => {
        console.log(error);
      });


      }catch(error){
        console.log(error);
      }
      const dayForecastData = hForecastData.list.filter(item => item.dt_txt.includes("12:00:00"))
      setDaysForecast(dayForecastData);
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
  }, [weatherData]);
  return (
    <>
     <div className='relative h-screen'> 
       {/* Curtain Banner */}
      <div className={`curtain-banner fixed top-0 left-0 w-full h-full bg-[#F6F6F6] flex flex-col gap-3 items-center justify-center z-10 transition-all duration-1000 ${isRevealed ? "-translate-y-full" : "translate-y-0"
      }`}>

        <img src="images/weatherapp-banner.png" className='max-w-96' alt="" />
        <button className='bg-[#66CAD0] font-bold px-6 py-2 text-white rounded-3xl shadow-md hover:cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out' onClick={currentLocationWeather}>
          CONTINUE
        </button>
      </div>

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
              className="bg-[#7df8ff] cursor-pointer px-3 py-2 rounded-2xl font-bold flex items-center gap-1 max-h-10"
              onClick={currentLocationWeather}
            >
              <img src="images/target.png" className="w-5 h-5" alt="Target" />
              <span>Current Location</span>
            </div>
        </section>
      </header>

      <section className=''>
        <Weather weatherData ={weatherData} hForecastData={hForecastData} searchedData={searchedData} daysForecast={daysForecast} api_key={api_key}/>
      </section>
     </div>
    </>
  )
}

export default Header