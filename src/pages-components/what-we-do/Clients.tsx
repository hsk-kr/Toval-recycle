import React from 'react';
import { useTranslation } from 'react-i18next';
import ParagraphHeader from '../../components/ParagraphHeader';
import InfinitySwiper from '../../components/swiper/InfinitySwiper';

const clientsLogoData = [
  <img src="./customers/agan.png" className="h-full" />,
  <img src="./customers/ale.png" className="h-full" />,
  <img src="./customers/avgol.png" className="h-full" />,
  <img src="./customers/clalit.png" className="h-full" />,
  <img src="./customers/DF_omer.png" className="h-full" />,
  <img src="./customers/dolav.png" className="h-full" />,
  <img src="./customers/engel.png" className="h-full" />,
  <img src="./customers/hen.png" className="h-full" />,
  <img src="./customers/intel.png" className="h-full" />,
  <img src="./customers/kafrit.png" className="h-full" />,
  <img src="./customers/log.png" className="h-full" />,
  <img src="./customers/teva.png" className="h-full" />,
  <img src="./customers/yafora.png" className="h-full" />,
  <img src="./customers/yotvata.png" className="h-full" />,
];

function Clients() {
  const { t } = useTranslation();
  const TITLE = t('whatWeDo.client.title');
  return (
    <div className="text-4xl flex flex-col gap-10">
      <ParagraphHeader>{TITLE}</ParagraphHeader>
      <InfinitySwiper data={clientsLogoData} className="h-20 md:h-32" />
    </div>
  );
}

export default Clients;
