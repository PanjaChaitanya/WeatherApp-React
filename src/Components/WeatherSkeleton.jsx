import React from 'react';

const SkeletonBox = ({ className }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`}></div>
);

export default function WeatherSkeleton() {
  return (
    <main className='weather-main m-3 flex flex-wrap sm:flex-nowrap gap-2'>
      <aside className='w-full sm:w-1/4 md:w-1/2'>
        {/* Current Weather */}
        <section className='current-weather'>
          <div className='weather-card shadow-xl border border-gray-100 p-2'>
            <div className='date-location border-b border-gray-400 space-y-2 mb-2'>
              <div className="location flex items-center gap-2">
                <SkeletonBox className="w-4 h-4" />
                <SkeletonBox className="w-32 h-4" />
              </div>
              <div className="date flex items-center gap-2">
                <SkeletonBox className="w-4 h-4" />
                <SkeletonBox className="w-24 h-4" />
              </div>
            </div>
            <SkeletonBox className='w-12 h-5 mb-2' />
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                <SkeletonBox className='w-7 h-7' />
                <SkeletonBox className='w-16 h-8' />
              </div>
              <SkeletonBox className='w-12 h-12' />
            </div>
            <div className='card-footer flex justify-between mt-2'>
              <SkeletonBox className='w-32 h-4' />
              <SkeletonBox className='w-24 h-4' />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className='weather-highlights'>
          <SkeletonBox className='w-32 h-6 mt-3 mb-2' />
          <div className='border border-sky-100 rounded-2xl shadow-xl p-2 space-y-4'>
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className='flex items-center gap-2 justify-between'>
                <SkeletonBox className='w-12 h-12' />
                <SkeletonBox className='w-16 h-4' />
                <SkeletonBox className='w-12 h-12' />
                <SkeletonBox className='w-16 h-4' />
              </div>
            ))}
          </div>
        </section>
      </aside>

      {/* Right Panel - Hourly Forecast */}
      <article className='w-full sm:w-3/4 md:w-1/2 border border-gray-100 p-4 rounded-2xl shadow-xl'>
        <section className='hourly-forecast'>
          <SkeletonBox className='w-40 h-5 mb-4' />
          <div className='flex flex-wrap gap-2 justify-center'>
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className='border border-gray-100 rounded-2xl p-4 space-y-2 w-[100px]'>
                <SkeletonBox className='w-24 h-3' />
                <SkeletonBox className='w-10 h-10 rounded-full mx-auto' />
                <SkeletonBox className='w-16 h-3' />
                <SkeletonBox className='w-10 h-4' />
              </div>
            ))}
          </div>
        </section>
        <section className='upcoming-forecast'>
          
        </section>
      </article>
    </main>
  );
}
