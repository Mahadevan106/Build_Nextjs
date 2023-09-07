import React from 'react'
import Slider from './slider_main'
import Lorem from './lorem'
import Image from "next/image"


export default function About() {
    return (
        <div>
            <div className='lg:container sec mx-auto lg:px-24 lg:mt-20 my-10 abouttt'>
                <div className="relative w-full about_us grid lg:grid-cols-2 md:grid-cols-1 group">

                    <div className="absolute inset-0 back bg-gray-300 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                        <Image
                        className="w-full h-auto max-h-screen object-cover"
                            src="/images/bg.jpg"
                            alt="Github"
                            width={600}
                            height={450}
                            layout="responsive"
                            loading="lazy"
                        />
                        {/* <img src="../images/bg.jpg" alt="Background" className="w-full h-auto max-h-screen object-cover" /> */}
                    </div>
                    <div className="font-bold text-8xl font-weight-900 relative">
                        <h1 className=" top-0 left-0 mt-4 ml-4">ABOUT</h1>
                        <div className='flex'>
                            <div className="absolute  ml-4   transition-all duration-500 ">
                                <h1>US</h1>
                                <div className='text-sm para'>
                                    <p> Lorem </p>
                                    <br></br>
                                    <p> Lorem</p>
                                </div>
                            </div>
                            <div className='radius '>
                                <img src='../images/background.jpeg' alt="Radius Image" className='group-hover:hidden' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:mt-20 my-10  '>
                        <span className='absolute lg:me-5 alex  mb-4 ml-4 flex transition-all duration-500 group-hover:absolute group-hover:flex '>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard typesetting industry. Lorem Ipsum has been the dummy text ever since the 1500s, when an unknown printer took a galley typesetting industry. Lorem Ipsum has typesetting industry. Lorem Ipsum has been the been the typesetting industry. Lorem Ipsum has been the of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </span>
                    </div>
                </div>
            </div>

            <div className=' mt-20 '>
                <Slider />

                <Lorem />
            </div>


        </div>

    )
}
