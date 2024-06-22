import { TextField } from "@mui/material"; //import textfält
import './Searchbar.css' //import css för sökbaren


// sökfunktionen, todo 
// const SearchForACountry = ({}) => {
//     const handleTextFieldChange = (e) => {

//     }

// };

const Searchbar = () => {
    return ( 
        <div className="search_container">
            {/* textältet. standard text lik Youtubes design */}
            
            <TextField
            variant="outlined"
            label="Search"
            // onChange={handleTextFieldChange}
             />
        </div>
     );
}
 
export default Searchbar;