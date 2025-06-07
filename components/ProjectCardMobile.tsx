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
} from '@mui/material';

export default function ProjectCardMobile({
  project,
  onClick,
}: {
  project: any;
  onClick: () => void;
}) {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: '100%',
        borderRadius: 2,
        boxShadow: 1,
        display: 'flex',
        flexDirection: 'column',
        transition: '0.2s',
        '&:hover': {
          boxShadow: 3,
        },
      }}
    >
      <CardMedia
        component="img"
        image={project.cardImage}
        alt={project.title}
        sx={{ height: 180, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      />

      <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.shortDescription}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1}>
          {project.tech.map((tech: string, i: number) => (
            <Chip
              key={i}
              label={tech}
              size="small"
              color="primary"
              sx={{ borderRadius: 999, fontWeight: 500 }}
            />
          ))}
        </Stack>

        <CardActions sx={{ p: 0, mt: 1 }}>
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
