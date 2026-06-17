export const projects = [
  {
    id: 14,
    title: 'TaxEngine — R&D Tax Automation SaaS',
    tech: ['Next', 'TypeScript', 'Node', 'Express', 'PostgreSQL', 'AWS', 'Supabase', 'Prisma'],
    cardImage: '/project-images/taxengine.png',
    modalImage: '/project-images/taxengine.png',
    github: '',
    live: 'https://platform.taxengine.io',
    shortDescription:
      'A vertical B2B SaaS platform that automates R&D tax credit claim processing, CT600 generation, and HMRC submission for UK professional advisers.',
    longDescription: `TaxEngine is a multi-tenant B2B SaaS platform I built for UK R&D tax credit advisory firms. It automates the end-to-end workflow of processing corporation tax (CT600) claims — from document upload through to live HMRC Government Gateway submission — replacing what previously took 3+ hours of manual accounting work per claim with a process that completes in under 30 seconds.

The system is split across three codebases that I designed and developed:

1. Platform (Next.js 16 / React 19 / TypeScript) — The core SaaS application where firm users manage client companies, upload CT600 PDFs and R&D expenditure spreadsheets, configure claim adjustments, review calculated outputs, send documents for e-signature, and submit to HMRC. It features role-based access control (Administrator, Claim Processor), multi-tenant firm isolation, a super-admin analytics dashboard, and integrations with DocuSign, PandaDoc, and Companies House.

2. CT600 API (Node.js / Express) — A standalone microservice handling the computational heavy lifting: OCR-reading CT600 PDFs via AWS Textract, running the tax calculation engine (R&D SME/RDEC, marginal relief, loss carry-forward, HMRC business validation rules), generating filled CT600 PDF forms using pdf-lib, and producing iXBRL/XHTML Amendment Summaries and Tax Computations via Handlebars templates.

3. Marketing Site (Next.js 15) — The product website at taxengine.io with lead capture forms backed by Prisma and Resend.

Key technical highlights include: Supabase for authentication (email/password + OAuth) and file storage, Prisma ORM with PostgreSQL for structured multi-tenant data, AWS S3 and Textract for document storage and OCR, HMRC XML Transaction Engine integration for live CT600 submission with polling, Excel parsing (xlsx + HyperFormula) for R&D expenditure ingestion, Zod schema validation throughout, and a Numbers Ingest API for partner system integration.

The platform has been used to process 3,000+ R&D tax claims on behalf of 1,500+ companies, recovering millions of pounds for clients. It is currently in use by 50+ senior chartered accountants across multiple advisory firms.`,
  },
  {
    id: 1,
    title: "Queen's Lane Consultant Portal",
    tech: ['Node', 'PostgreSQL', 'Express', 'Python', 'AWS', 'MongoDB', 'Redis', 'React'],
    cardImage: '/project-images/qlc.png',
    github: '',
    live: 'https://app.queenslc.co.uk',
    shortDescription: 'Admin and client portal for Queen\'s Lane Consultants, used to manage R&D tax claims and automate CT600 workflows.',
    longDescription: `I designed and developed a full-featured admin and client portal for Queen's Lane Consultants using the MERN stack. The portal supports the end-to-end management of R&D tax claims, including document generation, form submission, and CT600 handling.

I led the integration of APIs such as Xero, QuickBooks, DocuSign, and WhatsApp, enabling seamless syncing of accounting data, automated client communication, and digital signing of Letters of Engagement.

For the admin side, I built a CT600 reader and tax automation tool using Node.js and Python, integrating HMRC's XML API and OCR to extract and calculate tax data. I also implemented a Redis-based queue system for XML submissions and AWS SQS for handling file uploads and task automation. This significantly reduced manual work and improved claim processing efficiency across the company.`,
  },
  {
    id: 2,
    title: "WITS – Where Is The Sun?",
    tech: ['Next', 'TypeScript', 'Node', 'Go', 'Redis', 'PostgreSQL', 'Mapbox', 'Google APIs', 'Puppeteer'],
    cardImage: '/project-images/wits_side_by_side.png',
    modalImage: '/project-images/wits_2x2_showcase.png',
    github: '',
    live: 'https://wits-app-production.up.railway.app/',
    shortDescription: 'A geolocation-based app that helps users find sunny restaurants, cafes, and bars in real time, built with a multi-service architecture using Go, Node.js, and Next.js.',
    longDescription: `WITS (Where Is The Sun) is a full-stack application that enables users to locate bars, cafes, and restaurants currently in sunlight, leveraging real-time geolocation, Google Places data, and solar exposure analysis.

I built the frontend using Next.js and ShadCN, implementing a responsive map experience with Mapbox GL. The core logic fetches the user's coordinates and sends them to a Go-based Gin server (WITS Server), which acts as the central processing unit of the app.

The backend fetches nearby places, generates filtered radial points using a second Go server (WITS Travel Server), and determines sunlight exposure by calling a Node.js + Puppeteer service (WITS Shade API) that loads Mapbox and ShadeMap in a headless browser.

Each layer of the system uses Redis for caching and Postgres for feedback storage. I was responsible for building the entire frontend, designing the radial point filtering algorithm in Go, and implementing the Puppeteer-based shade detection service. The app integrates with OpenStreetMap, Google Roads, Places API, and ShadeMap to make real-time solar decisions and display them on the map.`,
  },
//   {
//     id: 12,
//     title: 'GoalGPT — Stair AI World Cup Agent Arena',
//     tech: ['Python', 'AWS', 'Scikit-learn', 'Pandas', 'Claude AI'],
//     cardImage: '/project-images/goalgpt-arena.png',
//     modalImage: '/project-images/goalgpt-arena.png',
//     github: 'https://github.com/adamhkb/goalgpt_arena',
//     live: '',
//     shortDescription:
//       'An autonomous prediction-market agent for the Polymarket AI Agent Competition, combining ML and LLM reasoning to bet on FIFA World Cup 2026 matches.',
//     longDescription: `GoalGPT is an autonomous AI agent built for the Stair AI World Cup Agent Arena — a live competition where agents predict FIFA World Cup 2026 match outcomes and place real bets on Polymarket.

// The agent runs a multi-step pipeline: it fetches pre-match data from Sportmonks (odds, xG, model predictions), live market prices from Polymarket, and historical tournament priors from Supabase. Each data source is "digested" by Claude into structured JSON signals using a fetch-then-digest pattern.

// A RandomForest ML model trained on 49,000+ international matches (with 35 engineered features including Elo ratings, FIFA rankings, and rolling form) provides a quantitative baseline. The LLM then refines these probabilities with qualitative context before making a final prediction — independent of market prices to avoid anchoring bias.

// The agent compares its prediction to the live Polymarket odds, calculates edge, and places BUY YES orders through the Arena API when it identifies value. Every step is recorded in a tamper-evident reasoning ledger (schema v0.3) submitted to the Arena for scoring.

// Key technical highlights: LLM fallback chain (Anthropic Bedrock \u2192 direct Anthropic \u2192 OpenAI), leakage-aware chronological ML training (post-2022 World Cup only), auto-refreshing FIFA rankings from the official FIFA API, SSL-hardened API client, and a configurable CLI with dry-run mode and bet size caps.`,
//   },
  {
    id: 0,
    title: 'VAR in the Premier League Dashboard',
    tech: ['Python', 'Streamlit', 'Plotly', 'Selenium', 'Pandas', 'Scipy'],
    cardImage: '/project-images/var-in-pl-dashboard.png',
    modalImage: '/project-images/var-in-pl-dashboard.png',
    github: 'https://github.com/adamhkb/var-in-pl/',
    live: 'https://var-in-pl.streamlit.app/',
    shortDescription:
      'An end-to-end data pipeline and Streamlit dashboard analyzing Premier League VAR decisions across six seasons (2019/20\u20132024/25).',
    longDescription: `This project is a full pipeline that scrapes, analyzes, and visualizes VAR (Video Assistant Referee) decisions in the English Premier League from 2019/20 to 2024/25.

The ingestion layer uses Selenium to extract dynamic ESPN pages, including team name normalization and parallelized collection via ThreadPoolExecutor to improve throughput and reliability.

The analysis layer includes hypothesis testing (Welch's t-test) to evaluate potential "Big 6" bias, correlations between VAR impact and performance, and season-over-season trend analysis.

The frontend is built with Streamlit + Plotly and supports interactive filtering, team deep-dives, heatmaps, and on-demand statistical results across four pages: Overview, Team Analysis, Trends, and Statistical Tests.

Key skills demonstrated: web scraping (Selenium + BeautifulSoup), ETL pipelines, statistical analysis (scipy), data visualization (Plotly), and full-stack deployment to Streamlit Cloud.`,
  },
  {
    id: 5,
    title: 'World Cup Outcome Predictor',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
    cardImage: '/project-images/world-cup-outcome-predictor.png',
    modalImage: '/project-images/world-cup-outcome-predictor.png',
    github: 'https://github.com/adamhkb/fifa-world-cup-outcome-predictor',
    live: 'https://fifa-world-cup-outcome-predictor.streamlit.app/',
    shortDescription:
      'A Streamlit app that predicts match outcomes and simulates World Cup tournament paths using probabilistic ML and Monte Carlo simulation.',
    longDescription: `World Cup Outcome Predictor is a production-style Streamlit app for forecasting international football outcomes and simulating full tournament paths from group stage to final.

It supports single-match predictions (Home/Draw/Away) with calibrated probability outputs, and a tournament simulator that runs repeated Monte Carlo simulations to estimate title/final/semi probabilities and generate example bracket paths.

Under the hood, the model is trained in a leakage-aware, chronological setup and uses team form features plus external strength signals (e.g. FIFA rankings merged using the latest ranking available on or before match date). The result is a transparent, demo-ready analytics tool focused on scenario exploration rather than deterministic picks.`,
  },
  {
    id: 13,
    title: '2048clone — C++ Terminal Game',
    tech: ['C++', 'CMake'],
    cardImage: '/project-images/2048clone.png',
    modalImage: '/project-images/2048clone.png',
    github: 'https://github.com/adamhkb/2048clone',
    live: '',
    shortDescription:
      'A C++ terminal clone of 2048 with real-time WASD/arrow controls, ANSI rendering, and a minimal test binary.',
    longDescription: `2048clone is a from-scratch C++ implementation of the classic 2048 puzzle, built as a terminal application with a focus on clean game logic and UX.

It supports real-time key input (WASD + arrow keys), a clear ANSI-rendered UI showing score and moves, and core 2048 mechanics (single-merge-per-move, score accumulation, and win/loss detection).

The codebase is structured into small modules (game rules, input handling, and rendering) and includes a lightweight self-contained test runner to validate merge/move edge cases.`,
  },
  {
    id: 10,
    title: 'Smart Access System',
    tech: ['Python', 'MySQL', 'Raspberry Pi', 'OpenCV', 'AWS'],
    cardImage: '/project-images/smartaccess.png',
    github: '',
    live: '',
    shortDescription: 'A facial recognition-based smart access and attendance system with liveness detection, deployed on Raspberry Pi with cloud integration.',
    longDescription: `Smart Access is an advanced facial recognition attendance and door access system with liveness detection, built using Python, OpenCV, and MySQL, and deployed on a Raspberry Pi with hardware components like relay modules and solenoid locks. The system enhances security by ensuring real-time face matching is only accepted when a live person is present.

The project integrates with AWS and Huawei Cloud for database hosting (RDS), image storage (S3/OBS), and compute (ECS). A web interface was built using PHP and Flask, while OCR and identity verification are handled with Tesseract and PassportEye.

The system also supports cloud-synced dashboards to manage logs, users, and facial data, using PHP/MySQL and includes additional computer vision features like age and gender detection, emotion analysis, and pose estimation. Streamlit is also used in various submodules for interactive visual interfaces.`,
  },
  {
    id: 6,
    title: 'Handwritten Digit Recognition',
    tech: ['Python', 'TensorFlow', 'Streamlit', 'OpenCV'],
    cardImage: '/project-images/hr.png',
    modalImage: '/project-images/hdr.png',
    github: 'https://github.com/adamhkb/handwritten_digit_recognition',
    live: '',
    shortDescription: 'A deep learning digit recognizer trained on MNIST with a Streamlit UI for drawing and predicting numbers.',
    longDescription: `This project uses a convolutional neural network (CNN) built with TensorFlow/Keras to recognize handwritten digits from the MNIST dataset. It classifies digits from 0 to 9 and achieves high accuracy by learning patterns in pixel-based input.

What makes this project interactive is its use of Streamlit, which allows users to draw digits in a browser-based interface and see live predictions from the trained model. The app processes the user's drawing, resizes and normalizes it, and feeds it into the model for real-time classification.

This project demonstrates both the power of deep learning and how to deploy it through an intuitive, interactive frontend — perfect for learning how to bridge ML with user-friendly tools.`,
  },
  {
    id: 11,
    title: 'Eye Contact Detection using CNN',
    tech: ['Python', 'TensorFlow', 'Keras'],
    cardImage: '/project-images/eyefig.png',
    github: '',
    live: '',
    shortDescription: 'A deep learning project that detects whether a person is making eye contact with the camera using CNNs in TensorFlow/Keras.',
    longDescription: `This was my final year dissertation at King's College London, where I developed a Convolutional Neural Network (CNN) model using Python, TensorFlow, and Keras to detect eye contact in images. The model outputs a binary classification indicating whether the subject is making eye contact with the camera.

The system was trained on annotated facial image datasets with eye contact labels, and involved preprocessing techniques such as face detection, eye alignment, and normalization. The project aimed to contribute to real-time human-computer interaction systems, with potential applications in accessibility tools, user engagement analysis, and behavioral studies.

Throughout the project, I explored deep learning architectures, fine-tuned hyperparameters, evaluated model performance using precision and recall metrics, and documented my findings in a comprehensive research paper.`,
  },
  {
    id: 3,
    title: "Personal Portfolio",
    tech: ['Next', 'TypeScript', 'Material UI', 'Framer Motion', 'Vercel'],
    cardImage: '/project-images/portfolio.png',
    modalImage: '/project-images/portfolio.png',
    github: 'https://github.com/adamhkb/portfolio',
    live: 'https://ahkb.dev',
    shortDescription: "My personal portfolio built with Next.js, TypeScript, and Material UI, showcasing projects and experience as a full-stack developer.",
    longDescription: `This is my personal developer portfolio — a custom-built site using Next.js, TypeScript, and Material UI to showcase my software projects, tech stack, and engineering experience.

The layout is built with Material UI's responsive grid system, and animations are handled using Framer Motion to provide smooth transitions across pages and components. Each project card is filterable by tech stack, and clicking into a project opens a modal with a long-form breakdown, images, and external links.

All content is structured using static props and reusable components, making the portfolio scalable and easy to update. The site is fully responsive and optimized for both desktop and mobile viewing, and deployed via Vercel for seamless CI/CD.

This portfolio reflects my frontend skillset while also demonstrating my ability to build clean, scalable UIs from scratch.`,
  },
  {
    id: 9,
    title: 'Sarcasm Detector',
    tech: ['Python', 'TensorFlow', 'Flask', 'Heroku'],
    cardImage: '/project-images/sd.png',
    modalImage: '/project-images/sarcasmdetector.png',
    github: 'https://github.com/adamhkb/sarcasm-detector-flask',
    live: '',
    shortDescription: 'A sarcasm detection web app built with Flask and Python that predicts sarcasm in user-submitted text.',
    longDescription: `This project is a sarcasm classification tool that uses natural language processing and machine learning to determine whether a given text is sarcastic. It's built with Flask on the backend and uses scikit-learn-based NLP techniques such as TF-IDF vectorization and Logistic Regression for model inference.

The frontend is a lightweight HTML/CSS interface where users can enter text and get an instant sarcasm prediction. This project is ideal for showcasing simple text classification workflows and Flask web deployment.`,
  },
  {
    id: 4,
    title: 'Pokedex React',
    tech: ['React', 'TypeScript', 'MUI'],
    cardImage: '/project-images/pokedex.jpeg',
    github: 'https://github.com/adamhkb/pokedex-react',
    live: '',
    shortDescription: 'A simple Pokédex app built with React that displays data for different Pokémon using the PokéAPI.',
    longDescription: `This is a lightweight Pokédex application built using React and the PokéAPI. It allows users to browse and search Pokémon by name or ID and view details such as type, base stats, and sprites.

The app fetches data from the open-source PokéAPI and renders it dynamically using React components. It demonstrates clean component structure, API data handling, state management, and simple responsive styling.

Ideal for beginners learning React, API integration, and building user-friendly data-driven UIs.`,
  },
  {
    id: 7,
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
    id: 8,
    title: 'FIFA 22 Data Visualisation Web App',
    tech: ['Python', 'Streamlit', 'Plotly', 'MLPsoccer'],
    cardImage: '/project-images/fifa22.png',
    github: '',
    live: '',
    shortDescription: 'A Streamlit web app to explore and visualize FIFA 22 player stats with dynamic filters and charts.',
    longDescription: `FIFA 22 Stats Explorer is an interactive data visualization tool built with Python and Streamlit, designed to help users explore player attributes from the FIFA 22 dataset. The app features filtering by club, nationality, position, and age, along with dynamic charts for comparing stats like pace, shooting, passing, and physicality.

It's ideal for football fans, data science learners, or anyone interested in player analytics. Under the hood, it uses Pandas for data wrangling and Plotly/Matplotlib for visualizations — all wrapped in a clean, responsive Streamlit interface.`,
  },
];


export const techFilters = ['All', 'AWS', 'C++', 'CMake', 'Claude AI', 'Express', 'Flask', 'MongoDB', 'MySQL', 'Next', 'Node', 'OpenCV', 'Pandas', 'PostgreSQL', 'Prisma', 'Pygame', 'Python', 'React', 'Redis', 'Scikit-learn', 'Scipy', 'Selenium', 'Streamlit', 'Supabase', 'TensorFlow', 'TypeScript']
