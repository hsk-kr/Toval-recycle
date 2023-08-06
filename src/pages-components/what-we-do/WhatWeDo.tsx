import React from 'react';
import Modal from '../../components/Modal';
import ParagraphHeader from '../../components/ParagraphHeader';
import ImageSwiper from '../../components/swiper/ImageSwiper';

function WhatWeDo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex justify-center lg:justify-start">
          <ParagraphHeader>what we are doing</ParagraphHeader>
        </div>
        <h1 className="text-center text-3xl lg:text-start">
          We hold the varous events, Campaigns and raise funds for the
          implementation of projects to preserve the environment
        </h1>
      </div>
      <div className=" h-full">
        <ImageSwiper
          data={[
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
            'textimage.jpeg',
          ]}
        />
      </div>
      <Modal />
    </div>
  );
}

export default WhatWeDo;
