import React from 'react'
import Weather from './Weather'
const Header = () => {
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
                  class="bg-gray-100 border-b-2 border-gray-300 text-indigo-900 px-3 focus:outline-none focus:border-sky-300"
              />
              <button className='bg-sky-300 cursor-pointer rounded-full p-1 hover:shadow-black hover:shadow-xs'><img src="images/search.svg" className='max-w-8' alt="" /></button>
            </div>
            <div className='bg-sky-300 cursor-pointer p-2 rounded-2xl font-bold flex align-middle max-h-10'>
              <span className='flex'>
                <img src="images/target.png" className='' alt="" />
              </span>
              <span className=''>Current Location</span>
            </div>
          </section>
        </header>
        <Weather/>
    </>
  )
}

export default Header