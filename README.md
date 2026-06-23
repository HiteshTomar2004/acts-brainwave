# Contributing to ACTS Brainwave

First off, thank you for considering contributing! This guide will walk you through everything you need to know to contribute effectively — even if you're new to open-source collaboration on GitHub.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What You Need to Know](#what-you-need-to-know)
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setting Up the Project Locally](#setting-up-the-project-locally)
- [How to Contribute (Step by Step)](#how-to-contribute-step-by-step)
  - [1. Fork the Repository](#1-fork-the-repository)
  - [2. Clone Your Fork](#2-clone-your-fork)
  - [3. Create a Branch](#3-create-a-branch)
  - [4. Make Your Changes](#4-make-your-changes)
  - [5. Commit Your Changes](#5-commit-your-changes)
  - [6. Push to Your Fork](#6-push-to-your-fork)
  - [7. Open a Pull Request](#7-open-a-pull-request)
- [Coding Guidelines](#coding-guidelines)
- [Available Scripts](#available-scripts)
- [Need Help?](#need-help)

---

## Code of Conduct

This project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the repository owner.

---

## What You Need to Know

**If you're new to Git and GitHub, that's totally okay!** Here are the core concepts you'll use:

| Concept | What it means |
|---|---|
| **Repository (repo)** | The project folder hosted on GitHub |
| **Fork** | Your own personal copy of the repo on GitHub |
| **Clone** | Download a repo to your computer |
| **Branch** | A separate "workspace" to make changes without affecting the main code |
| **Commit** | A saved snapshot of your changes |
| **Pull Request (PR)** | A request to merge your changes into the original repo |
| **Upstream** | The original repository you forked from |

---

## Project Overview

**ACTS Brainwave** is a promotional landing page for the Brainwave event organized by ACTS. It's built with React and Vite, and uses Tailwind CSS for styling.

**Key links:**
- **Repository:** https://github.com/AarushGoyal741/acts-brainwave
- **Live site:** _(not deployed yet)_

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI library |
| [Vite 8](https://vite.dev) | Build tool and dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scrolling |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |

---

## Project Structure

```
acts-brainwave/
├── public/
│   ├── favicon.svg          # Browser tab icon
│   └── icons.svg            # SVG sprite for social icons
├── src/
│   ├── sections/            # Each page section lives here
│   │   └── Hero/
│   │       └── Hero.jsx     # (example — more sections needed!)
│   ├── components/          # Reusable UI components
│   │   └── Navbar/
│   │       └── Navbar.jsx   # (not yet created)
│   ├── App.jsx              # Root component — imports all sections
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind imports
├── index.html               # HTML entry point
├── eslint.config.js         # Linting rules
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

### Where to Add Your Code

- **New page section** → `src/sections/SectionName/SectionName.jsx`
- **Shared component** (reused across sections) → `src/components/ComponentName/ComponentName.jsx`
- **Styling** → Use Tailwind utility classes directly in JSX. For global styles, edit `src/index.css`.
- **Icons** → Use the `react-icons` package (already installed).

---

## Setting Up the Project Locally

**Prerequisites:** [Node.js](https://nodejs.org/) (v18 or later) and npm.

```bash
# 1. Clone your fork (replace YOUR_USERNAME with your GitHub username)
git clone https://github.com/YOUR_USERNAME/acts-brainwave.git
cd acts-brainwave

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site should open at `http://localhost:5173` in your browser. Any changes you make to the source files will auto-reload the page.

---

## How to Contribute (Step by Step)

This section explains the full GitHub workflow. Follow these steps for every contribution.

### 1. Fork the Repository

1. Go to https://github.com/AarushGoyal741/acts-brainwave
2. Click the **Fork** button (top-right corner)
3. This creates a copy of the repo under your GitHub account

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/acts-brainwave.git
cd acts-brainwave
```

### 3. Add the Upstream Remote

This lets you sync your fork with the original repo later.

```bash
git remote add upstream https://github.com/AarushGoyal741/acts-brainwave.git
```

Verify the remotes:

```bash
git remote -v
```

You should see:
- `origin` → your fork
- `upstream` → the original repo

### 4. Create a Branch

Always create a new branch for your work. Never commit directly to `main`.

```bash
# Make sure you're on the latest main branch
git checkout main
git pull upstream main

# Create and switch to a new branch
git checkout -b your-feature-name
```

**Branch naming tips:**
- `fix/typo-in-hero` — for bug fixes
- `feature/add-registration-form` — for new features
- `docs/update-readme` — for documentation changes

### 5. Make Your Changes

Edit files using your preferred code editor. Keep the following in mind:

- Follow the existing code style (see [Coding Guidelines](#coding-guidelines))
- Keep changes focused on one thing per branch
- Test your changes by running `npm run dev`

### 6. Commit Your Changes

```bash
# See what files changed
git status

# Stage your changes
git add filename.jsx          # add specific file
# OR
git add .                     # add all changes (use carefully)

# Commit with a clear message
git commit -m "Add registration form with email validation"
```

**Commit message guidelines:**
- Use the present tense ("Add feature" not "Added feature")
- Be concise but descriptive
- Reference issue numbers if applicable: `"Fix navbar alignment (#12)"`

### 7. Push to Your Fork

```bash
git push origin your-feature-name
```

### 8. Open a Pull Request

1. Go to your fork on GitHub
2. You'll see a banner saying "your-feature-name had recent pushes". Click **Compare & pull request**.
3. Fill out the PR template with:
   - **Title** — Clear summary of your changes
   - **Description** — What you changed and why
   - **Screenshots** (if UI-related)
4. Click **Create pull request**

### Keeping Your Fork in Sync

If the original repo changes while you're working, sync your fork:

```bash
git checkout main
git pull upstream main
git push origin main
```

Then update your feature branch:

```bash
git checkout your-feature-name
git merge main
# (resolve any merge conflicts if they appear)
```

---

## Coding Guidelines

### General

- Use **functional components** with hooks (not class components)
- Name files using **PascalCase** for components: `Hero.jsx`, `Navbar.jsx`
- Name folders the same as the component they contain: `src/sections/Hero/Hero.jsx`
- Use **meaningful variable and function names**

### Styling

- Use **Tailwind CSS utility classes** for styling
- Avoid writing custom CSS unless absolutely necessary
- Follow mobile-first responsive design

### Linting

Run the linter before committing:

```bash
npm run lint
```

Fix any errors or warnings the linter finds.

### Imports

Keep imports organized:

```jsx
// 1. External libraries (React, framer-motion, etc.)
import { motion } from "framer-motion";

// 2. Components
import Navbar from "./components/Navbar/Navbar";

// 3. Assets / data
import heroImage from "./assets/hero.jpg";
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code for linting errors |

---

## Need Help?

- **Git/GitHub issues:** Check [GitHub Docs](https://docs.github.com/en/get-started)
- **React:** [React Docs](https://react.dev)
- **Tailwind CSS:** [Tailwind Docs](https://tailwindcss.com/docs)
- **Project questions:** Open an issue on GitHub or reach out to the maintainers

---

*Happy coding! Every contribution, no matter how small, makes a difference.*
