import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LazyImage({ src, alt, lowSrc, className, ...props }: any) {
  return (
    <LazyLoadImage
      className={className}
      width="100%"
      height="100%"
      src={src}
      effect="blur"
      placeholderSrc={lowSrc}
      {...props}
    />
  );
}

export default LazyImage;
