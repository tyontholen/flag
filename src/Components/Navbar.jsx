import React, { useEffect } from "react";
import logoLight from '../assets/techover-logo.png'; //importerar loggan
import logoDark from '../assets/techover-logo-dark.png'; //importera darkmode-loggan
import moonIcon from '../assets/moon.svg'; // import moon icon
import './Navbar.css'; //importera css för navbar
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh'; //ikon från mui
import { Button } from '@mui/material'; //importera grejer från mui

const Navbar = ({ theme, setTheme }) => {
    const currentLogo = theme === 'dark' ? logoLight : logoDark;
    const buttonText = theme === 'dark' ? 'Light mode' : 'Dark mode';

    // useeffect för att lägga till/ta bort light-theme som klass
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    }, [theme]);

    // onclick-event för att byta logga & text
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
                className="transparent-button"
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
