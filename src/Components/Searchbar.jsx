import { TextField } from "@mui/material"; // import textfält
import "./Searchbar.css"; // import css för sökbaren

const Searchbar = ({ onChange, theme }) => {
  const textColor = theme === 'dark' ? 'red' : 'white';
  const borderColor = theme === 'dark' ? 'red' : 'white';

  return (
    <div className={`search_container ${theme === 'light' ? 'light-theme' : ''}`}>
      {/* textfältet. standard text lik Youtubes design */}

      <TextField
        className="textfield"
        variant="outlined"
        label="Search"
        // onchange-effekt för fältet
        onChange={(e) => onChange(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'var(--border-color)', // border color
            },
            '&:hover fieldset': {
              borderColor: 'var(--border-color)', // border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--border-color)', // border color when focused
            },
            input: {
              color: 'var(--input-color)', // input text color
            },
          },
          '& .MuiInputLabel-root': {
            color: 'var(--input-color)', // label color
            '&.Mui-focused': {
              color: 'var(--input-color)', // label color when focused
            },
          },
        }}
      />
    </div>
  );
};

export default Searchbar;
