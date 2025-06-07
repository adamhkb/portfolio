'use client';

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const education = [
  {
    logo: '/images/kcl-logo.svg',
    name: "King's College London",
    degree: 'Bachelor of Engineering - BEng, Electronic Engineering with Management',
    location: 'London, United Kingdom',
    dates: 'Sep 2016 - Jun 2019',
    grade: 'Grade: Upper Second Class',
    activities: 'Activities: Football Society, Tech Society, KCL Radio Society',
    dissertation: "Dissertation: 'Eye Contact Detection using Convolutional Neural Networks'",
  },
  {
    name: 'INTO City University London',
    degree: 'Foundation in Engineering and Mathematics',
    location: 'London, United Kingdom',
    dates: 'Aug 2015 - Jun 2016',
    grade: 'Grade: 84% Overall'
  },
  {
    logo: '/images/fettes_logo_1.png',
    name: 'Fettes College',
    location: 'Edinburgh, United Kingdom',
    degree: "A-Levels & GCSE's",
    dates: 'Aug 2010 - Jun 2015',
    grade: 'A Levels in Maths, Physics and Chemistry'
  }
];

export default function EducationSection() {
  return (
    <Box component="section">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Education
      </Typography>

      <Box>
        {education.map((edu, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            {/* Logo, Name, Dates */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              {edu.logo && (
                <Box
                  component="img"
                  src={edu.logo}
                  alt={`${edu.name} logo`}
                  sx={{ width: 100, height: 100, objectFit: 'contain' }}
                />
              )}
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {edu.name}
                </Typography>
                <Typography variant="body2" fontStyle="italic" color="text.secondary">
                  {edu.location}
                </Typography>
                <Typography variant="body2" fontStyle="italic" color="text.secondary">
                  {edu.dates}
                </Typography>
              </Box>
            </Box>

            {/* Degree */}
            <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
              {edu.degree}
            </Typography>

            {/* Additional info */}
            {edu.grade && (
              <Typography variant="body2" gutterBottom>
                {edu.grade}
              </Typography>
            )}
            {edu.activities && (
              <Typography variant="body2" gutterBottom>
                {edu.activities}
              </Typography>
            )}
            {edu.dissertation && (
              <Typography variant="body2" gutterBottom>
                {edu.dissertation}
              </Typography>
            )}  

            {index < education.length - 1 && <Divider sx={{ mt: 4 }}/>}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
