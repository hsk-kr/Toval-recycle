import React from 'react';

interface AboutCardProps {
  title: string;
  icon: JSX.Element;
  paragraph: string;
}

function AboutCard({ title, icon, paragraph }: AboutCardProps) {
  return (
    <div className="flex h-auto flex-col gap-5 border-main text-center md:text-start border rounded-xl p-8 justify-center items-center">
      <div className="text-5xl">{icon}</div>
      <h1 className="text-2xl font-semibold text-third">{title}</h1>
      <p className="text-sm text-gray-500">{paragraph}</p>
    </div>
  );
}

export default AboutCard;
