import React from 'react'
import About from './about'
import Image from "next/image"


function Contents() {
  return (
    <>
      <div className=" lg:container sec lg:px-24 lg:mx-auto">
        <div className=" grid lg:grid-cols-3 md:grid-cols-1   justify-between ">
          <div className=" my-4 lg:me-5">
            <h5> LOREM IPUSUM  </h5>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <div className="logo">
              <img src="../images/1.jpeg" />
            </div>

          </div>
          <div className="my-4">
            <h5>DOLOR SIT AMET </h5>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <div className="logo">
              <img src="../images/q.jpeg" />
            </div>

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-1"></div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 my-4 child">
            <Image
              src="/images/CHILD.jpeg"
              alt="Github"
              width={600}
              height={450}
              layout="responsive"
              loading="lazy"
            />

          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 my-4">
            <h5>LOREM IPUSUM DOLOR</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaboNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
            </p>
            <div className="logo">
              <img src="../images/squ.jpeg" alt="Logo" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:hidden">
          <div className="col-span-1 md:col-span-2 lg:col-span-1"></div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 my-4 child">
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 mt-20">
            <h4>LOREM IPUSUM </h4>
            <div className='mt-5'>
              <p>
                Instagram
              </p>
              <p>
                LinkedIn
              </p>
            </div>
            <p className='mt-5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard typesetting industry. Lorem Ipsum has been the dummy text ever since the 1500s, when an unknown printer took a galley typesetting industry. explicaboNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit software.
            </p>
            <div className="logo">
              <img src="../images/squ.jpeg" alt="Logo" />
            </div>
          </div>
        </div>



      </div>

      <About />
    </>
  )
}

export default Contents