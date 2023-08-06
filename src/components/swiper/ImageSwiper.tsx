import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ImageSwiper.css';
import { Grid, Pagination, SwiperOptions, Navigation } from 'swiper';
import { cn } from '../Button';

interface ImageSwiperProps extends SwiperOptions {
  className?: '';
  data: string[];
}

export default function ImageSwiper({
  className,
  data,
  ...props
}: ImageSwiperProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
          fill: 'row',
        }}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 2,
            grid: { rows: 1, fill: 'row' },
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2, fill: 'row' },
          },
          1536: {
            slidesPerView: 4,
            grid: { rows: 2, fill: 'row' },
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        className={cn('image-swiper', className)}
        {...props}
      >
        {data.map((src) => (
          <SwiperSlide>
            <img src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
