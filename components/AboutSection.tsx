'use client';

import { Box, Typography } from '@mui/material';

export default function AboutSection() {
  return (
    <Box component="section">
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        About Me
      </Typography>

      <Box sx={{ typography: 'body1', color: 'text.primary', lineHeight: 1.8 }}>
        <Typography paragraph>
          {"I\u2019m Adam \u2014 a full-stack software engineer based in London. I build products that automate complex workflows, with a background in electronic engineering and a deep interest in machine learning, AI agents, and sports analytics."}
        </Typography>

        <Typography paragraph>
          {"My main project is TaxEngine \u2014 a vertical B2B SaaS platform I designed and built that automates R&D tax credit claim processing for UK advisory firms. It handles the full lifecycle: reading CT600 forms via OCR, calculating amended tax figures, generating HMRC-compliant documents (CT600s, iXBRL tax computations, amendment summaries), orchestrating e-signatures, and submitting claims directly to HMRC via the Government Gateway. It\u2019s been used to process 3,000+ claims on behalf of 1,500+ companies, and is trusted by 50+ senior chartered accountants."}
        </Typography>

        <Typography paragraph>
          {"I built TaxEngine across three codebases: a Next.js SaaS platform with multi-tenant firm isolation, a Node.js/Express calculation microservice backed by AWS Textract and pdf-lib, and a marketing site. The stack includes Supabase, Prisma, PostgreSQL, AWS, and integrations with DocuSign, PandaDoc, and Companies House."}
        </Typography>

        <Typography paragraph>
          {"Outside of work, I\u2019m drawn to projects where data meets sport. I built GoalGPT, an autonomous AI agent that competes in the Stair AI World Cup Agent Arena \u2014 a live competition where agents predict match outcomes and place real bets on Polymarket. It combines a RandomForest model trained on 49,000+ international matches with LLM reasoning to identify value and execute trades automatically."}
        </Typography>

        <Typography paragraph>
          {"I\u2019ve also built dashboards analysing six seasons of VAR decisions in the Premier League, a geolocation app that finds sunny restaurants using real-time shade detection, and various tools exploring football data \u2014 from World Cup simulation to FIFA player analytics."}
        </Typography>

        <Typography paragraph>
          {"I graduated from King\u2019s College London with a BEng in Electronic Engineering with Management, where my dissertation on real-time eye contact detection using CNNs first got me into machine learning. When I\u2019m not coding, I\u2019m usually watching football or boxing, playing padel or five-a-side. I support Manchester United."}
        </Typography>
      </Box>
    </Box>
  );
}
