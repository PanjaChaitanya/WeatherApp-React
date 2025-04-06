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
                        <h1 className='text-5xl font-bold'>5&deg;c</h1>
                        <img src="images/7.png" alt="cloud-image" />
                    </div>
                    <p>Broken Clouds</p>
                </div>
            </section>
            <section className='weather-highlights'></section>
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