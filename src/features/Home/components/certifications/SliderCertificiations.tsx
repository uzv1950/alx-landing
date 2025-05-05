import { Box, Card, CardContent, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import CardCertification from './CardCertification';

const SliderCertificiations = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        freeMode={true}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination'
        }}
        modules={[FreeMode, Pagination]}
        style={{ paddingBottom: '16px' }}
      >
        <SwiperSlide style={{ width: '80%', maxWidth: '350px' }}>
          <CardCertification
            title="Certificación ISO 9001"
            description="Certificación ISO 9001"
            image="/images/certification-1.png"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: '80%', maxWidth: '350px' }}>
          <CardCertification
            title="Certificación ISO 9001"
            description="Certificación ISO 9001"
            image="/images/certification-1.png"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: '80%', maxWidth: '350px' }}>
          <CardCertification
            title="Certificación ISO 9001"
            description="Certificación ISO 9001"
            image="/images/certification-1.png"
          />
        </SwiperSlide>
      </Swiper>

      {/* Dots fuera de las tarjetas */}
      <Box
        className="custom-swiper-pagination"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
          '& .swiper-pagination-bullet': {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            opacity: 1,
            border: '1px solid #1ECAD380',
            mx: 0.5
          },
          '& .swiper-pagination-bullet-active': {
            backgroundColor: 'primaryOpacity.50',
            border: '1px solid #1ECAD380',
            opacity: 1
          }
        }}
      />
    </Box>
  );
};
export default SliderCertificiations;
