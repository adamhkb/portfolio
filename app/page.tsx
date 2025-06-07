'use client';

import { Container, Box } from '@mui/material';
import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStackSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';

export default function MainProfilePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <EducationSection />
        <TestimonialsSection />
      </Box>
    </Container>
  );
}
