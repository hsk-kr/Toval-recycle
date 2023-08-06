import React from 'react';
import ParagraphHeader from '../../components/ParagraphHeader';
import { cn } from '../../utils/cn';

interface ProductSectionProps {
  title: string;
  imagePath: string;
  paragraph: string;
  reverse?: boolean;
}

function ProductSection({
  title,
  imagePath,
  paragraph,
  reverse = false,
}: ProductSectionProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-between gap-10 lg:flex-row ',
        { 'lg:flex-row-reverse': reverse }
      )}
    >
      <div className="w-[50vw] max-w-xl lg:w-[80vw]">
        <img src={imagePath} className="w-full" />
      </div>

      <div className="mt-4 flex max-w-2xl flex-col gap-5 text-center lg:text-start">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default ProductSection;
