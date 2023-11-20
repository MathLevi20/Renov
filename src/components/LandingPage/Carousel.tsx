'use client';
import React from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';
import Image from 'next/image';
function Carousel1() {
  return (
    <div className=" h-96 relative  px-100">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Image
            className="flex m-auto object-fit items-center"
            src="/Cap0.png"
            alt={'Logo'}
            width={500}
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="flex m-auto  object-fit items-center"
            src="/Cap1.png"
            alt={'Logo'}
            width={500}
            height={500}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel1;
