import React from 'react'
import '../../../next.config'
import Marquee from "react-fast-marquee"


function Slider() {
  return (
    < div className='lg:mt-20 z green'>
    <Marquee >
    <div className="overflow-x-hidden w-full relative   ">
    <div className="   animate-marquee whitespace-nowrap  ">
	    <span className="  slide text-4xl mx-4">LOREM IPSUM</span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
        <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
		<span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
		<span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
	    <span className=" slide text-4xl mx-4">LOREM IPSUM </span>
    </div>
</div>
</Marquee>
</div>

  )
}

export default Slider