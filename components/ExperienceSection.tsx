'use client';

import { Box, Typography, Grid, Divider } from '@mui/material';

const experiences = [
  {
    company: 'Queen’s Lane Consultants',
    title: 'Lead Software Engineer',
    location: 'London, United Kingdom',
    date: 'March 2022 – Present',
    logo: '/images/QLCLogo.webp',
    description: `At QLC, I lead full-stack development for internal tools and client-facing portals that automate the R&D tax credit claim process. My role spans system design, backend engineering, and cross-functional collaboration with product and ops teams.`,
    bulletpoints: `- Led development of client/admin portals using the MERN stack and Prisma ORM, with a strong focus on performance and usability.
- Engineered a RESTful API with Node.js (Express.js, Fastify) and Python to automate R&D tax claims, including XML integration with HMRC and OCR-based CT600 form extraction.
- Migrated database infrastructure from MongoDB to PostgreSQL, improving query efficiency and enabling relational data integrity via Prisma.
- Implemented Redis-based task queuing to handle async XML submission, status tracking, and retry logic across environments.
- Built automated document/form generators, integrating web scraping, templating engines (EJS), and data pipelines to reduce manual entry by ~80%.
- Designed a secure file upload system using AWS SQS + S3 + a local file server to automate ingestion, processing, and monitoring of submission files.
- Collaborated with designers and product leads to continuously improve UX, accessibility, and frontend performance using React, TypeScript, and Tailwind CSS.
- Contributed to CI/CD pipelines and deployment workflows using GitHub Actions and Docker, ensuring stable releases and rollback capabilities.
    `,
  },
  {
    company: 'Aye Solutions',
    title: 'Machine Learning Engineer',
    location: 'Kuala Lumpur, Malaysia',
    date: 'January 2021 – August 2021',
    logo: '/images/aye.png',
    description: `At Aye Solutions, I was part of the R&D team focused on applying machine learning to computer vision systems, particularly for access control and facial authentication. I contributed to the development and deployment of liveness detection and feature extraction models, working across both ML and full-stack development.`,
    bulletpoints: `- Built a liveness detection model using TensorFlow and OpenCV to verify real-time presence in Smart Access System deployments.
- Developed data pipelines in Python to ingest, clean, and transform data from SQL databases and public APIs for training and validation.
- Prototyped a full-stack facial recognition pipeline: Flask API deployed via AWS Lambda, and React frontend hosted on AWS S3, enabling real-time photo submission and feature analysis.
- Collaborated with the founder and remote developers to productionise deep learning models and align engineering with user-focused product goals.
- Conducted model benchmarking and performance analysis to evaluate impact and improve user engagement and reliability.
- Contributed to system documentation and user onboarding flows to streamline deployment for enterprise clients.`
  }
];

export default function ExperienceSection() {
  return (
    <Box >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Experience
      </Typography>

      <Box>
        {experiences.map((exp, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Box sx={{ mb: 3}}>
            {/* Company, logo, date row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                {exp.logo && (
                <Box
                    component="img"
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    sx={{
                    width: 170,
                    height: 60,
                    objectFit: 'contain',
                    flexShrink: 0,
                    }}
                />
                )}
                <Box>
                <Typography variant="h6" fontWeight="bold">
                    {exp.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic">
                    {exp.location}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic">
                    {exp.date}
                </Typography>
                </Box>
            </Box>

            {/* Job title */}
            <Typography variant="h6" fontWeight="bold" >
                {exp.title}
            </Typography>

            {/* Description */}
            <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.7 }}>
                {exp.description}
            </Typography>

            {/* Bullet Points */}
              {exp.bulletpoints && (
                <Box component="ul" sx={{ mt: 2, pl: 3, lineHeight: 1.7 }}>
                  {exp.bulletpoints.trim().split('\n').map((line, i) => (
                    line.startsWith('-') ? (
                      <li key={i}>
                        <Typography variant="body1" component="span">
                          {line.replace('- ', '')}
                        </Typography>
                      </li>
                    ) : (
                      <Typography key={i} variant="body1" sx={{ mb: 1 }}>
                        {line}
                      </Typography>
                    )
                  ))}
                </Box>
              )}
            </Box>


            {index < experiences.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
