import React from 'react'

import dataorg from "../assets/dataorg_logo.png"
import iiitd from "../assets/iiitd_logo.png"
const Organisations = () => {
  return (
    <div>
          <div className="flex justify-between">
              <div className="my-2 ml-2 w-3/12">
                  <img
                      src={iiitd}
                      alt="Left Image"
                      className="w-full h-auto"
                  />
              </div>
              <div className="my-4 mr-4 w-[14rem]">
                  <img
                      src= {dataorg}
                      alt="Right Image"
                      className="w-full h-auto"
                  />
              </div>
          </div>
    </div>
  )
}
export default Organisations;