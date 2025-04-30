import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoHeight, setVideoHeight] = useState(930);

  useEffect(() => {
    if (!videoRef.current) return;

    const updateHeight = () => {
      if (videoRef.current) {
        setVideoHeight(videoRef.current.clientHeight);
      }
    };
    // Llamamos una vez para capturar el height inicial
    updateHeight();

    // Escuchamos cambios de tamaño de ventana
    window.addEventListener('resize', updateHeight);

    // Limpiamos el listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', updateHeight);
  }, [videoRef]);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 'auto',
        zIndex: -1,
        '& .video-base': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          filter: 'brightness(1.1) contrast(1.1)'
        },
        '& .video-waves': {
          zIndex: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        },
        '& .overlay': {
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(72.6% 65.19% at 50% 24.54%, rgba(20, 22, 25, 0) 0%, rgba(20, 22, 25, 0.4) 50%, #141619 120%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        }
      }}
    >
      <video aria-hidden="true" className="video-base" autoPlay muted loop ref={videoRef}>
        <source src="/videos/video-hero.webm" type="video/webm" />
      </video>
      <Box
        className="overlay"
        sx={{
          height: videoHeight
        }}
      />
    </Box>
  );
};
export default VideoHero;
