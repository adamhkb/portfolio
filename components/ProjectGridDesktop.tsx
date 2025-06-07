'use client';

import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

export default function ProjectGridDesktop({
  projects,
  onProjectClick,
}: {
  projects: any[];
  onProjectClick: (project: any) => void;
}) {
  return (
    <Grid
      container
      spacing={4}
      alignItems="stretch"
      sx={{ display: { xs: 'none', md: 'flex' } }}
    >
      {projects.map((project) => (
<Grid key={project.id}>
          <ProjectCard
            project={project}
            onClick={() => onProjectClick(project)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
