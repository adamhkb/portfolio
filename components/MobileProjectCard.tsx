'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  CardActions,
  Button,
  Stack,
  Box,
} from '@mui/material';

export default function MobileProjectCard({ project, onClick }: { project: any; onClick: () => void }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <CardMedia
        component="img"
        image={project.cardImage}
        alt={project.title}
        sx={{ height: 200, objectFit: 'cover' }}
      />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {project.shortDescription}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {project.tech.map((tech: string, i: number) => (
            <Chip key={i} label={tech} size="small" color="primary" />
          ))}
        </Stack>

        <CardActions sx={{ px: 0 }}>
          {project.github && (
            <Button size="small" href={project.github} target="_blank" onClick={(e) => e.stopPropagation()}>
              GitHub
            </Button>
          )}
          {project.live && (
            <Button size="small" href={project.live} target="_blank" onClick={(e) => e.stopPropagation()}>
              Live Demo
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
