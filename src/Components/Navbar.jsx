import React from "react";
import logoLight from '../assets/techover-logo.png'; //importerar loggan
import logoDark from '../assets/techover-logo-dark.png'; //importera darkmode-loggan
import './Navbar.css'; //importera css för navbar
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh'; //ikon från mui
import { Button} from '@mui/material'; //importera grejer från mui

const Navbar = ({ theme, setTheme }) => {
    const currentLogo = theme === 'dark' ? logoDark : logoLight;
    const buttonText = theme === 'dark' ? 'Switch to Dark mode' : 'Switch to Light mode';

    // onclick-event för att byta logga & text
    const handleButtonClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
//todo, cssvariabler för resterande av appen
    return (
        <div className="Navbar">
            <h2>The flag app</h2>
            <img className="logo" src={currentLogo} alt="Techover Logo" />
            <Button
                startIcon={<BrightnessHighIcon />}
                onClick={handleButtonClick}
                variant="contained"
                sx={{ ml: 2 }}
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default Navbar;
