import { Outlet } from "react-router-dom"; // placeholderkomponent från router dom
import Navbar from "../Components/Navbar"; // navbaren ska med till rootlayouten, importera
import { useState, useEffect } from "react"; // useState & effect-hooken från react
import './RootLayout.css';

// färgema, dark som default
const RootLayout = () => {
    const [theme, setTheme] = useState('dark');
    
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    }, [theme]);

    return (
        <div className={`root-layout ${theme}`}>
            {/* Navbar är del av RootLayout som speglas i app.jsx */}
            <Navbar theme={theme} setTheme={setTheme} />
            <main>
                <Outlet context={{ theme }} />
            </main>
        </div>
    );
}

export default RootLayout;
