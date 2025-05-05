import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import CardPerson from './CardPerson';

const SliderTeamPeople = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '280px',
        '& article.card-person': {
          height: '280px'
        }
      }}
    >
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        freeMode={true}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination-team'
        }}
        modules={[FreeMode, Pagination]}
        style={{ paddingBottom: '16px' }}
      >
        <SwiperSlide style={{ width: '80%', maxWidth: '205px', height: '280px !important' }}>
          <CardPerson />
        </SwiperSlide>
        <SwiperSlide style={{ width: '80%', maxWidth: '205px', height: '280px !important' }}>
          <CardPerson />
        </SwiperSlide>
        <SwiperSlide style={{ width: '80%', maxWidth: '205px', height: '280px !important' }}>
          <CardPerson />
        </SwiperSlide>
        <SwiperSlide style={{ width: '80%', maxWidth: '205px', height: '280px !important' }}>
          <CardPerson />
        </SwiperSlide>
        <SwiperSlide style={{ width: '80%', maxWidth: '205px', height: '280px !important' }}>
          <CardPerson />
        </SwiperSlide>
        <SwiperSlide style={{ width: '80%', maxWidth: '205px', height: '280px !important' }}>
          <CardPerson />
        </SwiperSlide>
      </Swiper>

      {/* Dots fuera de las tarjetas */}
      <Box
        className="custom-swiper-pagination-team"
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
export default SliderTeamPeople;
