# AGENTS.md - Agent Workflow & Action Log

## Project Overview
This repository contains the developer portfolio of **Juan Luis Arias** (Full Stack Software Developer), built with React 19, TypeScript, and Tailwind CSS v4.

## Commit Plan & Incremental Steps

1. **Commit 1: `feat(navbar): extract navbar into fixed top component`**
   - Extract navigation bar from `Header.tsx` into a dedicated `Navbar.tsx` component.
   - Position navbar fixed at the top of the viewport (`fixed top-0 inset-x-0 z-50`).
   - Include domain/brand logo ("Juan Luis stack"), navigation links with smooth scrolling, and sticky "Let's Talk" CTA.
   - Clean up `Header.tsx` so it focuses exclusively on hero section content.
   - Integrate `Navbar` and `Header` in `App.tsx`.

2. **Commit 2: `feat(about-me): create AboutMe component with verified badge and expandable bio`** [COMPLETED]
   - Create `src/components/AboutMe.tsx`.
   - Feature avatar with warm orange circular glow using `Myselftportfolioimg.jpeg`.
   - Include "About Me." title with golden verified checkmark badge.
   - Show initial paragraph with an interactive "See more..." toggle to reveal full bio.
   - Embed into `App.tsx`.

3. **Commit 3: `feat(tech-stack): create categorized TechStack component with icons and proficiency levels`** [COMPLETED]
   - Create `src/components/TechStack.tsx`.
   - Group technologies into distinct stylized color-coded cards (Frontend, Backend, Databases, Tools, and Pending/In Progress).
   - Display technology SVGs, level indicators (both icons and text: High, Medium, Low–Medium, Low, Pending).
   - Embed into `App.tsx`.

4. **Commit 4: `feat(projects): create MyProjects component with featured card and expandable breakdown`** [COMPLETED]
   - Create `src/components/MyProjects.tsx`.
   - Feature "Posts Management" social media application screenshot (`project-threads.png`).
   - Present tech badges (React, Tailwind CSS, TypeScript, Node.js, Express.js, PostgreSQL, Git, GitHub).
   - Display basic project overview with "See more details" toggle for Frontend, Backend, and Database implementation details.
   - Embed into `App.tsx`.

5. **Commit 5: `feat(what-i-can-do): create WhatICanDo component with stylized feature boxes`** [COMPLETED]
   - Create `src/components/WhatICanDo.tsx`.
   - Display core developer competencies in dark glass cards with warm accent icons.
   - Cover full-stack development, responsive UI, REST APIs & databases, and problem-solving.
   - Embed into `App.tsx`.

6. **Commit 6: `feat(how-i-build): create HowIBuild component with vertical timeline style`** [COMPLETED]
   - Create `src/components/HowIBuild.tsx`.
   - Implement vertical left-line timeline with circular numbered nodes (1, 2, 3, 4).
   - Cover Plan First, Build Incrementally, Test and Refine, and Keep Learning.
   - Finalize integration in `App.tsx`.
