import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import useResponsive from '@/hooks/useResponsive';

const VideoHero = () => {
  const isSm = useResponsive('down', 'md');
  const videoRefSm = useRef<HTMLVideoElement>(null);
  const videoRefMd = useRef<HTMLVideoElement>(null);
  const [videoHeight, setVideoHeight] = useState(930);

  useEffect(() => {
    const video = videoRefMd.current;
    if (!video) return;

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === video) {
          setVideoHeight(entry.contentRect.height);
        }
      }
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [videoRefMd]);

  useEffect(() => {
    const video = videoRefSm.current;
    if (!video) return;

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === video) {
          setVideoHeight(entry.contentRect.height);
        }
      }
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [videoRefSm]);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: {
          xs: '980px',
          md: '920px'
        },
        zIndex: -1,
        '& .video-sm': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '980px',
          objectFit: 'cover',
          filter: 'brightness(1.1) contrast(1.1)'
        },
        '& .video-md': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '1020px',
          objectFit: 'cover',
          filter: 'brightness(1.1) contrast(1.1)'
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
      {isSm ? (
        <video aria-hidden="true" className="video-sm" autoPlay muted loop ref={videoRefSm}>
          <source src="/videos/video-hero-sm.webm" type="video/webm" />
        </video>
      ) : (
        <video aria-hidden="true" className="video-md" autoPlay muted loop ref={videoRefMd}>
          <source src="/videos/video-hero.webm" type="video/webm" />
        </video>
      )}
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
