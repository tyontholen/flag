import { TextField } from "@mui/material"; //import textfält
import "./Searchbar.css"; //import css för sökbaren



const Searchbar = ({onChange}) => {
  return (
    <div className="search_container">
      {/* textältet. standard text lik Youtubes design */}

      <TextField
        className="textfield"
        variant="outlined"
        label="Search"
        // onchange-effekt för fältet
        onChange={(e) => onChange(e.target.value)}
      />
      
    </div>
  );
};

export default Searchbar;
