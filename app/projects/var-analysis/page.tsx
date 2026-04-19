'use client';

import { Box, Typography, Container, Button, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function VARAnalysisPage() {
  const streamlitUrl = process.env.NEXT_PUBLIC_EPL_VAR_STREAMLIT_URL;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
        Premier League VAR Analysis Dashboard
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
        {['Python', 'Streamlit', 'Plotly', 'Selenium', 'Pandas', 'Scipy'].map((tech) => (
          <Chip key={tech} label={tech} size="small" />
        ))}
      </Stack>

      <Typography variant="body1" paragraph>
        An end-to-end data pipeline and interactive dashboard analyzing VAR (Video Assistant Referee)
        decisions in the English Premier League across six seasons (2019/20–2024/25).
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
        Project Highlights
      </Typography>

      <Typography variant="body1" component="div">
        <ul>
          <li><strong>Data pipeline:</strong> Selenium scraper for dynamic ESPN content with parallelized collection</li>
          <li><strong>Statistical analysis:</strong> Welch&apos;s t-test for potential Big 6 bias, Pearson/Spearman correlations</li>
          <li><strong>Interactive dashboard:</strong> Streamlit + Plotly app with filters, heatmaps, and team deep-dives</li>
          <li><strong>Multi-season coverage:</strong> Six Premier League seasons from 2019/20 to 2024/25</li>
        </ul>
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
        Research Questions
      </Typography>

      <Typography variant="body1" component="div">
        <ul>
          <li>Do &quot;Big 6&quot; clubs receive favorable VAR treatment?</li>
          <li>Which teams benefit or suffer most from VAR decisions?</li>
          <li>How does VAR impact correlate with league performance?</li>
        </ul>
      </Typography>

      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GitHubIcon />}
          href="https://github.com/adamhkb/epl-var-analysis"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
        {streamlitUrl ? (
          <Button
            variant="outlined"
            color="primary"
            startIcon={<OpenInNewIcon />}
            href={streamlitUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        ) : null}
      </Box>

      <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 5 }}>
        Technical Architecture
      </Typography>

      <Box
        component="pre"
        sx={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          p: 3,
          borderRadius: 2,
          overflow: 'auto',
          fontSize: '0.85rem',
        }}
      >
{`┌─────────────────────────────────────────────────────────────┐
│                      DATA PIPELINE                          │
├─────────────────────────────────────────────────────────────┤
│   ESPN Website → Selenium Scraper → Pandas DataFrame → CSV  │
├─────────────────────────────────────────────────────────────┤
│                        ANALYSIS                             │
│   Scipy Stats ←→ Pandas Analysis → Plotly Charts            │
├─────────────────────────────────────────────────────────────┤
│                        WEB APP                              │
│                    Streamlit Dashboard                      │
└─────────────────────────────────────────────────────────────┘`}
      </Box>

      <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mt: 5 }}>
        Dashboard Preview
      </Typography>

      <Box
        component="img"
        src="/project-images/var-analysis.png"
        alt="VAR Analysis Dashboard"
        sx={{
          width: '100%',
          borderRadius: 2,
          border: '1px solid #ccc',
          mt: 2,
        }}
      />
    </Container>
  );
}
