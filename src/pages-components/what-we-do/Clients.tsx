import React from 'react';
import ParagraphHeader from '../../components/ParagraphHeader';
import InfinitySwiper from '../../components/swiper/InfinitySwiper';

const clientsLogoData = [
  <img src="./logo.svg" className="h-full" />,
  <img src="./logo.svg" className="h-full" />,
  <img src="./logo.svg" className="h-full" />,
  <img src="./logo.svg" className="h-full" />,
  <img src="./logo.svg" className="h-full" />,
  <img src="./logo.svg" className="h-full" />,
  <img src="./logo.svg" className="h-full" />,
];

function Clients() {
  return (
    <div className="text-4xl flex flex-col gap-10">
      <ParagraphHeader>Clients</ParagraphHeader>
      <InfinitySwiper data={clientsLogoData} className="h-20 md:h-32" />
    </div>
  );
}

export default Clients;
