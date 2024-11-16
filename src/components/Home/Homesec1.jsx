import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import section from "../../assets/Section.png";
import logo from "../../assets/logo.png";

const Homesec1 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${section})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        color: "#FFFFFF",
        width:"100%",
        px: { xs: 2, sm: 4, md: 6 }, 
      }}
    >
      <Container  sx={{ width: { xs: "100%", md: "80%" } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { xs: 2, sm: 4 } }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  typography: { xs: "h4", sm: "h3" }, // Font size adjustment for responsiveness
                }}
              >
                Crossroads with Shazin Hijazy
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "#FFFFFF",
                  fontSize: { xs: "1rem", sm: "1.1rem" }, // Responsive text size
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Talk Shows on Technology, Innovation, Defense Entrepreneurship and beyond.
                Podcasts on International Student Life.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  fontStyle: "italic",
                  color: "#FFFFFF",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Listen & Subscribe On:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  href="https://spotify.com"
                  sx={{
                    backgroundColor: "#F57C00",
                    color: "#FFFFFF",
                    "&:hover": { backgroundColor: "#D06C00" },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  Spotify
                </Button>
                <Button
                  variant="contained"
                  href="https://instagram.com"
                  sx={{
                    backgroundColor: "#F57C00",
                    color: "#FFFFFF",
                    "&:hover": { backgroundColor: "#D06C00" },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  Instagram
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Section: Logo Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, md: 0 }, // Add margin on top for small screens
            }}
          >
            <Box sx={{ width: { xs: "70%", sm: "50%", md: "100%" }, maxWidth: 300 }}>
              <img src={logo} alt="Crossroads logo" style={{ width: "100%", maxWidth: 300 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Homesec1;
