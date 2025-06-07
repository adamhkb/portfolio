'use client';

import { Box, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';

const techGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'HTML', icon: '/icons/html5-original-wordmark.svg' },
      { name: 'CSS', icon: '/icons/css3-original-wordmark.svg' },
      { name: 'JS', icon: '/icons/icons8-javascript.svg' },
      { name: 'TS', icon: '/icons/typescript-original.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
      { name: 'Express.js', icon: '/icons/express-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Django', icon: '/icons/icons8-django-500.svg' },
      { name: 'Flask', icon: '/icons/icons8-flask.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
      { name: 'MySQL', icon: '/icons/icons8-mysql-logo.svg' },
      { name: 'PostGreSQL', icon: '/icons/icons8-postgresql.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb-original-wordmark.svg' },
      { name: 'Redis', icon: '/icons/icons8-redis.svg' },
    ],
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'TensorFlow', icon: '/icons/tensorflow-original.svg' },
      { name: 'Keras', icon: '/icons/keras-original.svg' },
      { name: 'PyTorch', icon: '/icons/pytorch-original.svg' },
      { name: 'Scikit-learn', icon: '/icons/scikitlearn-original.svg' },
    ],
  },
  {
    title: 'Infrastructure & Tools',
    skills: [
      { name: 'AWS', icon: '/icons/icons8-aws.svg' },
      { name: 'Google Cloud Platform', icon: '/icons/googlecloud-original.svg' },
      { name: 'Docker', icon: '/icons/icons8-docker.svg' },
      { name: 'Heroku', icon: '/icons/icons8-heroku.svg' }
    ],
  },
];

export default function TechStackSection() {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Technical Skills
      </Typography>

      {techGroups.map((group, i) => (
        <Box key={i} sx={{ mb: 3 }}>
          <Typography variant="h6" fontWeight="medium" mb={2}>
            {group.title}
          </Typography>
          <Grid container spacing={2} justifyContent="flex-start">
            {group.skills.map((tech, j) => (
              <Grid key={j}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    // bgcolor: '',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                    height: 100,
                  }}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={85}
                    height={85}
                    style={{ objectFit: 'contain' }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
