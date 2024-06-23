import React from "react";
import logo from '../assets/techover-logo.png'; //importerar loggan
import './Navbar.css'; //importera css för navbar
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh'; //ikon från mui
import { Button, Typography } from '@mui/material'; //importera grejer från mui



const Navbar = () => { //deklarera komponenten



// TODO fylla ut riktig funktion sedan. byta css-variabler.
    const handleButtonClick = () => {
        //vad ska hända när knappen trycks
        console.log("Knappen blev tryckt!");
    };

    return ( 
        <>

        <div className="Navbar">
        <Typography px={1} variant="h6" sx={{color: 'white'}}> The flag app </Typography>
        <img src={logo} alt="Techover Logo" />
        <Button onClick={handleButtonClick}>  {/* klickfunktion när klickas */}
        <BrightnessHighIcon sx={{color: 'white'}} />
            <Typography px={1} sx={{color: 'white', textTransform: 'none'}}>Switch to Dark mode</Typography> {/* casesensetive-text  */}
            
        </Button>
        
        </div>

        </>
     );
}
 
export default Navbar;