'use client';

import { Box, Typography, Divider } from '@mui/material';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        px: 2,
        py: 4,
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        color: 'text.secondary',
        fontSize: 14,
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        Last update : 7 June 2025
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
        <Typography variant="body2">© {year} Adam Bahrin</Typography>
      </Box>
    </Box>
  );
}
