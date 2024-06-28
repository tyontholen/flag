import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Typography, Container, Grid, Box, Button, Skeleton } from '@mui/material';
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
          className="back-button transparent-button"
          sx={{
            ml: 2,
            backgroundColor: 'var(--button-bg-dark)',
            color: 'var(--button-text-dark)',
            '&:hover': {
                backgroundColor: 'var(--button-bg-light)',
                color: 'var(--button-text-light)',
            },
        }}
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
                <img className="country-flag" src={country.flags?.png} alt={`Flag of ${country.name?.common}`} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  {country.name?.common || 'N/A'}
                </Typography>
                <Box className="country-details">
                  <Typography variant="body1"><span className="property-name">Population:</span> <span className="property-value">{country.population?.toLocaleString() || 'N/A'}</span></Typography>
                  <Typography variant="body1"><span className="property-name">Region:</span> <span className="property-value">{country.region || 'N/A'}</span></Typography>
                  <Typography variant="body1"><span className="property-name">Capital:</span> <span className="property-value">{country.capital?.[0] || 'N/A'}</span></Typography>
                  <Typography variant="body1"><span className="property-name">Native Name:</span> <span className="property-value">{Object.values(country.name?.nativeName || {})[0]?.common || 'N/A'}</span></Typography>
                  <Typography variant="body1"><span className="property-name">Top Level Domain:</span> <span className="property-value">{country.tld?.join(', ') || 'N/A'}</span></Typography>
                  <Typography variant="body1"><span className="property-name">Currencies:</span> <span className="property-value">{Object.values(country.currencies || {}).map(currency => currency.name).join(', ') || 'N/A'}</span></Typography>
                  <Typography variant="body1"><span className="property-name">Languages:</span> <span className="property-value">{Object.values(country.languages || {}).join(', ') || 'N/A'}</span></Typography>
                </Box>
                {country.borders && country.borders.length > 0 && (
                  <Box className="country-borders">
                    <Typography variant="body1" className="border-countries-text" gutterBottom><strong>Border Countries:</strong></Typography>
                    <Box className="border-buttons-container">
                      {country.borders.map(border => (
                        <Button
                          key={border}
                          variant="contained"
                          className="border-button"
                          component={RouterLink}
                          to={`/country/${border}`}
                          sx={{
                            ml: 2,
                            backgroundColor: 'var(--button-bg-dark)',
                            color: 'var(--button-text-dark)',
                            '&:hover': {
                                backgroundColor: 'var(--button-bg-light)',
                                color: 'var(--button-text-light)',
                            },
                        }}
                        >
                          {border}
                        </Button>
                      ))}
                    </Box>
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
