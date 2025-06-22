import React from 'react';
import { Box } from '@mui/material';

const HeroCarousel = () => {
  return (
    <Box
      height="400px"
      sx={{
        backgroundImage: `url('https://via.placeholder.com/1200x400?text=Hero+Banner')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 2,
        mx: 2,
      }}
    />
  );
};

export default HeroCarousel;
