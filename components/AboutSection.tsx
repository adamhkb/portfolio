'use client';

import { Box, Typography } from '@mui/material';

export default function AboutSection() {
  return (
    <Box component="section">
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        About Me
      </Typography>

      <Box sx={{ typography: 'body1', color: 'text.primary', lineHeight: 1.8 }}>
        <Typography paragraph>
          I’m Adam Kamarul Bahrin, a full-stack engineer based in London & Kuala Lumpur. I build software that automates workflows, improves user experience, and unlocks real-world value using machine learning and computer vision technologies.
        </Typography>

        <Typography paragraph>
          I hold a BEng in Electronic Engineering with Management from King’s College London (2016–2019), where I studied both hardware and software aspects of engineering, as well as core business management principles. My passion for machine learning and software engineering grew during my dissertation project on Eye Contact Detection using CNNs, which involved Python, TensorFlow, Keras, OpenCV, and various data visualization tools.
        </Typography>

        <Typography paragraph>
          I’ve worked across startups and consulting firms, bridging backend architecture with frontend polish — primarily using Node.js, React, Python, PostgreSQL, and AWS. I enjoy solving hard problems and building internal tools that simplify work for others.
        </Typography>

        <Typography paragraph>
          At my current company, I've developed tools that help clients easily and securely claim R&D tax relief. These tools combine technical depth with user-friendly design, allowing non-technical users to benefit from powerful automation.
        </Typography>

        <Typography paragraph>
          Outside of work, I’m a huge sports fan — especially football and boxing. I support Manchester United, play padel and 5-a-side football regularly, and enjoy following the latest fights and matchdays. I also like to game casually and build side projects like a World Cup match predictor and a Pokémon-themed frontend to stay sharp and have fun while learning.
        </Typography>
      </Box>
    </Box>
  );
}
