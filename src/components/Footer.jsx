
import Link from "next/link";
import React from "react";


const Footer= ()=>{
    return(   
      
        <div className="mt-4 w-42 bg-[#434C47] text-white px-[26px] lg:px-[81px] pt-[41px] pb-4">
      
      <div className="lg:hidden w-full h-[2px] bg-white mt-6" />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="grid grid-cols-3 lg:flex lg:flex-wrap mt-6 lg:mt-10 lg:col-span-2 justify-around justify-items-center text-base lg:text-lg">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/topCourses">
            <p>Top Courses</p>
          </Link>
          <Link href="/About">
            <p>About</p>
          </Link>
          <Link href="/Suggestions">
            <p>Suggestions</p>
          </Link>
        </div>
        
      </div>
      <div className="w-full h-[2px] bg-white mt-8" />
      <div className="font-light pt-2 text-sm lg:text-base flex justify-center lg:justify-start">
        <p>© All the Rights are Reserved with Content provider</p>{" "}
      </div>
    </div>
    )
};
export default Footer;