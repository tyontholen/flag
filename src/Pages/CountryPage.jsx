import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Typography, Container, Grid, Box, Chip, Button, Skeleton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import './CountryPage.css';

const CountryPage = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching country data');
        }
        return res.json();
      })
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [countryCode]);

  return (
    <Container className="country-container">
      <Box className="back-button-container">
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')} 
          className="back-button"
        >
          Back
        </Button>
      </Box>
      {loading ? (
        <Box className="country-content">
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Skeleton variant="rectangular" width="100%" height={300} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Skeleton variant="text" width="60%" height={40} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="rectangular" width="80%" height={40} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        country && (
          <Box className="country-content">
            <Grid container spacing={4} justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6}>
                <img className="country-flag" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  {country.name.common}
                </Typography>
                <Box className="country-details">
                  <Typography variant="body1"><strong>Population:</strong> {country.population.toLocaleString()}</Typography>
                  <Typography variant="body1"><strong>Region:</strong> {country.region}</Typography>
                  <Typography variant="body1"><strong>Capital:</strong> {country.capital}</Typography>
                  <Typography variant="body1"><strong>Native Name:</strong> {Object.values(country.name.nativeName)[0].common}</Typography>
                  <Typography variant="body1"><strong>Top Level Domain:</strong> {country.tld.join(', ')}</Typography>
                  <Typography variant="body1"><strong>Currencies:</strong> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</Typography>
                  <Typography variant="body1"><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</Typography>
                </Box>
                {country.borders && country.borders.length > 0 && (
                  <Box className="country-borders">
                    <Typography variant="body1" gutterBottom><strong>Border Countries:</strong></Typography>
                    {country.borders.map(border => (
                      <Chip
                        key={border}
                        label={border}
                        className="border-chip"
                        component={RouterLink}
                        to={`/country/${border}`}
                        clickable
                      />
                    ))}
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
        )
      )}
    </Container>
  );
};

export default CountryPage;
