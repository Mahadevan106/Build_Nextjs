import Contents from "./content"
import Image from "next/image"
import Navbar from "./navbar"

function Header() {
    return (
        <>
            <div className="logo1  hidden mt-2 md:flex">
                <img src="../images/he.jpeg" alt="Logo" />
                <p>Lorem</p>
            </div>
            <Navbar />
            <div className=" lg:container sec sec lg:px-24 lg:mx-auto">
                <div className=" flex  flex-col  font-bold  text-7xl 	font-weight: 900">
                    <h1>LOREM IPUSUM</h1>
                </div>
                <div className=" grid lg:grid-cols-3 md:grid-cols-1 pt-5   justify-between ">
                    <div className="my-5 ">
                        <h5>DOLOR SIT </h5>

                        <p>Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>

                    </div>
                    <div className="lg:pl-5 my-4 lg:me-5">
                        <h5> LOREM IPUSUM DOLOR SIT </h5>


                        <p>Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra malesuada ultricies nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus.</p>
                        <div className="logo">
                            <img src="../images/13.jpeg" />
                        </div>
                    </div>
                    <div className=" my-4">
                        <div>
                            <Image
                                src="/images/coco.jpeg" 
                                alt="Image Description"
                                width={500} 
                                height={300} 
                                loading="lazy"
                            />
                        </div>

                        <div className="my-4 ">

                            <h5 >LOREM IPUSUM DOLOR SIT </h5>

                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                            <div className="logo">
                                <img src="../images/4.jpeg" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Contents />

        </>

    )
}

export default Header


