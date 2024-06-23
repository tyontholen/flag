import { Outlet } from "react-router-dom"; //placeholderkomponent från router dom
import Navbar from "../Components/Navbar"; //navbaren ska med till rootlayouten, importera
import { ThemeProvider, createTheme } from '@mui/material/styles'; //mui, skapa tema för light/dark
import { useState } from "react"; //useState-hooken från react

// färgema, dark som default
const RootLayout = () => {
    const [theme, setTheme] = useState('dark');
    const colorTheme = theme == 'dark' ? createTheme({
        palette: {
            mode: 'dark',
        },
    })
    : createTheme ({
        palette: {
            mode: 'light',
        },
    });

    return ( 
        <ThemeProvider theme={colorTheme}>
            <div>
                {/* Navbar är del av RootLayout som speglas i app.jsx */}
                <Navbar theme={theme} setTheme={setTheme} />
                <main>
                    <Outlet />
                </main>
            </div>
        </ThemeProvider>
     );
}
 
export default RootLayout;