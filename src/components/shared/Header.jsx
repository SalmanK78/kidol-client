import React from "react";
import { Link } from "react-router-dom";

const Header = ({children,login}) => {
  return (
    <div className="-translate-y-10 " style={{
            width:'100%',
            height:`${login ? '200px':'400px'}`,
            backgroundSize:'cover',
            background:'#95B3E0',
            backgroundImage:'url("https://htmldemo.net/kidol/kidol/assets/img/slider/1.png")'
    }}>
      <div style={{
        height:`${login ? '200px':'400px'}`
      }} className='header flex items-center  justify-center flex-col'>
            <h1 className="text-white text-5xl font-bold">{children}</h1>
            <h3 className="font-bold text-lg mt-5"> <Link to={-1} className="text-white hover:text-red-600"> Home </Link> <span className="text-red-600"> //{children}</span></h3>
      </div>
    </div>
  );
};

export default Header;
