import React from "react";
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import partner3 from "../../assets/partner3.png";  // Logo image import

function Merchsec1() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg")); // Define breakpoint for larger screens
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md")); // Define breakpoint for medium screens

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      position="relative"
      bgcolor="white"  // Set the background color to white
    >
      {/* White background container */}
      <Box
        sx={{
          position: "absolute", // Overlay positioning
          top: isMediumScreen ? "30%" : "20%",
          left: 0,
          width: "100%", // Full width
          height: "100vh", // Full height
          backgroundColor: "white", // Set the background color to white
          zIndex: 0, // Overlay behind the content
        }}
      />

      {/* Centered Content Box */}
      <Container
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column", // Arrange title and logo vertically
          justifyContent: "center", // Center the content horizontally
          alignItems: "center", // Center the content vertically
          width: "100%", // Full width
          height: "100%", // Full height
          zIndex: 1, // Content in front of overlay
          textAlign: "center", // Center text
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            color: "black",  // Title color
            fontWeight: "bold",
            marginBottom: "2rem", // Space between title and logo
          }}
        >
          Ecosystem Partners
        </Typography>

        {/* Logo Image */}
        <Box
          component="img"
          src={partner3}  // Logo image
          alt="Logo"
          sx={{
            width: "20rem", // Fixed large size for the logo
            height: "20rem", // Fixed large size for the logo
          }}
        />
      </Container>
    </Box>
  );
}

export default Merchsec1;