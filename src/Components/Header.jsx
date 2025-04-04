import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='flex flex-wrap justify-center p-5 border-b-2 sticky top-0 border-b-gray-300'>
          <div className="weather-title">
            <div className='title-logo'>
                <img src="images/weatherapp-logo-main1.png" className='max-w-3xs' alt="" />
              </div>
          </div>
          <div className='location-items text-center flex align-middle justify-center max-h-10'>
            <input
                type="text"
                id="name"
                placeholder="Enter Location"
                class="bg-gray-50 border-b-2 border-gray-300 text-indigo-900 py-2 px-3 focus:outline-none focus:border-sky-300"
            />
            <button className='bg-sky-300 cursor-pointer rounded-full p-1 hover:shadow-black hover:shadow-xs'><img src="images/search.svg" className='w-8' alt="" /></button>
            <div className='bg-sky-300 mx-2 cursor-pointer p-2 rounded-2xl font-bold flex align-middle'>
              <span className='flex'>
                <img src="images/target.png" className='' alt="" />
                </span>
                Current Location
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header