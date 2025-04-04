import React from 'react'

const Home = () => {
  return (
    <div>
        <header className='flex flex-wrap justify-between p-5 border-2 border-amber-500'>
           <div className="weather-title border-2 border-red-300">
            <div className='title-logo'>
                <img src="images/weatherapp-logo-main1.png" className='max-w-3xs' alt="" /></div>
           </div>
           <div className='location-items text-center border-2 border-amber-300'>
            <input
                type="text"
                id="name"
                placeholder="Enter Location"
                class="bg-gray-50 border-b-2 border-gray-300 text-indigo-900 py-2 px-3 focus:outline-none focus:border-sky-300"
            />
            <button className='bg-sky-300 cursor-pointer rounded-full p-1 hover:shadow-black hover:shadow-xs'><img src="images/search.svg" className='w-8' alt="" /></button>
            <button className='bg-sky-300 mx-2 cursor-pointer p-2 rounded-2xl font-bold'> Current Location</button>
           </div>
        </header>
    </div>
  )
}

export default Home