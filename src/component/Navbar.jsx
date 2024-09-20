import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
           
            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                className="h-10 w-auto"
                src="data:image/jpeg;base64,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"
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="/index.html"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</a
                >
                <a
                  href="/jobs.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</a
                >
                <a
                  href="/add-job.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    </>
  )
}
