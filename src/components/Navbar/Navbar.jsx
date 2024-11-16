import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
import logo from "../../assets/logo.png";

const Navbar = ({ toggleTheme, mode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#F57C00" : "inherit",
    borderBottom: isActive ? "2px solid #F57C00" : "none",
    textAlign: "center",
    paddingBottom: "3px",
    fontWeight: "bold",
    transition: "color 0.2s ease, transform 0.2s ease",
    "&:hover": {
      color: "#F57C00",
      transform: "scale(1.05)",
    },
  });

  return (
    <>
      <AppBar
        position="sticky" 
        color="inherit"
        sx={{
          top: 0,
          width: "100%",
          backgroundColor: "background.paper",
          transition: "background-color 0.3s ease",
          boxShadow: isScrolled ? 3 : 0, 
          
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mx: "auto",
            height: "80px", // Ensure the height remains consistent
            padding: 1,
          }}
        >
          {/* Mobile View */}
          <Box
            display={{ xs: "flex", md: "none" }}
            width="100%"
            h="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton onClick={toggleNav} aria-label="menu"
              sx={{
                color: "primary.main",
                borderColor: "primary.main",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "primary.light",
                  transform: "scale(1.05)",
                  transition: "all 0.2s ease",
                },
              }}
            >
              {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </IconButton>
            <Box width="50px" height="50px">
              <img src={logo} alt="Logo" width="100%" height="100%" />
            </Box>
          </Box>

          {/* Desktop View */}
          <Box
            display={{ xs: "none", md: "flex" }}
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width="15%">
              <img src={logo} alt="Logo" width="50px" height="auto" />
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" width="50%" fontWeight="700" textTransform="uppercase" whiteSpace="nowrap">
              <ScrollLink to="home" smooth={true} duration={500} style={navLinkStyle}>
                Home
              </ScrollLink>
              <ScrollLink to="episodes" smooth={true} duration={500} style={navLinkStyle}>
                Episodes
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} style={navLinkStyle}>
                About Us
              </ScrollLink>
              <ScrollLink to="merch" smooth={true} duration={500} style={navLinkStyle}>
                Our Mentors
              </ScrollLink>
              <ScrollLink to="sponsors" smooth={true} duration={500} style={navLinkStyle}>
                Our Sponsors
              </ScrollLink>
            </Box>

            <IconButton onClick={toggleTheme} color="inherit" edge="end" sx={{ ml: 2 }}>
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Menu for Mobile */}
      <Drawer anchor="left" open={isOpen} onClose={toggleNav} ModalProps={{ keepMounted: true }}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box width="30%">
              <img src={logo} alt="Logo" width="100%" height="60px" />
            </Box>
            <IconButton onClick={toggleNav} sx={{ color: "text.primary" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <ListItem button component={ScrollLink} to="home" smooth={true} duration={500} onClick={toggleNav} style={navLinkStyle}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={ScrollLink} to="episodes" smooth={true} duration={500} onClick={toggleNav} style={navLinkStyle}>
              <ListItemText primary="Episodes" />
            </ListItem>
            <ListItem button component={ScrollLink} to="about" smooth={true} duration={500} onClick={toggleNav} style={navLinkStyle}>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={ScrollLink} to="merch" smooth={true} duration={500} onClick={toggleNav} style={navLinkStyle}>
              <ListItemText primary="Merch" />
            </ListItem>
            <ListItem button component={ScrollLink} to="sponsors" smooth={true} duration={500} onClick={toggleNav} style={navLinkStyle}>
              <ListItemText primary="Our Sponsors" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
