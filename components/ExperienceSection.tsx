'use client';

import { Box, Typography, Grid, Divider } from '@mui/material';

const experiences = [
  {
    company: 'Queen’s Lane Consultants',
    title: 'Lead Software Engineer',
    location: 'London, United Kingdom',
    date: 'March 2022 – Present',
    logo: '/images/QLCLogo.webp',
    description: `At QLC, I designed, built, and launched TaxEngine \u2014 a multi-tenant B2B SaaS platform that automates R&D tax credit claim processing and HMRC submission for professional advisory firms. What started as internal tooling evolved into a standalone product used by 50+ chartered accountants to process 3,000+ claims on behalf of 1,500+ companies.`,
    bulletpoints: `- Architected and built TaxEngine across three codebases: a Next.js SaaS platform, a Node.js/Express calculation microservice, and a marketing site.
- Built the full CT600 claim lifecycle: PDF upload \u2192 OCR (AWS Textract) \u2192 tax calculation \u2192 document generation (pdf-lib, iXBRL) \u2192 e-signature (DocuSign/PandaDoc) \u2192 live HMRC Government Gateway submission.
- Designed multi-tenant data isolation with Supabase Auth, Prisma ORM, and PostgreSQL \u2014 each firm gets its own users, roles, clients, HMRC credentials, and audit trails.
- Engineered the CT600 calculation engine handling R&D relief (SME/RDEC), marginal relief, loss carry-forward, and HMRC business validation rules.
- Built automated document generators producing CT600 PDFs, iXBRL/XHTML tax computations, and amendment summaries using pdf-lib and Handlebars templates.
- Integrated with HMRC\u2019s XML Transaction Engine for live CT600 submission with polling, Companies House API for company lookup, and DocuSign/PandaDoc for e-signatures.
- Designed a Numbers Ingest API allowing partner systems to push R&D expenditure data directly into the platform.
- Migrated the original database infrastructure from MongoDB to PostgreSQL, improving query efficiency and enabling relational data integrity via Prisma.
- Built CI/CD pipelines with GitHub Actions, Vitest testing (60% coverage threshold), and a fixture harness for regression-testing tax calculations.
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
