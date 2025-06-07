'use client';

import { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Stack,
  Box,
} from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Grid from '@mui/material/Grid';
import {projects, techFilters} from '../data/projects'; // adjust path if needed
import ProjectGridDesktop from '../components/ProjectGridDesktop';
import ProjectGridMobile from '../components/ProjectGridMobile';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tech.includes(activeFilter));

  return (
    <Container maxWidth="lg" sx={{ py: 1 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Projects
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        mb={4}
        flexWrap="wrap"
        useFlexGap
        sx={{
          gap: 1.5,
          rowGap: 2,
          justifyContent: 'flex-start',
        }}
      >
        {techFilters.map((filter) => (
          <Button
            key={filter}
            variant={filter === activeFilter ? 'contained' : 'outlined'}
            onClick={() => setActiveFilter(filter)}
            size="small"
            sx={{
              borderRadius: 3,
              textTransform: 'none',
              fontWeight: filter === activeFilter ? 'bold' : 'normal',
              px: 2,
              py: 0.5,
              minWidth: 80,
            }}
          >
            {filter}
          </Button>
        ))}
      </Stack>

      <ProjectGridDesktop
        projects={filteredProjects}
        onProjectClick={setSelectedProject}
      />

      <ProjectGridMobile
        projects={filteredProjects}
        onProjectClick={setSelectedProject}
      />

      <ProjectModal
        open={!!selectedProject}
        handleClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </Container>
  );
}