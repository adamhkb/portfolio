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
  Box
} from '@mui/material';

export default function ProjectCard({
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
        cursor: 'pointer',
        width: 555,
        height: 530,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderRadius: 2,
        boxShadow: 2,
        transition: '0.2s',
        '&:hover': {
          boxShadow: 5,
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={project.cardImage}
        alt={project.title}
        sx={{
          height: 300,
          objectFit: 'cover',
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
          gap: 0,
        }}
      >
        {/* Title & Description */}
        <Typography variant="h6" gutterBottom noWrap>
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '3em',
          }}
        >
          {project.shortDescription}
        </Typography>

        {/* Tech Stack */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          sx={{ mt: 1, mb: 'auto' }} // push buttons to bottom
        >
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

        

        {/* Action Buttons */}
        <CardActions sx={{  p: 0 }}>
          {project.github && (
            <Button
              size="small"
              href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </Button>
          )}
          {project.live && (
            <Button
              size="small"
              href={project.live}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
