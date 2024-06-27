import React, { useEffect } from "react";
import logoLight from '../assets/techover-logo.png'; // import light mode logo
import logoDark from '../assets/techover-logo-dark.png'; // import dark mode logo
import moonIcon from '../assets/moon.svg'; // import moon icon
import './Navbar.css'; // import CSS for navbar
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh'; // import MUI icon
import { Button } from '@mui/material'; // import MUI button

const Navbar = ({ theme, setTheme }) => {
  const currentLogo = theme === 'dark' ? logoLight : logoDark;
  const buttonText = theme === 'dark' ? 'Light mode' : 'Dark mode';

  // useEffect to toggle light theme class
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [theme]);

  // handle button click to toggle theme
  const handleButtonClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="Navbar">
      <h2>The flag app</h2>
      <img className="logo" src={currentLogo} alt="Techover Logo" />
      <Button
        startIcon={
          theme === 'light' 
          ? <img src={moonIcon} alt="moon icon" style={{ width: 24, height: 24 }} /> 
          : <BrightnessHighIcon />
        } // conditionally render the icon
        onClick={handleButtonClick}
        className="button"
        variant="contained"
        sx={{
          ml: 2,
          backgroundColor: 'var(--button-bg-dark)',
          color: 'var(--button-text-dark)',
          '&:hover': {
            backgroundColor: 'var(--button-bg-light)',
            color: 'var(--button-text-light)',
          },
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Navbar;
