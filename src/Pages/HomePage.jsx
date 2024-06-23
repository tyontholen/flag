import React, {useEffect, useState} from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Skeleton } from '@mui/material';
import './HomePage.css'; // import för css

//importera searchbaren & filter
import Searchbar from '../Components/Searchbar';
import Dropdown from '../Components/Dropdown';

const HomePage = ({theme}) => {


  useEffect(() => {
    if (theme === 'dark') {
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
    }
}, [theme]);

  // statehantering
  // tom array av hämtade länder till en början
  const [countries, setCountries] = useState([]);
  // loadingstate av api:et true först
  const [loading, setLoading] = useState(true);
  // initialt är inget sökt, inget filtreras
  const [search, setSearch] = useState('');
  // state för region, ingen region vald initialt
  const [region, setRegion] = useState('');

// hämta data från restcountries api
  useEffect(() => {
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => {
      if (!res.ok) {
        throw new Error('Error when pulling data');
      }
      // lägg responsen från api:et i en json
      return res.json();
    })
    .then(data => {
      
      // datat sorteras alfabetiskt per landets namn
      const sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      // placera sorterad data till countries state
      setCountries(sortedData); 
      // datat hämtats, loading är nu false
      setLoading(false);
    });
  }, []);

    // funktion för filtrera för sök & region
    const filteredCountries = countries.filter(country => {
      const matchesSearchQuery = country.name.common.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = region ? country.region === region : true;
      return matchesSearchQuery && matchesRegion;
    });


  return (
    // main-container
    <div className="main_homepage"> 
    {/* sök & dropdown-sektionen */}
      <div className="select_homepage">
        {/*skicka onchange-prop till sökbaren  */}
        <Searchbar onChange={setSearch} />
        {/* dropdownen hanteras nu separat m. eget onchange */}
        <Dropdown onChange={setRegion} />
      </div>
      {/* korten för länderna */}
      <div className="content">
        {/* om loading är sann, visa skeletonloaders */}
      {loading ? (
          <Grid container spacing={2}>
            {/* array med antal kort som laddas */}
            {Array.from(new Array(8)).map((_, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card>
                  <Skeleton variant="square" height={240} width={300} />
                  <CardContent>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="60%" />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          // om loading inte falsk, datat hämtats renderas den riktiga datan
        ) : (
          <Grid container spacing={2}>
            {/* map-metod för arrayen med data */}
            {/* filtrerade länder */}
            {filteredCountries.map((country) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3}>
                <Card className="card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={country.flags.png} //landets flagga
                    alt={`Flag of ${country.name.common}`}  //namnet på landet
                  />
                   <CardContent>
                    <Typography variant="h6">
                      {country.name.common}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <Typography component="span" sx={{ color: 'blue' }}>Population:</Typography> {country.population.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <Typography component="span" sx={{ color: 'green' }}>Region:</Typography> {country.region}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <Typography component="span" sx={{ color: 'purple' }}>Capital:</Typography> {country.capital}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default HomePage;