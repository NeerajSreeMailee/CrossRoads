import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container, useTheme } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import local logo images
import partner4 from '../../assets/partner4.jpeg';
import partner5 from '../../assets/partner5.png';
import partner6 from '../../assets/partner6.jpeg';
import partner7 from '../../assets/partner7.jpeg';
import partner8 from '../../assets/partner8.jpeg';

const sponsors = [
  { id: 1, name: 'AICTE', logo: partner4 },
  { id: 2, name: 'IIC', logo: partner5 },
  { id: 3, name: 'Codeiam', logo: partner6 },
  { id: 4, name: 'KALAM DREAM LABS', logo: partner7 },
  { id: 5, name: 'a-hub', logo: partner8 }
];

const Sponsorsec1 = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 2 } },
      { breakpoint: 375, settings: { slidesToShow: 2 } }
    ],
    appendDots: dots => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
          '& li': { width: '12px', height: '12px', mx: '4px', transition: 'all 0.3s ease' },
          '& li.slick-active': {
            transform: 'scale(0.5)',
            '& button': { backgroundColor: 'black' }
          },
          '& button': {
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: theme.palette.grey[500],
            border: 'none',
            transition: 'all 0.3s ease',
            '&:hover': { backgroundColor: theme.palette.grey[700] }
          }
        }}
      >
        {dots}
      </Box>
    ),
    customPaging: () => <button />
  };

  return (
    <Box sx={{ mb: "20px", py: 6, backgroundColor: theme.palette.background.default }}>
      <Container>
        <Typography
          variant="h4" 
          align="center"
          sx={{ mb: 2, fontWeight: 600, color: theme.palette.text.primary }}
        >
          Our Sponsors
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 5, color: theme.palette.text.secondary }}
        >
          Brands that support us.
        </Typography>
        
        <Slider {...settings}>
          {sponsors.map((sponsor) => (
            <Box
              key={sponsor.id}
              sx={{
                px: 1,
                '& img': { width: '100%', height: 'auto', objectFit: 'contain' }
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.background.default,
                  mx: 2,
                  height: 140,  // Increase height to make space for larger logos
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img src={sponsor.logo} alt={sponsor.name} style={{ maxHeight: '140px' }} />  {/* Increased logo size */}
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Sponsorsec1; 