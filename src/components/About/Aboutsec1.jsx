import React from 'react';
import { Container, Box, Typography, Stack, IconButton, Avatar, useTheme, useMediaQuery } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Aboutsec1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // detect small/medium screens

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: '2rem', paddingRight: { md: '2rem' }  }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign={{ xs: 'center', md: 'left' }} marginLeft={{md: '23px'}}>
          We bring opportunity
        </Typography>
      
        <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Typography variant="overline" display="block" color="text.secondary">
            — Meet the team
          </Typography>
          <Typography variant="body2" color="text.secondary" marginLeft={{xs: '8px', md: '0px'}}>
            Get to know us.
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems={{ xs: 'center', md: 'flex-start' }}
      >
  
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            order: isSmallScreen ? -1 : 1, 
          }}
        >
          <Avatar
          src = "https://media.licdn.com/dms/image/v2/D5603AQGZqMc5aLONFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728295355460?e=2147483647&v=beta&t=UEF_IX6MLw51qvB4GufUA-0T5VskydATieJTyWcNiEs"
            alt="Developer workspace"
            sx={{
              width: 300,
              height: 300,
              borderRadius: '16px',
              boxShadow: 3,
              borderColor: theme.palette.background.paper,
            }}
          />
        </Box>


        <Box sx={{ flex: 1, maxWidth: '500px', paddingRight: { md: '2rem' } }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Hello, I am Shazin Hijazy, Your Host.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{ fontSize: '0.75rem', lineHeight: '1.7rem', fontWeight: 'bold' }}
          >
            Crossroads with Shazin Hijazy began as a simple conversation between two friends, now showcasing inspiring
            stories of technology, innovation, and entrepreneurship. With notable guests, the podcast dives into
            thought-provoking discussions that resonate with listeners worldwide.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{ fontSize: '0.75rem', lineHeight: '1.7rem', fontWeight: 'bold' }}
          >
            Each episode of Crossroads focuses on impactful ideas and explores the journeys of innovators,
            entrepreneurs, and leaders. Through meaningful conversations, we aim to inform and inspire a global audience,
            celebrating the power of storytelling and fresh perspectives.
          </Typography>

          {/* Signature and Social Icons */}
          <Box sx={{ marginTop: '2rem' }}>
            <Typography variant="h5" fontFamily="'Dancing Script', cursive">
              Shazin Hijazy
            </Typography>
            <Stack direction="row" spacing={2} sx={{ marginTop: '1rem' }}>
              <IconButton href="#" color="primary">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="primary">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="primary">
                <Instagram />
              </IconButton>
              <IconButton href="#" color="primary">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Aboutsec1;
