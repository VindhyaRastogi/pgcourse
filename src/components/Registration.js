import React from 'react'
import Banner from './Banner'
export default function Registration() {
  return (
    <div className="flex justify-center flex-col justify-center items-center">
      
      <Banner/>
      <p className="font-semibold text-2xl text-gray-900 italic my-8 mx-16">
        If interested, please fill up the application form by clicking on the link below.
      </p>
      <div className='mx-16'>
      <p className="text-xl font-semibold text-gray-900"> You need have you’re a) resume and b) A Statement of Purpose ready to upload as part of the application.</p>
        <p className="text-base font-semibold mt-2 mb-2"><u>Instructions for Preparing your Statement of Purpose SoP</u></p>
        <p>Please upload a Statement of Purpose (up to 1000 words). The statement should be
          structured around answering the following questions</p>
        <p>a. What is your current work profile?</p>
        <p>b. What is your previous experience with in data science (if any)?</p>
        <p>c. What is your motivation to apply for this program?</p>
        <p>d. How do you plan to apply the knowledge gained in this program in your
          future endeavours?</p>
      
      </div>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSedalSjSZLpjdEKcWlIyf1Za4LTDqklxjy_lT_iPY-wmWNx4w/viewform" target="_blank">
        <button className="mt-[2rem] bg-teal-500 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg">
          Apply Now
        </button>
      </a>
      <p className="font-semibold text-2xl text-gray-900 italic my-4 mx-16">You may also mail your application along with the required documents to us at: dshcs@iiitd.ac.in</p>
      <p className="font-semibold text-base text-gray-900 mt-4 mb-32 mx-20">By registering with us, you agree to receive communications via Email/WhatsApp from IIIT Delhi.  IIIT Delhi will not share this information with any third party. We will use your personal information <u>ONLY </u>to send you information and updates about this course.</p>
    </div>
  )
}
