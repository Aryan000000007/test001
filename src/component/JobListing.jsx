 import React from 'react'
 import jobs from '../jobs.json'
 
 const JobListing = () => {

    console.log(jobs);
   return (
     <>
     <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job)=>(

<div class="bg-white rounded-xl shadow-md relative">
<div class="p-4">
  <div class="mb-6">
    <div class="text-gray-600 my-2">Full-Time</div>
    <h3 class="text-xl font-bold">Senior React Developer</h3>
  </div>

  <div class="mb-5">
   We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
  </div>

  <h3 class="text-indigo-500 mb-2">$70 - $80K / Year</h3>

  <div class="border border-gray-100 mb-5"></div>

  <div class="flex flex-col lg:flex-row justify-between mb-4">
    <div class="text-orange-700 mb-3">
      <i class="fa-solid fa-location-dot text-lg"></i>
      Boston, MA
    </div>
    <a
      href="job.html"
      class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
    >
     Read More
    </a>
  </div>
</div>
</div>
    ))}
          
        
        </div>
      </div>
    </section>
     </>
   )
 }
 
 export default JobListing