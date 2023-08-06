import { Card } from '@mui/material';
import React from 'react';
import ParagraphHeader from '../../components/ParagraphHeader';
import AboutCard from './AboutCard';
import { RiRecycleFill } from 'react-icons/ri';

const AboutCardsData = [
  {
    icon: <img src="/about-us/about-us-1.svg" />,
    title: 'Lorem Ipsum dolor sit amet',
    paragraph:
      'tus eget aliquet laoreet, dolor arcu congue mauris,tus eget aliquet laoreet, dolor arcu congue mauris,tus eget aliquet laoreet, dolor arcu congue mauris, ',
  },
  {
    icon: <img src="/about-us/about-us-2.svg" />,
    title: 'Lorem Ipsum dolor sit amet',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper enim vel fringilla scelerisque. Morbi fermentum, metus eget aliquet laoreet, dolor arcu congue mauris, ',
  },
  {
    icon: <img src="/about-us/about-us-3.svg" />,
    title: 'Lorem Ipsum dolor sit amet',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper enim vel fringilla scelerisque. Morbi fermentum, metus eget aliquet laoreet, dolor arcu congue mauris, ',
  },
  {
    icon: <img src="/about-us/about-us-4.svg" />,
    title: 'Lorem Ipsum dolor sit amet',
    paragraph:
      'Laorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper enim vel fringilla scelerisque. Morbi </br> fermentum, metus eget aliquet laoreet, dolor arcu congue mauris, ',
  },
];

function AboutCards() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex max-w-xl flex-col justify-center text-center ">
        <div className="flex w-full justify-center">
          <ParagraphHeader>about us</ParagraphHeader>
        </div>
        <div className="mt-4 flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">
            We strive to protect nature for future generations.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {AboutCardsData.map(({ title, paragraph, icon }, index) => {
          return (
            <AboutCard
              key={index}
              title={title}
              paragraph={paragraph}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AboutCards;
