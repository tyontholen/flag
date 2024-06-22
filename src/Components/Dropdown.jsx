import { InputLabel, Box, MenuItem, FormControl, Select } from '@mui/material'; //importera komponenter från mui



// lägga in props för region
const Dropdown = ({}) => {

// funktionalitet för bytet av region
// funktionen
    const handleChange = (e) => {
        setRegion(e.target.value);
    }

    return (
        <Box sx={{minWidth: 150}}>
            {/* dropdown-meny med ett startväde och lista av alternativ */}
            <FormControl fullWidth>
                <InputLabel>Filter by region</InputLabel> 
                {/* selektor av menyalternativ */}
                <Select>
                    <MenuItem value="all">All continents</MenuItem>
                    <MenuItem value="region/Africa">Africa</MenuItem>
                    <MenuItem value="region/America">America</MenuItem>
                    <MenuItem value="region/Asia">Asia</MenuItem>
                    <MenuItem value="region/Europe">Europe</MenuItem>
                    <MenuItem value="region/Oceania">Oceania</MenuItem>
                </Select>
            </FormControl>
        </Box>
      );
}
 
export default Dropdown;