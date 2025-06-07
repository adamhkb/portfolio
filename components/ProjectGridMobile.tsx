'use client';

import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
import ProjectCardMobile from './ProjectCardMobile';

export default function ProjectGridMobile({
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
      sx={{ display: { xs: 'flex', md: 'none' } }}
    >
      {projects.map((project) => (
        <Grid item xs={12} key={project.id}>
            <ProjectCardMobile project={project} onClick={() => onProjectClick(project)} />

        </Grid>
      ))}
    </Grid>
  );
}
