import { Typography } from "@mui/material";
import './HomePage.css'; // import för css

import Searchbar from '../Components/Searchbar';

const HomePage = () => {
  return (
    // main-container
    <div className="main_homepage"> 
    {/* sök & dropdown-sektionen */}
      <div className="select_homepage">
        <Searchbar />
      </div>
      {/* korten för länderna */}
      <div className="content">
        <Typography sx={{ color: 'red' }}>TEST</Typography>
      </div>
    </div>
  );
};

export default HomePage;
