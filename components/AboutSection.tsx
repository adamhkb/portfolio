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
          {"I'm Adam \u2014 a full-stack software engineer based in London with a background in electronic engineering and a deep interest in machine learning, AI agents, and sports analytics."}
        </Typography>

        <Typography paragraph>
          {"I graduated from King\u2019s College London with a BEng in Electronic Engineering with Management, where I first got into machine learning through my dissertation on real-time eye contact detection using convolutional neural networks. That project set the direction for everything I\u2019ve built since."}
        </Typography>

        <Typography paragraph>
          {"Professionally, I\u2019ve spent the last four years leading engineering at Queen\u2019s Lane Consultants, where I build the internal platforms that power the company\u2019s R&D tax relief process. The work spans the full stack \u2014 React frontends, Node.js and Python backends, PostgreSQL databases, Redis queues, and AWS infrastructure \u2014 with a focus on automating complex financial workflows that used to be done manually."}
        </Typography>

        <Typography paragraph>
          {"On the side, I\u2019m drawn to projects where data meets sport. I built GoalGPT, an autonomous AI agent that competes in the Stair AI World Cup Agent Arena \u2014 a live competition where agents predict FIFA World Cup 2026 match outcomes and place real bets on Polymarket. It combines a machine learning model trained on over 49,000 international football matches with LLM reasoning to make predictions and execute trades automatically. It\u2019s the kind of project that brings together everything I enjoy: engineering, data, and football."}
        </Typography>

        <Typography paragraph>
          {"I\u2019ve also built dashboards analysing six seasons of VAR decisions in the Premier League, a geolocation app that finds sunny restaurants using real-time shade detection, and various tools exploring football data \u2014 from FIFA player stats to World Cup tournament simulation."}
        </Typography>

        <Typography paragraph>
          {"When I\u2019m not coding, I\u2019m usually watching football or boxing, playing padel or five-a-side, or keeping up with the latest matchdays and fight nights. I support Manchester United."}
        </Typography>
      </Box>
    </Box>
  );
}
