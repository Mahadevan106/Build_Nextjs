import React from 'react'
import Footer from './footer'
import Image from "next/image"


export default function About() {
    return (
        <div>
            <div className='lg:container sec mx-auto  lg:px-24  lg:mt-20 my-10'>

                <div className='lg:container  mx-auto'>
                    <div className=" flex  flex-col  font-bold  text-8xl my-4	">
                        <h1>LOREM IPUSUM</h1>
                        <h1>DOLOR SET</h1>
                    </div>
                    <div className=" grid lg:grid-cols-3 sm:grid-cols-3 justify-between pt-10 ">
                        <div className="lg:pe-5 my-4  ">
                            <h5> LOREM IPUSUM DOLOR  </h5>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software</p>
                            <div className="logo ">
                                <img src="../images/10.jpeg" />
                            </div>
                        </div>
                        <div className="con lg:pe-5 my-4  ">
                            <h5>DOLOR SIT AMET </h5>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software </p>
                            <div className="logo">
                                <img src="../images/12.jpeg" />
                            </div>

                        </div>



                    </div>
                    <div className=" grid lg:grid-cols-3 md:grid-cols-3 mt-5  ">
                        <div className='grid grid-cols-3'></div>
                        <div className=" child ">
                            <Image
                                src="/images/boy.jpeg"
                                alt="Github"
                                width={600}
                                height={450}
                                layout="responsive"
                                loading="lazy"
                            />

                        </div>
                        <div className="lg:pe-3 my-4">
                            <h5> LOREM IPUSUM DOLOR </h5>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, Lorem Ipsum has been the industry standard dummy text remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets remaining essentially containing Lorem Ipsum passages</p>
                            <div className="logo">
                                <img src="../images/33.jpeg" />
                            </div>
                        </div>




                    </div>


                </div>



            </div>
            <Footer />
        </div>

    )
}
