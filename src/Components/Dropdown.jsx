import { InputLabel, Box, MenuItem, FormControl, Select } from '@mui/material'; //importera komponenter från mui



// lägga in props för region
const Dropdown = ({ options, onChange}) => {

// funktionalitet för bytet av region
// funktionen
    // const handleChange = (e) => {
    //     setRegion(e.target.value);
    // }

    return (
        <Box sx={{minWidth: 150}}>
            {/* dropdown-meny med ett startväde och lista av alternativ */}
            <FormControl fullWidth variant="outlined">
                <InputLabel>Filter by region</InputLabel> 
                {/* selektor av menyalternativ */}
                <Select onChange={(e) => 
                    onChange(e.target.value)} label="Filter by Region"
                >
                    <MenuItem value="">All continents</MenuItem>
                    <MenuItem value="Africa">Africa</MenuItem>
                    <MenuItem value="Americas">America</MenuItem>
                    <MenuItem value="Asia">Asia</MenuItem>
                    <MenuItem value="Europe">Europe</MenuItem>
                    <MenuItem value="Oceania">Oceania</MenuItem>
                </Select>
            </FormControl>
        </Box>
      );
}
 
export default Dropdown;