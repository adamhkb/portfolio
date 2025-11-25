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
            "I had the chance to work closely with Adam at Queen’s Lane Consultants, and I couldn’t have asked for a better engineering partner. Adam has that rare combination of deep technical expertise and genuine curiosity about how users actually experience the product.
          </Typography>
          <Typography variant="body1" fontStyle="italic" gutterBottom>
            We collaborated on several complex features—often under pressure—and I was always impressed by Adam’s calm, methodical approach. He was never afraid to dig into edge cases, challenge assumptions with kindness, or come up with clever backend solutions that made our designs more powerful and scalable.          </Typography>
          <Typography variant="body1" fontStyle="italic" gutterBottom>
            Beyond his technical talent, Adam is incredibly thoughtful in how he communicates. He listens closely, gives constructive feedback, and always aims for solutions that are both robust and user-friendly. As a designer, that kind of collaboration is gold.          </Typography>
          <Typography variant="body1" fontStyle="italic" gutterBottom>
Any team would be lucky to have Adam. He raises the bar not just for the codebase, but for how teams work together."
</Typography>
          <Typography variant="subtitle1" fontWeight="medium">
            - Ulyana Kausharova, Ex–Product Designer at Queen's Lane Consultants
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Worked with Adam but on different teams
          </Typography>
          <Divider sx={{ mt: 2 }} />
        </Box>

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
