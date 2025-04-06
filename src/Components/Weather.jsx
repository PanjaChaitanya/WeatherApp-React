import React from 'react'

const Weather = () => {
  return (
    <>
    <main className='weather-main m-3 flex gap-5 min-h-screen'>
        <aside className='flex-1/4'>
            <section className='current-weather'>
                <div className='weather-card shadow-xl border-1 border-gray-100 p-2'>
                    <div className='date-location border-b-1 border-gray-400'>
                        <div className="location flex items-center gap-2">
                            <img src="icons/location.png" className='max-w-5' alt="" />
                            <span className='text-gray-500 font-semibold'>Bhimavaram</span>
                        </div>
                        <div className="date flex items-center gap-2">
                            <img src="icons/date.png" className='max-w-5' alt="" />
                            <span className='text-gray-500 font-semibold'>Wednesday 12, April</span>
                        </div>
                    </div>
                    <h2 className='font-bold text-sky-300'>Now</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <img src="icons/thermometer.png" className='max-w-8' alt="" />
                            <h1 className='text-5xl font-bold'>35&deg;c</h1>
                        </div>
                        <img src="images/7.png" alt="cloud-image" />
                    </div>
                    <div className='card-footer flex justify-between'>
                        Feels like 37&deg;c 
                        <p>Broken Clouds</p>
                    </div>
                </div>
            </section>
            <section className='weather-highlights'>
                <h2 className='text-2xl font-bold'>Highlights</h2>
                <div className="highlights-card">
                    <div className="air-quality flex justify-between">
                        <p>Air quality</p>
                        <button className=''>Good</button>
                    </div>
                    <div className="sun flex justify-between">
                        <div className="sun-rise flex items-center">
                            <img src="images/sunrise.png" alt="" />
                            <div className=''>
                                <h4>Sunrise</h4>
                                <p className='sun-time text-xl font-semibold'>05:46 AM</p>
                            </div>
                        </div>
                        <div className="sun-set flex items-center">
                        <img src="images/sunset.png" alt="" />
                            <div>
                                <h4>Sunset</h4>
                                <p className='sun-time text-xl font-semibold'>06:35 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
        <article className='flex-3/4 border-2 border-blue-500'>
            <section className='hourly-forecast'></section>
            <section className='upcoming-forecast'></section>
        </article>
    </main>
    </>
  )
}

export default Weather