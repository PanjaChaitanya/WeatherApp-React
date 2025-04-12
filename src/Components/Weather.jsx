import React from 'react'
import { useState, useEffect } from 'react'
import WeatherSkeleton from './WeatherSkeleton';

const Weather = ({ weatherData, hForecastData, daysForecast}) => {
    
    if (!weatherData.main) {
        return <WeatherSkeleton/>;
    }  
  
    const [presentDate, setPresentDate] = useState(null)
    const [sunRiseTime, setSunRiseTime] = useState('')
    const [sunSetTime, setSunSetTime] = useState('')

    const [maxTemp, setMaxTemp] = useState(null);
    const [minTemp, setMinTemp] = useState(null);

    useEffect(() => {
        if (hForecastData?.list?.length) {
          const today = new Date().toISOString().split("T")[0];
    
          const todayForecasts = hForecastData.list.filter(item =>
            item.dt_txt.startsWith(today)
          );
    
          const temps = todayForecasts.map(item => item.main.temp);
          setMaxTemp(Math.max(...temps));
          setMinTemp(Math.min(...temps));
        }
       
      }, [hForecastData]);
    
    const weatherImages = {
        "01d": "sunny.png", "01n": "clear-night.png",
        "02d": "few-clouds-day.png","02n": "few-clouds-night.png",
        "03d": "scattered-clouds-day.png", "03n": "scattered-clouds-night.png",
        "04d": "broken-clouds.png", "04n": "broken-clouds.png",
        "09d": "shower-rain.png", "09n": "shower-rain.png",
        "10d": "rain-day.png", "10n": "rain-night.png",
        "11d": "thunderstorm-day.png", "11n": "thunderstorm-night.png",
        "13d": "snow-day.png", "13n": "snow-night.png",
        "50d": "mist.png", "50n": "mist.png"
    };
    const iconCode = weatherImages[weatherData.weather[0].icon]
    const icon = `/icons/${iconCode}`
    

    const SunRise_SunSetTime =(timestamp)=>{

        const date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let mins = date.getMinutes();
        
        hours = hours % 12; 
        hours = hours < 10 ? '0'+ hours : hours
        hours = hours ? hours : 12; 
        mins = mins < 10 ? '0' + mins : mins;
        return `${hours}:${mins}`;
    }
    useEffect(() => {
        if (weatherData.sys) {
            setPresentDate(new Date().toDateString());
            setSunRiseTime(SunRise_SunSetTime(weatherData.sys.sunrise));
            setSunSetTime(SunRise_SunSetTime(weatherData.sys.sunset));
        }
    }, [weatherData]);    

    
  return (
    <>
    <main className='weather-main m-3 flex flex-wrap sm:flex-nowrap gap-2 h-screen'>
        <aside className='w-full sm:w-1/4 md:1/2 overflow-hidden max-h-screen'>
            <section className='current-weather'>
                <div className='weather-card shadow-xl border-1 border-gray-100 p-2'>
                    <div className='date-location border-b-1 border-gray-400'>
                        <div className="location flex items-center gap-2">
                            <img loading='lazy' src="icons/location.png" className='max-w-4' alt="" />
                            <span className='text-gray-500 font-semibold'>{weatherData.name}, {weatherData.sys.country}</span>
                        </div>
                        <div className="date flex items-center gap-2">
                            <img loading='lazy' src="icons/date.png" className='max-w-4' alt="" />
                            <span className='text-gray-500 font-semibold'>{presentDate}</span>
                        </div>
                    </div>
                    <h2 className='font-bold text-sky-300'>Now</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <img loading='lazy' src="icons/thermometer.png" className='max-w-7' alt="" />
                            <h1 className='text-4xl font-bold text-[#2B506B]'>{weatherData.main.temp}&deg;c</h1>
                        </div>
                        <img loading='lazy' src={icon} alt="default.png" />
                    </div>
                    <div className='card-footer flex justify-between'>
                       <p className='text-gray-500'> Feels like {weatherData.main.feels_like}&deg;c </p>
                        <p className='capitalize font-semibold text-gray-600'> {weatherData.weather[0].description} </p>
                    </div>
                </div>
            </section>
            <section className='weather-highlights'>
                <h2 className='text-2xl text-[#66CAD0] font-bold mt-2 mb-1'>Highlights</h2>
                <div className='border border-sky-100 rounded-2xl shadow-xl'>
                <table className="w-full text-sm">
                    <tbody>
                        {/* sun rise - sun set */}
                        <tr className="border-b border-sky-100 hover:border-b-sky-300">
                            <td className="p-2">
                                <img loading='lazy' src="images/sunrise.png" className="max-w-14" alt="sunrise.png" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Sunrise</p>
                                <p className="font-semibold">{sunRiseTime} AM</p>
                            </td>
                            <td className="p-2">
                                <img loading='lazy' src="images/sunset.png" className="max-w-14" alt="sunset.png" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Sunset</p>
                                <p className="font-semibold">{sunSetTime} PM</p>
                            </td>
                        </tr >
                        {/* Temperatures */}
                        <tr className="border-b border-sky-100 hover:border-b-sky-300">
                            <td className="p-2">
                                <img loading='lazy' src="icons/high-temp.png" className="max-w-10" alt="high-temp" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Highest</p>
                                <p className="font-semibold">{maxTemp}&deg;c</p>
                            </td>
                            <td className="p-2">
                                <img loading='lazy' src="icons/low-temp.png" className="max-w-10" alt="low-temp" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Lowest</p>
                                <p className="font-semibold">{minTemp}&deg;c</p>
                            </td>
                        </tr>
                        {/* Humidity - Wind */}
                        <tr className='border-b border-sky-100 hover:border-b-sky-300'>
                            <td className="p-2">
                                <img loading='lazy' src="icons/humidity.png" className="max-w-10" alt="humidity" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Humidity</p>
                                <p className="font-semibold">{weatherData.main.humidity} %</p>
                            </td>
                            <td className="p-2">
                                <img loading='lazy' src="icons/wind.png" className="max-w-8" alt="visibility" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Wind</p>
                                <p className="font-semibold">{weatherData.wind.speed} Kmph</p>
                            </td>
                        </tr>
                        {/* visibility */}
                        <tr>
                            <td className="p-2">
                                <img loading='lazy' src="icons/visibility.png" className="max-w-10" alt="visibility" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Visibility</p>
                                <p className="font-semibold">{(weatherData.visibility / 1000).toFixed(1)} Km</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </section>
        </aside>
        <article className='w-full sm:w-3/4 md:1/2 border-1 border-gray-100 p-4 rounded-2xl shadow-xl overflow-y-scroll'>
            <section className='hourly-forecast'>
                <h3 className="text-lg font-bold text-[#66CAD0]">Hourly Forecast</h3>
                <div className='flex flex-wrap gap-3 justify-center'>
                    {hForecastData?.list?.slice(0, 6).map((item, index) => (
                        <div key={index} className='flex flex-col items-center border-1 border-gray-100 cursor-pointer rounded-2xl hover:shadow-xl p-2'>
                            <p className='text-xs font-semibold'>{item.dt_txt}</p>
                            <img loading='lazy' src={`/icons/${weatherImages[item.weather[0]?.icon]}`} alt="weatherimage" />
                            <p className='capitalize font-semibold text-[#2B506B]'>{item.weather[0].description}</p>
                            <p>{item.main.temp}&deg;c</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="upcoming-forecast mt-5 px-4 sm:px-6 lg:px-8">
                <h3 className="text-lg font-bold text-[#66CAD0] mb-4">5 - Days Forecast</h3> 
                <div className="space-y-4 ">
                    {daysForecast.map((item, index) => (
                    <details key={index} className="border border-sky-100 rounded-lg shadow group open:ring-2 open:ring-blue-300">
                        
                        <summary className="cursor-pointer px-4 py-3 text-gray-500 open:text-sky-300 font-semibold flex flex-wrap items-center justify-between gap-2 rounded-t-lg">
                        <p className="text-[#2B506B] min-w-[80px]">{item.dt_txt.split(" ")[0]}</p>
                        <p className="text-[#2B506B] min-w-[70px]">{item.main.temp}&deg;C</p>
                        
                        <div className="flex items-center gap-2 min-w-[140px]">
                            <img
                            loading="lazy"
                            src={`/icons/${weatherImages[item.weather[0]?.icon]}`}
                            className="w-6 h-6"
                            alt="Weather Icon"
                            />
                            <p className="capitalize text-[#2B506B]">{item.weather[0].description}</p>
                        </div>

                        <img
                            loading="lazy"
                            src="/icons/down-arrow.png"
                            className="w-6 h-6"
                            alt="Arrow"
                        />
                        </summary>

                        <div className="px-4 py-3 bg-white text-gray-700 overflow-x-auto">
                        <table className="w-full min-w-[500px] text-sm">
                            <tbody>
                            {/* Feels Like & Humidity */}
                            <tr className="border-b border-sky-100 hover:border-b-sky-300">
                                <td className="p-2">
                                <img loading="lazy" src="/icons/feelslike.png" className="max-w-10" alt="Feels Like" />
                                </td>
                                <td className="p-2">
                                <p className="text-sky-300">Feels Like</p>
                                <p className="font-semibold">{item.main.feels_like}&deg;C</p>
                                </td>
                                <td className="p-2">
                                <img loading="lazy" src="/icons/humidity.png" className="max-w-10" alt="Humidity" />
                                </td>
                                <td className="p-2">
                                <p className="text-sky-300">Humidity</p>
                                <p className="font-semibold">{item.main.humidity}%</p>
                                </td>
                            </tr>

                            {/* Wind Speed & Time */}
                            <tr className="border-b border-sky-100 hover:border-b-sky-300">
                                <td className="p-2">
                                <img loading="lazy" src="/icons/wind.png" className="max-w-10" alt="Wind" />
                                </td>
                                <td className="p-2">
                                <p className="text-sky-300">Wind Speed</p>
                                <p className="font-semibold">{item.wind.speed} m/s</p>
                                </td>
                                <td className="p-2">
                                <img loading="lazy" src="/icons/clock.png" className="max-w-10" alt="Time" />
                                </td>
                                <td className="p-2" colSpan="3">
                                <p className="text-sky-300">Time</p>
                                <p className="font-semibold">{item.dt_txt.split(" ")[1]}</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </details>
                    ))}
                </div>
            </section>
        </article>
    </main>
    </>
  )
}

export default Weather