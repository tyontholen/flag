import { InputLabel, Box, MenuItem, FormControl, Select } from '@mui/material'; // import MUI components
import './Dropdown.css'; // import CSS for dropdown


const Dropdown = ({ onChange, theme }) => {
  return (
    <div className={`dropdown_container ${theme === 'light' ? 'light-theme' : ''}`}>
    <Box sx={{ minWidth: 180 }}>
  <FormControl fullWidth>
    <InputLabel
      sx={{
        color: 'var(--text-color)',
        '&.Mui-focused': {
          color: 'var(--text-color)',
        },
      }}
    >
      Filter by region
    </InputLabel>
    <Select
      onChange={(e) => onChange(e.target.value)}
      label="Filter by Region"
      MenuProps={{
        disableScrollLock: true, 
      }}
      sx={{
        color: 'var(--text-color)',
        '& .MuiSelect-select': {
          backgroundColor: 'var(--primary)',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--text-color)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--text-color)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--text-color)',
        },
        '& .MuiMenu-paper': {
          backgroundColor: 'var(--primary)',
        },
        '& .Mui-selected': {
          backgroundColor: 'var(--secondary) !important',
          color: 'var(--text) !important',
        },
        '& svg': {
          color: 'var(--text-color)', 
        },
      }}
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
    </div>
  );
}

export default Dropdown;
