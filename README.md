# Software Engineering Student Portfolio - Ahtesham

A clean, modern, dark-themed portfolio website for Software Engineering student **Ahtesham**. Built with React, TypeScript, Tailwind CSS, and Node.js / Express.js.

## 🚀 Features

- **Modern Dark Aesthetic**: Styled with a `#0F0F0F` black background, emerald green `#10B981` primary accents, and `#1F2937` card containers.
- **Home Section**:
  - Name: Ahtesham
  - Title: Software Engineering Student
  - Interactive Profile Picture Placeholder card with technology badges
  - Download CV modal with resume preview and plain-text download option
  - Quick contact button
- **About Section**:
  - Educational background (B.S. in Software Engineering, relevant coursework)
  - Career Objective
  - Short Introduction
- **Skills Section**:
  - Interactive skill cards for **Java, Python, C++, TypeScript, React, Node.js, Express.js, SQL, Git, GitHub**
- **Projects Section**:
  - **Smart Student Management System** (Java, CRUD Operations, MySQL)
  - **DSA Visualizer** (Java, Data Structures, Algorithms)
  - Direct GitHub buttons linked to `https://github.com/ttgahty-beep`
- **Contact Section**:
  - Contact form (Name, Email, Message) connected to Express backend via Axios
  - Input validation and dynamic feedback alerts (success/error messages)
- **Backend API**:
  - Express.js server in TypeScript with CORS, JSON middleware, and `POST /api/contact` endpoint
- **Responsive Navigation & Footer**:
  - Sticky navigation bar with mobile drawer menu and smooth section scrolling
  - Footer with copyright © 2026 Ahtesham and GitHub link

---

## 📁 Folder Structure

```text
simple-portfolio/
├── client/
│   └── src/
│       ├── assets/             # Static graphics and placeholder documentation
│       ├── components/         # Reusable UI components (Navbar, Footer, CVModal, Sections)
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   ├── CVModal.tsx
│       │   ├── HomeSection.tsx
│       │   ├── AboutSection.tsx
│       │   ├── SkillsSection.tsx
│       │   ├── ProjectsSection.tsx
│       │   └── ContactSection.tsx
│       ├── pages/              # Page modules (Home, About, Skills, Projects, Contact)
│       │   ├── Home.tsx
│       │   ├── About.tsx
│       │   ├── Skills.tsx
│       │   ├── Projects.tsx
│       │   └── Contact.tsx
│       ├── data/               # Portfolio content data
│       ├── types.ts            # Shared TypeScript interfaces
│       ├── App.tsx             # Root React application entry with Router
│       ├── main.tsx            # DOM root renderer
│       └── index.css           # Tailwind CSS dark theme setup
├── server/
│   └── src/
│       ├── controllers/        # Request handling logic (contactController.ts)
│       ├── routes/             # Express API routes (contactRoutes.ts)
│       └── server.ts
├── server.ts                   # Main server entry point (Express + Vite Dev Middleware)
├── package.json                # Project dependencies and run scripts
└── README.md                   # Documentation & Setup Guide
```

---

## 🛠️ Step-by-Step Instructions to Run the Project

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (v9 or higher)

### 1. Install Dependencies

In the project root directory, execute:

```bash
npm install
```

### 2. Run Development Server

Start the full-stack server (Node Express backend + Vite frontend):

```bash
npm run dev
```

The application will be accessible at:
`http://localhost:3000`

### 3. Build for Production

To compile both the React frontend and the Express backend for production:

```bash
npm run build
```

### 4. Start Production Server

To run the production bundle:

```bash
npm run start
```

---

## 🌐 API Endpoints

### `POST /api/contact`

Receives contact form submissions.

**Request Body**:
```json
{
  "name": "Alex Smith",
  "email": "alex@example.com",
  "message": "Hello Ahtesham, I would like to discuss an engineering opportunity."
}
```

**Success Response (200 OK)**:
```json
{
  "success": true,
  "message": "Thank you, Alex Smith! Your message has been sent successfully. I will get back to you soon."
}
```

**Error Response (400 Bad Request)**:
```json
{
  "success": false,
  "message": "Please enter a valid email address."
}
```

---

© 2026 Ahtesham - Software Engineering Student Portfolio
