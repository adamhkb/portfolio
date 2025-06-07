'use client';

import { Box, Typography, Container, Button } from '@mui/material';

export default function NotebookPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        World Cup 2022 Predictor
      </Typography>

      <Typography variant="body1" gutterBottom>
        This notebook predicts the outcomes of World Cup 2022 matches using statistical and machine learning models. Explore the full notebook below:
      </Typography>
      <Box mt={1}>
        <Button
          variant="contained"
          color="primary"
          href="/project-notebooks/World_Cup_2022_Predictor.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Fullscreen
        </Button>
      </Box>
      <Box
        component="iframe"
        src="/project-notebooks/World_Cup_2022_Predictor.html"
        width="100%"
        height="1000px"
        sx={{
          border: '1px solid #ccc',
          borderRadius: 2,
          mt: 2,
        }}
      />
    </Container>
  );
}
