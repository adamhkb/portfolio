# My Portfolio – Built with Next.js & Tailwind CSS

This is my personal developer portfolio built using **Next.js 14**, **Tailwind CSS**, and **TypeScript**. It showcases my skills, tech stack, and the projects I’ve worked on – all filterable by the technologies used. Project details open in a modal for a clean user experience.

---

## 🚀 Features

- ⚡ Built with **Next.js App Router**
- 🎨 Styled with **Tailwind CSS**
- 💻 Filter projects by tech stack (Vue, React, Node.js, etc.)
- 🔍 Modal popup with GitHub + live site links
- 🔧 Fully responsive layout
- 🌓 Ready for future dark mode support

---

## 🛠 Tech Stack

- **Next.js 14**
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**

---

## 📂 Project Structure

```
my-next-portfolio/
├── app/
│   ├── layout.tsx          # Global layout wrapper
│   ├── page.tsx            # Home page
│   ├── about/              # About page (empty for now)
│   ├── projects/           # Projects page (optional)
│   └── contact/            # Contact page (optional)
│
├── components/
│   ├── ProjectCard.tsx     # Card view for each project
│   └── ProjectModal.tsx    # Modal popup with project info
│
├── public/images/          # Project images go here
├── styles/globals.css      # Tailwind global styles
├── package.json            # NPM config and scripts
├── tailwind.config.ts      # Tailwind settings
└── tsconfig.json           # TypeScript config
```

---

## 📸 Screenshots

| Projects Grid | Project Modal |
|---------------|---------------|
| ![Grid](./public/images/sample-grid.jpg) | ![Modal](./public/images/sample-modal.jpg) |

_(Add your own screenshots in the `/public/images/` folder)_

---

## 🧪 Getting Started

### 1. Clone the project or unzip the folder:

```bash
cd my-next-portfolio
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📦 Deployment

Deploy on [Vercel](https://vercel.com/) for best results:

1. Push this to GitHub
2. Connect GitHub repo to Vercel
3. Deploy
