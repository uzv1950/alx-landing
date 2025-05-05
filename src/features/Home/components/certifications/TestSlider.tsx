import { Box, Card, CardContent, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';

const cards = [
  { id: 1, title: 'Card 1', content: 'Contenido de la tarjeta 1' },
  { id: 2, title: 'Card 2', content: 'Contenido de la tarjeta 2' },
  { id: 3, title: 'Card 3', content: 'Contenido de la tarjeta 3' },
  { id: 4, title: 'Card 4', content: 'Contenido de la tarjeta 4' }
];

export default function TestSlider() {
  return (
    <Box sx={{ width: '100%', px: 2 }}>
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
        {cards.map(card => (
          <SwiperSlide key={card.id} style={{ width: '80%', maxWidth: '350px' }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2">{card.content}</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots fuera de las tarjetas */}
      <Box
        className="custom-swiper-pagination"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
          '& .swiper-pagination-bullet': {
            width: 10,
            height: 10,
            backgroundColor: 'grey.500',
            opacity: 0.6,
            mx: 0.5
          },
          '& .swiper-pagination-bullet-active': {
            backgroundColor: 'primary.main',
            opacity: 1
          }
        }}
      />
    </Box>
  );
}
