"use client"

import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=' '>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between   text-white w-full acc p-2 ${
              activeIndex === index ? 'active' : ''
            }`}
          >
            <span className='lg:px-28'>{item.title}</span>
            <span className='lg:px-28'>
              {activeIndex === index ? '+' : '-'}
            </span>
          </button>
          {activeIndex === index && (
            <div className="bg-black p-2 it ">
              <p className='lg:px-28 px-2'>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
