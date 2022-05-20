import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

function explore() {
  return (
      
      
    <div className="text-white">

     <Sidebar />
     
     <Widgets/>
    {/* <section className="relative shadow-2xl max-w-screen-xl  mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={1000}

        // className="h-[100px]"
      >
        <div>
          <img loading="lazy" src="https://www.smartertravel.com/wp-content/uploads/2016/08/travel-tourist-photographer-lens-camera-sunset.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://cdn.photoworkout.com/wp-content/uploads/2018/06/Travel-Photography-Tips.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://121clicks.com/wp-content/uploads/2017/04/thorge_berger_travel_photography_01.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://www.itsjustlight.com/wp-content/uploads/2015/10/Copenhagen-Denmark-Travel-Photography.jpg" alt="" />
        </div>
      </Carousel>
    </section> */}
    </div>
  )
}

export default explore