import React from 'react'
import { useState, useEffect } from 'react'

const Weather = ({weatherData}) => {
    
    
    if (!weatherData.main) {
        return <div className='p-5 text-center text-lg'>Click on "Current Location" to fetch weather data.</div>;
    }
    const [presentDate, setPresentDate] = useState(null)
    const [sunRiseTime, setSunRiseTime] = useState('')
    const [sunSetTime, setSunSetTime] = useState('')
    

    const SunRiseSetTime =(timestamp)=>{

        const date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let mins = date.getMinutes();
        
        hours = hours % 12; 
        hours = hours < 10 ? '0'+ hours : hours
        hours = hours ? hours : 12; // The hour '0' should be '12'
        mins = mins < 10 ? '0' + mins : mins;  // Add leading zero to minutes
        return `${hours}:${mins}`;
    }
    useEffect(() => {
        let date = new Date()
        setPresentDate(date.toDateString())
        setSunRiseTime(SunRiseSetTime(weatherData.sys.sunrise))
        setSunSetTime(SunRiseSetTime(weatherData.sys.sunset))
    }, [])

  return (
    <>
    <main className='weather-main m-3 flex flex-wrap gap-2 min-h-screen'>
        <aside className=''>
            <section className='current-weather'>
                <div className='weather-card shadow-xl border-1 border-gray-100 p-2'>
                    <div className='date-location border-b-1 border-gray-400'>
                        <div className="location flex items-center gap-2">
                            <img src="icons/location.png" className='max-w-5' alt="" />
                            <span className='text-gray-500 font-semibold'>{weatherData.name}, {weatherData.sys.country}</span>
                        </div>
                        <div className="date flex items-center gap-2">
                            <img src="icons/date.png" className='max-w-5' alt="" />
                            <span className='text-gray-500 font-semibold'>{presentDate}</span>
                        </div>
                    </div>
                    <h2 className='font-bold text-sky-300'>Now</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <img src="icons/thermometer.png" className='max-w-8' alt="" />
                            <h1 className='text-5xl font-bold'>{weatherData.main.temp}&deg;c</h1>
                        </div>
                        <img src="images/7.png" alt="cloud-image" />
                    </div>
                    <div className='card-footer flex justify-between'>
                       <p> Feels like {weatherData.main.feels_like}&deg;c </p>
                        <p> {weatherData.weather[0].description} </p>
                    </div>
                </div>
            </section>
            <section className='weather-highlights'>
                <h2 className='text-2xl font-bold mt-2 mb-1'>Highlights</h2>
                <div className="highlights-card shadow-xl p-2 border-1 border-sky-100 rounded-xl">
                    {/* <div className="air-quality flex justify-between">
                        <p>Air quality</p>
                        <button className=''>Good</button>
                    </div> */}
                    <div className="sun flex justify-between">
                        <div className="sun-rise flex items-center">
                            <img src="images/sunrise.png" alt="" />
                            <div className=''>
                                <h4>Sunrise</h4>
                                <p className='sun-time text-xl font-semibold'>{sunRiseTime} AM</p>
                            </div>
                        </div>
                        <div className="sun-set flex items-center">
                        <img src="images/sunset.png" alt="" />
                            <div>
                                <h4>Sunset</h4>
                                <p className='sun-time text-xl font-semibold'>{sunSetTime} PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
        <article className='border-2 border-blue-500'>
            <section className='hourly-forecast'></section>
            <section className='upcoming-forecast'></section>
        </article>
    </main>
    </>
  )
}

export default Weather