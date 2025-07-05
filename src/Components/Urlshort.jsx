import React, { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!originalUrl || !originalUrl.startsWith("http")) {
      alert("enter a valid URL starting with http or https");
      return;
    }

    try {
      setLoading(true);
      setShortUrl('');
      
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`);
      
      setShortUrl(response.data.result.full_short_link);
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Failed to shorten URL. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <TextField
        label="Enter a long URL"
        variant="outlined"
        fullWidth
        margin="normal"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleShorten}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Shorten URL'}
      </Button>

      {shortUrl && (
        <Typography variant="body1" sx={{ mt: 4 }}>
          Shortened URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </Typography>
      )}
    </Box>
  );
};

export default UrlShortener;
