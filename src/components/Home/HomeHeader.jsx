import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="w-full relative
    ">
      <div
        className="-translate-y-10 md:h-[600px] h-[95vh]"
        style={{
          width: "100%",
          height: "",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            'url("https://htmldemo.net/kidol/kidol/assets/img/slider/1.png")',
        }}
        
      >
        <div className="absolute bottom-0" style={{
            width: "100%",
            height: "150px",
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
            backgroundImage:
              'url("https://htmldemo.net/kidol/kidol/assets/img/photos/2.png")',
        }}>

        </div>
        <div className="flex justify-between md:flex-row flex-col md:pt-0 pt-20">
          <div className="flex flex-col justify-center md:items-start items-center gap-5 ml-7 text-center md:text-left">
            <h1 className="lg:text-7xl md:text-5xl text-4xl  text-black font-bold">
              Best Kids Store & Online Shop 
            </h1>
            <p className="font-bold text-2xl ">Give The Gift Of Your Children Everyday</p>
            <Link
              to="alltoys"
              className="relative inline-flex items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Start Shop</span>
            </Link>
          </div>
          <div className="">
            <div className="flex flex-col pt-10 h-[600px] items-center">
              <div className="carousel md:w-[500px]  w-[300px] ">
                <div id="item1" className="carousel-item w-full">
                  <img
                    src="https://htmldemo.net/kidol/kidol/assets/img/slider/2.png"
                    className="w-full"
                  />
                </div>
                <div id="item2" className="carousel-item w-full">
                  <img
                    src="https://htmldemo.net/kidol/kidol/assets/img/slider/2.png"
                    className="w-full"
                  />
                </div>
                <div id="item3" className="carousel-item w-full">
                  <img
                    src="https://htmldemo.net/kidol/kidol/assets/img/slider/2.png"
                    className="w-full"
                  />
                </div>
                <div id="item4" className="carousel-item w-full">
                  <img
                    src="https://htmldemo.net/kidol/kidol/assets/img/slider/2.png"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="z-50">
              <div className="z-50 flex md:opacity-100 justify-center md:w-[500px] w-[300px] py-2 gap-2">
                <a href="#item1" className="btn btn-xs">
                  1
                </a>
                <a href="#item2" className="btn btn-xs">
                  2
                </a>
                <a href="#item3" className="btn btn-xs">
                  3
                </a>
                <a href="#item4" className="btn btn-xs">
                  4
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
