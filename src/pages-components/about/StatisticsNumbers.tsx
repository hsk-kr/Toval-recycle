import React from 'react';

const statisticsNumbersData = [
  {
    icon: <img className="h-full" src="/number-icons-1.svg" />,
    number: ' 4,000,000',
    title: 'tons of cardboard weve recycled',
  },
  {
    icon: <img className="h-full" src="/number-icons-3.svg" />,
    number: '85%',
    title: 'of the Fortune 500 weve served',
  },
  {
    icon: <img className="h-full" src="/number-icons-2.svg" />,
    number: '1,800,000',
    title: 'tons of paper weve recycled',
  },
];

function StatisticsNumbers() {
  return (
    <div className="flex flex-wrap flex-col items-center gap-10 px-8 sm:flex-row w-full justify-around text-xl text-third">
      {statisticsNumbersData.map(({ icon, number, title }, index) => (
        <div className="relative w-52 md:w-auto" key={index}>
          <div className="absolute z-0 -translate-x-1/2 -translate-y-[30%] md:-translate-y-[20%] opacity-60">
            <div className="h-16 md:h-20">{icon}</div>
          </div>
          <div className="relative z-10 flex flex-col gap-2">
            <h1 className="font-bold text-main text-5xl md:text-7xl">
              {number}
            </h1>
            <h1 className="text-sm md:text-base text-gray-700">
              {title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatisticsNumbers;
