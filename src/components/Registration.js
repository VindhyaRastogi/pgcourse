import React from 'react'

export default function Registration() {
  return (
    <div className="flex justify-center flex-col justify-center items-center">

      <p className="font-semibold text-2xl text-gray-900 italic my-8 mx-16">If interested,please fill up the application form by clicking on the link below. Please ensure that you attach your resume along with your information.
       
      </p>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSedalSjSZLpjdEKcWlIyf1Za4LTDqklxjy_lT_iPY-wmWNx4w/viewform" target="_blank">
        <button className="mt-[4rem] bg-teal-500 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg">
          Apply Now
        </button>
      </a>
      <p className="font-semibold text-2xl text-gray-900 italic my-8 mx-16">You may also mail us at dshcs@iiitd.ac.in</p>
      <p className="font-semibold text-base text-gray-900 mt-8 mb-32 mx-20">By registering with us, you agree to receive communications via Email/WhatsApp from IIIT Delhi.  IIIT Delhi will not share this information with any third party. We will use your personal information <u>ONLY </u>to send you information and updates about this course.</p>
    </div>
  )
}
