import { TextField } from "@mui/material"; //import textfält
import "./Searchbar.css"; //import css för sökbaren
import Dropdown from './Dropdown'


const Searchbar = ({onChange}) => {
  return (
    <div className="search_container">
      {/* textältet. standard text lik Youtubes design */}

      <TextField
        variant="outlined"
        label="Search"
        // onchange-effekt för fältet
        onChange={(e) => onChange(e.target.value)}
      />
      <Dropdown />
    </div>
  );
};

export default Searchbar;
