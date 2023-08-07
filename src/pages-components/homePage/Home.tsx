import React from 'react';
import Button from '../../components/Button';
import { PiRecycleLight, PiPercent } from 'react-icons/pi';
import { sectionsData, siteOffset } from '../../utils/sectionsData';
import ScrollLink from '../../components/ScrollLink';

const PARAGRAPH =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper enim vel fringilla scelerisque. Morbi fermentum, metus eget aliquet laoreet, dolor arcu congue mauris';
const MAINIMAGE = '/main-image.png';

const homeFooter = [
  {
    icons: <PiPercent />,
    title: 'We Reward Loyal Customers',
    paragraph: 'Lorem ipsum dolor sit amet',
  },
  {
    icons: <PiRecycleLight />,
    title: 'We Reward Loyal Customers',
    paragraph: 'Lorem ipsum dolor sit amet',
  },
  {
    icons: <PiRecycleLight />,
    title: 'We Reward Loyal Customers',
    paragraph: 'Lorem ipsum dolor sit amet',
  },
];

function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-evenly px-4 pt-16 text-center lg:flex-row lg:text-start">
        <div className="flex max-w-2xl flex-col gap-6 ">
          <h1 className="text-5xl font-semibold leading-[1] sm:text-6xl lg:text-[6vw] 2xl:text-8xl">
            Go <span className="font-bold text-main">Green</span> <br />
            Save the Planet
          </h1>
          <p className="text-xs leading-[1] text-[#505050] sm:text-sm lg:text-[1.3vw] lg:leading-[1.75rem] 2xl:text-xl">
            {PARAGRAPH}
          </p>
          <div className="flex justify-center lg:justify-start">
            <ScrollLink to={sectionsData.getInTouch}>
              <Button className="px-4 py-2 text-sm lg:text-[1.3vw] xl:text-lg">
                Get in touch
              </Button>
            </ScrollLink>
          </div>
        </div>
        <img
          src={MAINIMAGE}
          className="w-full max-w-xl  lg:w-1/2 lg:max-w-6xl"
        />
      </div>
      <div className="flex w-full justify-around bg-secondary p-4 xs:p-5">
        {homeFooter.map(({ title, icons, paragraph }, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center gap-1 md:gap-3"
            >
              <div className="text-sm xs:text-[3vw] text-main lg:text-4xl">
                {icons}
              </div>
              <div>
                <h1 className="text-[0.45rem] xs:text-[1.5vw] font-semibold text-third lg:text-lg">
                  {title}
                </h1>
                <p className="text-[0.35rem] xs:text-[1vw] text-[#717171] lg:text-base">
                  {paragraph}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
