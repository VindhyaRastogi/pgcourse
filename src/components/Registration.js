import React from 'react'

export default function Registration() {
  return (
    <div className="flex justify-center flex-col justify-center items-center">

      <p className="font-semibold text-2xl text-gray-900 italic my-8 mx-12">If you are interested in knowing more about the program or would like to register for the program, click on the link below. Please ensure that you attach your resume along with your information.
       
      </p>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSedalSjSZLpjdEKcWlIyf1Za4LTDqklxjy_lT_iPY-wmWNx4w/viewform" target="_blank">
        <button className="mt-[4rem] bg-teal-500 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg">
          Apply Now
        </button>
      </a>
      <p className="font-semibold text-2xl text-gray-900 italic my-8 mx-12">You may also mail us at dshcs@iiitd.ac.in</p>
    </div>
  )
}
