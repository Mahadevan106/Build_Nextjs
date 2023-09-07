"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`lg:hidden  ${isOpen ? 'w-full' : ''}`}>
      <div className="container sec mx-auto">
        <div className="flex justify-between items-center">
          {!isOpen && (
            <div className="logo1 mt-2 flex">
              <img src="../images/he.jpeg" alt="Logo" />
              <p>Lorem</p>
            </div>
          )}

          <nav className='mt-4'>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <div className="flex cancel">
                  <div className="logo1 flex">
                    <img src="../images/he.jpeg" alt="Logo" />
                    <p>Menu</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-7 h-7 men"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 men"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
            <div className={`lg: ${isOpen ? 'block' : 'hidden'}`}>
              <ul>
                <li className="text-white py-3  ">
                  <Link href="/lorem">LOREM IPUSUM </Link>
                </li>
                <li className="text-white py-3">
                  <Link href="/lorem">LOREM IPUSUM </Link>
                </li>
                <li className="text-white py-3">
                  <Link href="/lorem">LOREM IPUSUM </Link>
                </li>
                <li className="text-white py-3">
                  <Link href="/lorem">LOREM IPUSUM</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
