'use client';

import { Box, Typography, Divider, Stack } from '@mui/material';

export default function TestimonialsSection() {
  return (
    <Box component="section">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Testimonials
      </Typography>

      <Stack spacing={2}>
        <Box>
          <Typography variant="body1" fontStyle="italic" gutterBottom>
            "While working together, I was constantly impressed by Adam's eagerness to learn and his unwavering
            focus on his tasks. He has a great talent for solving large technical challenges, making it look easy."
          </Typography>
          <Typography variant="subtitle1" fontWeight="medium">
            - Jacob Sargent, Ex–Software Engineer at Queen's Lane Consultants
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Worked with Adam on the same team
          </Typography>
          <Divider sx={{ mt: 2 }} />
        </Box>

        <Box>
          <Typography variant="body1" fontStyle="italic" gutterBottom>
            "Adam is a standout engineer in his field. He came on board to help develop access control systems
            leveraging AI. His willingness to learn and take on new responsibilities is something to be desired in any
            professional."
          </Typography>
          <Typography variant="subtitle1" fontWeight="medium">
            – Yee Yun Lim, Founder at Aye Solutions
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Managed Adam directly
          </Typography>
          <Divider sx={{ mt: 2 }} />
        </Box>
      </Stack>
    </Box>
  );
}
