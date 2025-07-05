import React from 'react';

import { Container, Typography } from '@mui/material';
import UrlShortener from './Components/Urlshort';

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom align="center">URL Shortener</Typography>
      <UrlShortener/>
    </Container>
  );
}

export default App;