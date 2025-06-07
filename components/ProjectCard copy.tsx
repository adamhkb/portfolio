'use client';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  CardActions,
  Button,
} from '@mui/material';

export default function ProjectCard({ project, onClick }: any) {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: 2,
        boxShadow: 2,
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.02)' },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={project.cardImage}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.shortDescription}
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {project.tech.map((tech: string, i: number) => (
            <Chip key={i} label={tech} size="small" color="primary" />
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, mt: 'auto' }}>
        {project.live && (
          <Button size="small" href={project.live} target="_blank">
            Live Demo
          </Button>
        )}
        {project.github && (
          <Button size="small" href={project.github} target="_blank">
            GitHub
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
