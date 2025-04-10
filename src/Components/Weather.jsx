import React from 'react'
import { useState, useEffect } from 'react'

const Weather = ({ weatherData, searchedData, hForecastData, SevenDaysForecastData}) => {
    
    
  
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
        "11d": "thunderstorm.png", "11n": "thunderstorm.png",
        "13d": "snow-day.png", "13n": "snow-night.png",
        "50d": "mist-day.png", "50n": "mist-night.png"
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
    <main className='weather-main m-3 flex flex-wrap sm:flex-nowrap gap-2'>
        <aside className='w-full sm:w-1/4 md:1/2'>
            <section className='current-weather'>
                <div className='weather-card shadow-xl border-1 border-gray-100 p-2'>
                    <div className='date-location border-b-1 border-gray-400'>
                        <div className="location flex items-center gap-2">
                            <img src="icons/location.png" className='max-w-4' alt="" />
                            <span className='text-gray-500 font-semibold'>{weatherData.name}, {weatherData.sys.country}</span>
                        </div>
                        <div className="date flex items-center gap-2">
                            <img src="icons/date.png" className='max-w-4' alt="" />
                            <span className='text-gray-500 font-semibold'>{presentDate}</span>
                        </div>
                    </div>
                    <h2 className='font-bold text-sky-300'>Now</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <img src="icons/thermometer.png" className='max-w-7' alt="" />
                            <h1 className='text-4xl font-bold'>{weatherData.main.temp}&deg;c</h1>
                        </div>
                        <img src={icon} alt="default.png" />
                    </div>
                    <div className='card-footer flex justify-between'>
                       <p className='text-gray-500'> Feels like {weatherData.main.feels_like}&deg;c </p>
                        <p className='font-semibold text-gray-600'> {weatherData.weather[0].description} </p>
                    </div>
                </div>
            </section>
            <section className='weather-highlights'>
                <h2 className='text-2xl font-bold mt-2 mb-1'>Highlights</h2>
                <div className='border border-sky-100 rounded-2xl shadow-xl'>
                <table className="w-full text-sm">
                    <tbody>
                        {/* sun rise - sun set */}
                        <tr className="border-b border-sky-100 hover:border-b-sky-300">
                            <td className="p-2">
                                <img src="images/sunrise.png" className="max-w-14" alt="sunrise.png" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Sunrise</p>
                                <p className="font-semibold">{sunRiseTime} AM</p>
                            </td>
                            <td className="p-2">
                                <img src="images/sunset.png" className="max-w-14" alt="sunset.png" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Sunset</p>
                                <p className="font-semibold">{sunSetTime} PM</p>
                            </td>
                        </tr >
                        {/* Temperatures */}
                        <tr className="border-b border-sky-100 hover:border-b-sky-300">
                            <td className="p-2">
                                <img src="icons/high-temp.png" className="max-w-10" alt="high-temp" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Highest</p>
                                <p className="font-semibold">{maxTemp}&deg;c</p>
                            </td>
                            <td className="p-2">
                                <img src="icons/low-temp.png" className="max-w-10" alt="low-temp" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Lowest</p>
                                <p className="font-semibold">{minTemp}&deg;c</p>
                            </td>
                        </tr>
                        {/* Humidity - Wind */}
                        <tr className='border-b border-sky-100 hover:border-b-sky-300'>
                            <td className="p-2">
                                <img src="icons/humidity.png" className="max-w-10" alt="humidity" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Humidity</p>
                                <p className="font-semibold">{weatherData.main.humidity} %</p>
                            </td>
                            <td className="p-2">
                                <img src="icons/wind.png" className="max-w-8" alt="visibility" />
                            </td>
                            <td className="p-2">
                                <p className="text-sky-300">Wind</p>
                                <p className="font-semibold">{weatherData.wind.speed} Kmph</p>
                            </td>
                        </tr>
                        {/* visibility */}
                        <tr>
                            <td className="p-2">
                                <img src="icons/visibility.png" className="max-w-10" alt="visibility" />
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
        <article className='w-full sm:w-3/4 md:1/2 border-1 border-gray-100 p-4 rounded-2xl shadow-xl'>
        <section className='hourly-forecast'>
            <h3 className="text-lg font-bold text-sky-300">Hourly Forecast</h3>
            <div className='flex flex-wrap gap-3 justify-center'>
                {hForecastData?.list?.slice(0, 6).map((item, index) => (
                    <div key={index} className='border-1 border-gray-100 cursor-pointer rounded-2xl hover:shadow-xl p-2'>
                        <p className='text-xs font-semibold'>{item.dt_txt}</p>
                        <img src={`/icons/${weatherImages[item.weather[0]?.icon]}`} alt="" />
                        <p>{item.weather[0].description}</p>
                        <p>{item.main.temp}&deg;c</p>
                    </div>
                ))}
            </div>
            </section>
            <section className='upcoming-forecast'>
            <div className="max-w-xl mx-auto mt-10 px-4 space-y-4">
      <details className="border rounded-lg shadow group open:ring-2 open:ring-blue-300">
        <summary className="cursor-pointer px-4 py-3 bg-blue-600 text-white font-semibold rounded-t-lg">
          What is Tailwind CSS?
        </summary>
        <div className="px-4 py-3 bg-white text-gray-700">
          Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
        </div>
      </details>

      <details className="border rounded-lg shadow group open:ring-2 open:ring-blue-300">
        <summary className="cursor-pointer px-4 py-3 bg-blue-600 text-white font-semibold rounded-t-lg">
          What is React?
        </summary>
        <div className="px-4 py-3 bg-white text-gray-700">
          React is a JavaScript library for building user interfaces using a component-based architecture.
        </div>
      </details>

      <details className="border rounded-lg shadow group open:ring-2 open:ring-blue-300">
        <summary className="cursor-pointer px-4 py-3 bg-blue-600 text-white font-semibold rounded-t-lg">
          Why use Tailwind with React?
        </summary>
        <div className="px-4 py-3 bg-white text-gray-700">
          Tailwind + React allows for fast UI development with reusable components and clean utility styling.
        </div>
      </details>
    </div>
            </section>
        </article>
    </main>
    </>
  )
}

export default Weather