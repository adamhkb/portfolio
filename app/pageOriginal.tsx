'use client';

import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Box,
} from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const projects = [
      {
    id: 0,
    title: "Queen's Lane Consultant Portal",
    tech: ['Node', 'PostgreSQL', 'Express', 'Python', 'AWS', 'MongoDB', 'Redis', 'React'],
    cardImage: '/project-images/qlc.png', // Add your actual image path here
    github: '',
    live: 'https://app.queenslc.co.uk',
    shortDescription: 'Admin and client portal for Queen’s Lane Consultants, used to manage R&D tax claims and automate CT600 workflows.',
longDescription: `I designed and developed a full-featured admin and client portal for Queen’s Lane Consultants using the MERN stack. The portal supports the end-to-end management of R&D tax claims, including document generation, form submission, and CT600 handling.

I led the integration of APIs such as Xero, QuickBooks, DocuSign, and WhatsApp, enabling seamless syncing of accounting data, automated client communication, and digital signing of Letters of Engagement.

For the admin side, I built a CT600 reader and tax automation tool using Node.js and Python, integrating HMRC’s XML API and OCR to extract and calculate tax data. I also implemented a Redis-based queue system for XML submissions and AWS SQS for handling file uploads and task automation. This significantly reduced manual work and improved claim processing efficiency across the company.`,
  },
    {
    id: 1,
    title: 'Pokedex React',
    tech: ['React', 'TypeScript', 'MUI'],
    cardImage: '/project-images/pokedex.jpeg', // Add your actual image path here
    github: 'https://github.com/adamhkb/pokedex-react',
    live: '',
    shortDescription: 'A simple Pokédex app built with React that displays data for different Pokémon using the PokéAPI.',
longDescription: `This is a lightweight Pokédex application built using React and the PokéAPI. It allows users to browse and search Pokémon by name or ID and view details such as type, base stats, and sprites.

The app fetches data from the open-source PokéAPI and renders it dynamically using React components. It demonstrates clean component structure, API data handling, state management, and simple responsive styling.

Ideal for beginners learning React, API integration, and building user-friendly data-driven UIs.`,
  },
    {
  id: 2,
  title: 'World Cup 2022 Predictor',
  tech: ['Python', 'Jupyter', 'Scikit-learn'],
  cardImage: '/project-images/wc-predictor.png',
  github: '',
  live: '/projects/worldcup-predictor',

  shortDescription: 'Machine learning-based predictor for World Cup 2022 outcomes, built with Python and Jupyter Notebook.',
  longDescription: `This project is a machine learning-driven predictor for World Cup 2022 match outcomes, built entirely in a Jupyter Notebook using Python and Scikit-learn. It processes historical match data to simulate tournament progression and predict likely winners at each stage.
  
The predictor uses logistic regression and other ML models to classify match results based on past performance, goals scored, and team strength. Visual elements and interactive brackets help illustrate potential tournament outcomes and model performance. Ideal for football fans and data science enthusiasts interested in sports analytics.`,
},
  {
    id: 3,
    title: 'Handwritten Digit Recognition',
    tech: ['Python', 'TensorFlow', 'Streamlit', 'OpenCV'],
    cardImage: '/project-images/hr.png',
    modalImage: '/project-images/hdr.png',
    github: 'https://github.com/adamhkb/handwritten_digit_recognition',
    live: '',

  shortDescription: 'A deep learning digit recognizer trained on MNIST with a Streamlit UI for drawing and predicting numbers.',
  longDescription: `This project uses a convolutional neural network (CNN) built with TensorFlow/Keras to recognize handwritten digits from the MNIST dataset. It classifies digits from 0 to 9 and achieves high accuracy by learning patterns in pixel-based input.

What makes this project interactive is its use of Streamlit, which allows users to draw digits in a browser-based interface and see live predictions from the trained model. The app processes the user’s drawing, resizes and normalizes it, and feeds it into the model for real-time classification.

This project demonstrates both the power of deep learning and how to deploy it through an intuitive, interactive frontend — perfect for learning how to bridge ML with user-friendly tools.`,
  },
  {
    id: 4,
    title: 'Space Invader Clone',
    tech: ['Python', 'Pygame'],
    cardImage: '/project-images/space_invader.png',
    github: 'https://github.com/adamhkb/space-invaders',
    live: '',
  shortDescription: 'A classic Space Invader-style arcade game built with Python and Pygame.',
  longDescription: `This is a retro-style Space Invader clone developed using Python and the Pygame library. The game features classic arcade mechanics: player-controlled movement, enemy waves, bullet shooting, and collision detection.

The goal is to shoot down incoming alien invaders while avoiding their attacks. It includes sound effects, score tracking, and increasing difficulty with each wave, delivering an old-school gaming experience rebuilt from scratch using Pygame.

Ideal for showcasing 2D game development fundamentals like animation, input handling, sprite control, and game loop design in Python.`,
},
  {
    id: 5,
    title: 'FIFA 22 Data Visualisation Web App',
    tech: ['Python', 'Streamlit', 'Plotly', 'MLPsoccer'],
    cardImage: '/project-images/fifa22.png',
    github: '',
    live: '',
    description: 'Explore FIFA 22 data using Streamlit and Plotly.',
    shortDescription: 'A Streamlit web app to explore and visualize FIFA 22 player stats with dynamic filters and charts.',
  longDescription: `FIFA 22 Stats Explorer is an interactive data visualization tool built with Python and Streamlit, designed to help users explore player attributes from the FIFA 22 dataset. The app features filtering by club, nationality, position, and age, along with dynamic charts for comparing stats like pace, shooting, passing, and physicality.

It’s ideal for football fans, data science learners, or anyone interested in player analytics. Under the hood, it uses Pandas for data wrangling and Plotly/Matplotlib for visualizations — all wrapped in a clean, responsive Streamlit interface.`,
},
  {
    id: 6,
    title: 'Sarcasm Detector',
    tech: ['Python', 'TensorFlow', 'Flask', 'Heroku'],
    cardImage: '/project-images/sd.png',
    modalImage: '/project-images/sarcasmdetector.png',
    github: 'https://github.com/adamhkb/sarcasm-detector-flask',
    live: '',
    description: 'Detects sarcasm in headlines using NLP and neural networks.',  shortDescription: 'A sarcasm detection web app built with Flask and Python that predicts sarcasm in user-submitted text.',
  longDescription: `This project is a sarcasm classification tool that uses natural language processing and machine learning to determine whether a given text is sarcastic. It's built with Flask on the backend and uses scikit-learn-based NLP techniques such as TF-IDF vectorization and Logistic Regression for model inference.

The frontend is a lightweight HTML/CSS interface where users can enter text and get an instant sarcasm prediction. This project is ideal for showcasing simple text classification workflows and Flask web deployment.`,
},
  {
    id: 7,
    title: 'Smart Access System',
    tech: ['Python', 'MySQL', 'Raspberry Pi', 'OpenCV', 'AWS'],
    cardImage: '/project-images/smartaccess.png',
    github: '',
    live: '',
    description: 'A face recognition attendance system with liveness detection.',  shortDescription: 'A facial recognition-based smart access and attendance system with liveness detection, deployed on Raspberry Pi with cloud integration.',
  longDescription: `Smart Access is an advanced facial recognition attendance and door access system with liveness detection, built using Python, OpenCV, and MySQL, and deployed on a Raspberry Pi with hardware components like relay modules and solenoid locks. The system enhances security by ensuring real-time face matching is only accepted when a live person is present.

The project integrates with AWS and Huawei Cloud for database hosting (RDS), image storage (S3/OBS), and compute (ECS). A web interface was built using PHP and Flask, while OCR and identity verification are handled with Tesseract and PassportEye.

The system also supports cloud-synced dashboards to manage logs, users, and facial data, using PHP/MySQL and includes additional computer vision features like age and gender detection, emotion analysis, and pose estimation. Streamlit is also used in various submodules for interactive visual interfaces.`,
},
  {
    id: 8,
    title: 'Eye Contact Detection using CNN',
    tech: ['Python', 'TensorFlow', 'Keras'],
    cardImage: '/project-images/eyefig.png',
    github: '',
    live: '',
    description: 'A CNN model to detect whether someone is making eye contact.',  shortDescription: 'A deep learning project that detects whether a person is making eye contact with the camera using CNNs in TensorFlow/Keras.',
  longDescription: `This is a retro-style Space Invader clone developed using Python and the Pygame library. The game features classic arcade mechanics: player-controlled movement, enemy waves, bullet shooting, and collision detection.

The goal is to shoot down incoming alien invaders while avoiding their attacks. It includes sound effects, score tracking, and increasing difficulty with each wave, delivering an old-school gaming experience rebuilt from scratch using Pygame.

Ideal for showcasing 2D game development fundamentals like animation, input handling, sprite control, and game loop design in Python.`,
},
];

const techFilters = ['All', 'AWS', 'Express', 'Flask', 'MongoDB', 'MySQL', 'Node', 'OpenCV', 'PostgreSQL', 'Pygame', 'Python', 'React', 'Redis', 'Streamlit', 'TensorFlow', 'TypeScript']

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tech.includes(activeFilter));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
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

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {filteredProjects.map((project) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={project.id}
            sx={{ display: 'flex' }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <ProjectModal
        open={!!selectedProject}
        handleClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </Container>
  );
}