import { Typography } from "@mui/material";
import './HomePage.css'; // import för css

const HomePage = () => {
  return (
    // main-container
    <div className="main_homepage"> 
    {/* sök & dropdown-sektionen */}
      <div className="select_homepage">
        <Typography sx={{ color: 'red' }}>Searchbar</Typography>
        <Typography sx={{ color: 'blue' }}>Dropdown menu</Typography>
      </div>
      {/* korten för länderna */}
      <div className="content">
        <Typography sx={{ color: 'red' }}>TEST</Typography>
      </div>
    </div>
  );
};

export default HomePage;
