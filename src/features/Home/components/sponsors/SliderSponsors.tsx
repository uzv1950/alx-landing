// BrandCarousel.jsx
import 'swiper/css';
import 'swiper/css/autoplay';
import { useRef } from 'react';
import { Box } from '@mui/material';
import { Autoplay } from 'swiper/modules';
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemSponsor from './ItemSponsor';
// import 'swiper/css/navigation';
import type { Swiper as SwiperClass } from 'swiper/types';

const brands = [
  '/images/logo-1.svg',
  '/images/logo-2.svg',
  '/images/logo-3.svg',
  '/images/logo-4.svg',
  '/images/logo-5.svg',
  '/images/logo-6.svg',
  '/images/logo-7.svg',
  '/images/logo-8.svg',
  '/images/logo-9.svg'
];

const SliderSponsors = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Swiper
        slidesPerView="auto"
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 100,
          disableOnInteraction: false
        }}
        speed={5000}
        modules={[Autoplay]}
        style={{ cursor: 'grab' }}
      >
        {brands.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{
              padding: '10px 0',
              width: '60%', // En mobile: una tarjeta ocupa 60%, se ve parte de la siguiente
              maxWidth: '210px' // Límite para que no se haga demasiado grande en pantallas grandes
            }}
          >
            <ItemSponsor description="brand" image={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SliderSponsors;
