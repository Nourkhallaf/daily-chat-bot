import { RoadmapDay } from '../../interfaces/roadmap.interface';

export const ROADMAP_DATA: RoadmapDay[] = [
  // 🎨 WEEK 1-3: REACT - Building the Frontend (Days 1-21)
  {
    day: 1,
    title: '🎯 JSX - Your First Job Card',
    explanation: 'Welcome to Day 1! Think of JSX as HTML\'s cooler cousin that lives in JavaScript. Today you\'re laying the first brick of your job platform - a JobCard that will display thousands of opportunities.',
    task: '⚡ Challenge: Build your first JobCard component showing "Software Engineer at Google". Bonus: Add a salary badge!',
    resource: {
      title: 'React - Writing Markup with JSX',
      link: 'https://react.dev/learn/writing-markup-with-jsx'
    }
  },
  {
    day: 2,
    title: '🧩 Components - Building Blocks',
    explanation: 'Imagine LEGO blocks. Each component is a reusable piece. Your job platform needs a Header, Footer, and those beautiful JobCards. Let\'s build the skeleton!',
    task: '⚡ Challenge: Create Header with logo + nav, and Footer with links. Make them look professional! Bonus: Add hover effects.',
    resource: {
      title: 'React - Your First Component',
      link: 'https://react.dev/learn/your-first-component'
    }
  },
  {
    day: 3,
    title: '📦 Props - Data Flow Magic',
    explanation: 'Props are like passing notes between components. Your JobCard needs to know: What\'s the job title? Company? Salary? Let\'s make it dynamic!',
    task: '⚡ Challenge: Make JobCard accept title, company, location, salary as props. Display 3 different jobs! Bonus: Add a company logo prop.',
    resource: {
      title: 'React - Passing Props to a Component',
      link: 'https://react.dev/learn/passing-props-to-a-component'
    }
  },
  {
    day: 4,
    title: '🎮 useState - Interactive Search',
    explanation: 'Time to add interactivity! useState is your state manager. Users need to search for jobs - let\'s track what they type in real-time.',
    task: '⚡ Challenge: Build SearchBar that updates as you type. Show the search query below it! Bonus: Add a clear button.',
    resource: {
      title: 'React - State: A Component\'s Memory',
      link: 'https://react.dev/learn/state-a-components-memory'
    }
  },
  {
    day: 5,
    title: '🔄 useEffect - Fetch Jobs on Load',
    explanation: 'When users land on your platform, jobs should load automatically. useEffect runs code when components mount - perfect for fetching data!',
    task: '⚡ Challenge: Fetch mock jobs when component mounts. Console.log them first! Bonus: Add a "Refresh Jobs" button.',
    resource: {
      title: 'React - Synchronizing with Effects',
      link: 'https://react.dev/learn/synchronizing-with-effects'
    }
  },
  {
    day: 6,
    title: '👆 Events - Click to Apply',
    explanation: 'Users want to click "Apply Now" and see magic happen. Event handlers make your app respond to clicks, typing, and submissions.',
    task: '⚡ Challenge: Add onClick to JobCard that logs "Applied to [job]". Bonus: Change button color after clicking!',
    resource: {
      title: 'React - Responding to Events',
      link: 'https://react.dev/learn/responding-to-events'
    }
  },
  {
    day: 7,
    title: '🎭 Conditional Rendering - Smart UI',
    explanation: 'Your app needs to be smart: show loading spinners, handle empty searches, toggle login/logout. Conditional rendering makes it happen!',
    task: '⚡ Challenge: Show "Loading..." → Jobs list → "No jobs found" based on state. Bonus: Add a retry button on error.',
    resource: {
      title: 'React - Conditional Rendering',
      link: 'https://react.dev/learn/conditional-rendering'
    }
  },
  {
    day: 8,
    title: '📋 Lists - Display All Jobs',
    explanation: 'You have 100 jobs to show. Manually creating 100 components? No way! .map() renders lists efficiently with unique keys.',
    task: '⚡ Challenge: Display 5 jobs using .map() with proper keys. Bonus: Add alternating background colors!',
    resource: {
      title: 'React - Rendering Lists',
      link: 'https://react.dev/learn/rendering-lists'
    }
  },
  {
    day: 9,
    title: '🏗️ Composition - Build the Page',
    explanation: 'Time to assemble! Your job platform page = Header + SearchBar + JobList + Footer. Component composition is like building with LEGO.',
    task: '⚡ Challenge: Create JobListPage combining all components. Make it look like a real platform! Bonus: Add a sidebar with filters.',
    resource: {
      title: 'React - Thinking in React',
      link: 'https://react.dev/learn/thinking-in-react'
    }
  },
  {
    day: 10,
    title: '🎛️ Controlled Inputs - Search Power',
    explanation: 'Controlled components = React controls the input value. Essential for search filters, forms, and real-time validation.',
    task: '⚡ Challenge: Build controlled search input with character counter. Bonus: Add search suggestions dropdown!',
    resource: {
      title: 'React - Sharing State Between Components',
      link: 'https://react.dev/learn/sharing-state-between-components'
    }
  },
  {
    day: 11,
    title: '🪝 Custom Hooks - useJobs Magic',
    explanation: 'Don\'t repeat yourself! Extract job fetching logic into a reusable useJobs hook. Use it anywhere in your app.',
    task: '⚡ Challenge: Create useJobs() hook returning {jobs, loading, error}. Bonus: Add refetch function!',
    resource: {
      title: 'React - Reusing Logic with Custom Hooks',
      link: 'https://react.dev/learn/reusing-logic-with-custom-hooks'
    }
  },
  {
    day: 12,
    title: '🌍 Context API - Global Auth State',
    explanation: 'Passing user data through 10 components? Nightmare! Context API shares state globally. Perfect for authentication.',
    task: '⚡ Challenge: Create AuthContext with isLoggedIn and user data. Bonus: Add login/logout functions!',
    resource: {
      title: 'React - Passing Data Deeply with Context',
      link: 'https://react.dev/learn/passing-data-deeply-with-context'
    }
  },
  {
    day: 13,
    title: '🔌 useContext - Access Auth Anywhere',
    explanation: 'Now consume your AuthContext! Show user name in Header, hide "Post Job" if not logged in. Context makes it effortless.',
    task: '⚡ Challenge: Use AuthContext to show username in Header. Bonus: Show different nav items for logged-in users!',
    resource: {
      title: 'React - Scaling Up with Reducer and Context',
      link: 'https://react.dev/learn/scaling-up-with-reducer-and-context'
    }
  },
  {
    day: 14,
    title: '📝 Forms - Job Application',
    explanation: 'The moment of truth: users applying to jobs! Build a form handling name, email, resume, cover letter. Make it smooth!',
    task: '⚡ Challenge: Build application form with 4 fields + submit. Bonus: Add real-time validation with error messages!',
    resource: {
      title: 'React - Responding to Events (Forms)',
      link: 'https://react.dev/learn/responding-to-events'
    }
  },
  {
    day: 15,
    title: '🌐 API Integration - Real Jobs',
    explanation: 'Stop using fake data! Connect to a real API. Fetch jobs, handle loading states, show errors. Your platform is getting real!',
    task: '⚡ Challenge: Fetch from mock API and display jobs. Handle loading & errors! Bonus: Add pagination!',
    resource: {
      title: 'React - Synchronizing with Effects (Data Fetching)',
      link: 'https://react.dev/learn/synchronizing-with-effects'
    }
  },
  {
    day: 16,
    title: '⏳ Loading States - Better UX',
    explanation: 'Users hate staring at blank screens. Show spinners, skeletons, progress bars while loading. Professional apps do this!',
    task: '⚡ Challenge: Add a beautiful loading spinner while fetching. Bonus: Create skeleton cards for better UX!',
    resource: {
      title: 'React - Conditional Rendering (Loading States)',
      link: 'https://react.dev/learn/conditional-rendering'
    }
  },
  {
    day: 17,
    title: '🚨 Error Handling - Graceful Failures',
    explanation: 'APIs fail. Internet drops. Handle errors gracefully with friendly messages and retry buttons. Users will thank you!',
    task: '⚡ Challenge: Show error message with retry button when fetch fails. Bonus: Add error boundary component!',
    resource: {
      title: 'React - Error Boundaries',
      link: 'https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary'
    }
  },
  {
    day: 18,
    title: '🔍 Search & Filter - Find Dream Jobs',
    explanation: 'Users need to filter by location, salary, remote/onsite. Build powerful filters that update the job list instantly!',
    task: '⚡ Challenge: Add location filter dropdown that filters jobs. Bonus: Add salary range slider!',
    resource: {
      title: 'React - Managing State',
      link: 'https://react.dev/learn/managing-state'
    }
  },
  {
    day: 19,
    title: '🗺️ React Router - Multi-Page App',
    explanation: 'Your platform needs pages: Home, Job Details, Profile, Post Job. React Router makes navigation seamless!',
    task: '⚡ Challenge: Set up routes for /jobs, /jobs/:id, /profile. Bonus: Add 404 page!',
    resource: {
      title: 'React Router - Tutorial',
      link: 'https://reactrouter.com/en/main/start/tutorial'
    }
  },
  {
    day: 20,
    title: '🚀 Navigation - Job Details Page',
    explanation: 'Click a job → see full details. Use Link and useNavigate for smooth navigation. Your platform feels like a real app now!',
    task: '⚡ Challenge: Navigate from JobCard to /jobs/:id on click. Bonus: Add breadcrumbs navigation!',
    resource: {
      title: 'React Router - useNavigate',
      link: 'https://reactrouter.com/en/main/hooks/use-navigate'
    }
  },
  {
    day: 21,
    title: '⚡ Performance - Lightning Fast',
    explanation: 'React Week finale! Optimize with React.memo, useMemo, useCallback. Render 1000 jobs without lag. You\'re a React pro now!',
    task: '⚡ Challenge: Wrap JobCard in React.memo. Measure re-renders! Bonus: Use useMemo for filtered jobs list!',
    resource: {
      title: 'React - Keeping Components Pure',
      link: 'https://react.dev/learn/keeping-components-pure'
    }
  },

  // 🖥️ WEEK 4: NODE.JS - Backend Foundation (Days 22-28)
  {
    day: 22,
    title: '🟢 Node.js - Server-Side JavaScript',
    explanation: 'Welcome to the backend! Node.js lets you run JavaScript on servers. Today you\'re building the engine that powers your job platform API.',
    task: '⚡ Challenge: Create server.js that logs "Job Platform API Starting...". Bonus: Add ASCII art logo!',
    resource: {
      title: 'Node.js - Getting Started Guide',
      link: 'https://nodejs.org/en/docs/guides/getting-started-guide'
    }
  },
  {
    day: 23,
    title: '📦 Modules - Organize Your Code',
    explanation: 'Big apps need organization. Split your code into modules: jobs.js, users.js, utils.js. Clean code = happy developer!',
    task: '⚡ Challenge: Create jobs.js with getJobs() and import it. Bonus: Add getJobById() function!',
    resource: {
      title: 'Node.js - Modules: CommonJS modules',
      link: 'https://nodejs.org/api/modules.html'
    }
  },
  {
    day: 24,
    title: '🌐 HTTP Server - First API',
    explanation: 'Build your first HTTP server! It listens for requests and sends responses. This is where your React app will fetch jobs from.',
    task: '⚡ Challenge: Create server responding "Job Platform API v1.0" on GET /. Bonus: Add /health endpoint!',
    resource: {
      title: 'Node.js - HTTP Module',
      link: 'https://nodejs.org/api/http.html'
    }
  },
  {
    day: 25,
    title: '🛣️ Routing - Multiple Endpoints',
    explanation: 'Your API needs routes: GET /jobs for list, GET /jobs/:id for details, POST /jobs to create. Let\'s build them!',
    task: '⚡ Challenge: Create GET /jobs and GET /jobs/:id with mock data. Bonus: Add query params for filtering!',
    resource: {
      title: 'Node.js - Anatomy of an HTTP Transaction',
      link: 'https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction'
    }
  },
  {
    day: 26,
    title: '⏱️ Async/Await - Handle Delays',
    explanation: 'Databases take time. APIs take time. Master async/await to handle delays without blocking. Critical for real apps!',
    task: '⚡ Challenge: Simulate 1-second delay fetching jobs with Promise. Bonus: Handle multiple async calls!',
    resource: {
      title: 'Node.js - Asynchronous flow control',
      link: 'https://nodejs.org/en/docs/guides/blocking-vs-non-blocking'
    }
  },
  {
    day: 27,
    title: '📁 File System - Data Storage',
    explanation: 'Before databases, there are files. Read jobs.json, write applications. Useful for logs, uploads, and temporary data.',
    task: '⚡ Challenge: Read jobs.json and return parsed data. Bonus: Write new job to file!',
    resource: {
      title: 'Node.js - File System',
      link: 'https://nodejs.org/api/fs.html'
    }
  },
  {
    day: 28,
    title: '🔐 Environment Variables - Secrets Safe',
    explanation: 'Never hardcode passwords or API keys! Use .env files to store secrets securely. Professional developers do this from day 1.',
    task: '⚡ Challenge: Create .env with DATABASE_URL and PORT. Load with dotenv! Bonus: Add validation for required vars!',
    resource: {
      title: 'Node.js - Process Environment Variables',
      link: 'https://nodejs.org/api/process.html#processenv'
    }
  },

  // 🏗️ WEEK 5-6: NESTJS + DATABASE + AUTH - Production Backend (Days 29-49)
  {
    day: 29,
    title: '🦅 NestJS - Enterprise Backend',
    explanation: 'Level up! NestJS brings structure, TypeScript, and scalability. Big companies use this. Your job platform is going professional!',
    task: '⚡ Challenge: Initialize NestJS project: nest new job-platform-api. Bonus: Explore the folder structure!',
    resource: {
      title: 'NestJS - First Steps',
      link: 'https://docs.nestjs.com/first-steps'
    }
  },
  {
    day: 30,
    title: '📦 Jobs Module - Feature Organization',
    explanation: 'NestJS organizes by features. Jobs module contains everything job-related: controllers, services, DTOs. Clean architecture!',
    task: '⚡ Challenge: Generate Jobs module with CLI. Bonus: Add a README explaining the module!',
    resource: {
      title: 'NestJS - Modules',
      link: 'https://docs.nestjs.com/modules'
    }
  },
  {
    day: 31,
    title: '🎮 Jobs Controller - Handle Requests',
    explanation: 'Controllers are the gatekeepers. They receive HTTP requests and return responses. Your API\'s front door!',
    task: '⚡ Challenge: Create GET /jobs endpoint returning mock jobs array. Bonus: Add GET /jobs/featured!',
    resource: {
      title: 'NestJS - Controllers',
      link: 'https://docs.nestjs.com/controllers'
    }
  },
  {
    day: 32,
    title: '⚙️ Jobs Service - Business Logic',
    explanation: 'Services do the heavy lifting: fetch from DB, apply business rules, process data. Keep controllers thin, services fat!',
    task: '⚡ Challenge: Create JobsService with findAll() and findOne(). Bonus: Add search() method!',
    resource: {
      title: 'NestJS - Providers',
      link: 'https://docs.nestjs.com/providers'
    }
  },
  {
    day: 33,
    title: '📋 DTOs - Type Safety',
    explanation: 'DTOs define data shapes. CreateJobDto ensures jobs have required fields. TypeScript + DTOs = bulletproof API!',
    task: '⚡ Challenge: Create CreateJobDto with 5 fields. Bonus: Add UpdateJobDto with optional fields!',
    resource: {
      title: 'NestJS - Pipes (Validation)',
      link: 'https://docs.nestjs.com/pipes'
    }
  },
  {
    day: 34,
    title: '✅ Validation - Data Quality',
    explanation: 'Users send garbage data. Validation stops it! @IsString, @IsEmail, @Min decorators protect your database.',
    task: '⚡ Challenge: Add validation decorators to CreateJobDto. Bonus: Test with invalid data!',
    resource: {
      title: 'NestJS - Validation',
      link: 'https://docs.nestjs.com/techniques/validation'
    }
  },
  {
    day: 35,
    title: '🐘 PostgreSQL - Real Database',
    explanation: 'No more mock data! PostgreSQL is a powerful database used by Instagram, Spotify, Reddit. Time to store real jobs!',
    task: '⚡ Challenge: Install PostgreSQL, create "job_platform_db". Bonus: Create a test table manually!',
    resource: {
      title: 'PostgreSQL - Tutorial',
      link: 'https://www.postgresql.org/docs/current/tutorial.html'
    }
  },
  {
    day: 36,
    title: '💎 Prisma - Modern ORM',
    explanation: 'Prisma makes databases easy. Write TypeScript, get SQL. Auto-complete, type safety, migrations. It\'s magic!',
    task: '⚡ Challenge: Install Prisma, run init, configure DATABASE_URL. Bonus: Generate Prisma Client!',
    resource: {
      title: 'Prisma - Getting Started',
      link: 'https://www.prisma.io/docs/getting-started'
    }
  },
  {
    day: 37,
    title: '💼 Job Schema - Database Design',
    explanation: 'Design your Job table: id, title, company, salary, description. This is the heart of your platform!',
    task: '⚡ Challenge: Define Job model in schema.prisma with 7 fields. Bonus: Add isRemote and tags!',
    resource: {
      title: 'Prisma - Data Model',
      link: 'https://www.prisma.io/docs/concepts/components/prisma-schema/data-model'
    }
  },
  {
    day: 38,
    title: '👤 User Schema - Authentication Ready',
    explanation: 'Users need accounts! Design User model with email, password, role (employer/seeker). Security first!',
    task: '⚡ Challenge: Create User model with auth fields. Bonus: Add profile fields (bio, skills)!',
    resource: {
      title: 'Prisma - Data Model (Models)',
      link: 'https://www.prisma.io/docs/concepts/components/prisma-schema/data-model'
    }
  },
  {
    day: 39,
    title: '🔗 Relationships - Connect Data',
    explanation: 'Jobs belong to Users. Users apply to Jobs. Relationships connect your data. This is database power!',
    task: '⚡ Challenge: Add userId to Job model (one-to-many). Bonus: Create Application model (many-to-many)!',
    resource: {
      title: 'Prisma - Relations',
      link: 'https://www.prisma.io/docs/concepts/components/prisma-schema/relations'
    }
  },
  {
    day: 40,
    title: '🚀 Migrations - Deploy Schema',
    explanation: 'Migrations create your tables in the database. Version control for your schema. Run it and watch the magic!',
    task: '⚡ Challenge: Run prisma migrate dev --name init. Check database! Bonus: Add seed data!',
    resource: {
      title: 'Prisma - Migrations',
      link: 'https://www.prisma.io/docs/concepts/components/prisma-migrate'
    }
  },
  {
    day: 41,
    title: '💾 CRUD Operations - Full Power',
    explanation: 'Create, Read, Update, Delete. The four horsemen of databases. Your API can now do everything!',
    task: '⚡ Challenge: Implement all CRUD operations in JobsService with Prisma. Bonus: Add soft delete!',
    resource: {
      title: 'Prisma - CRUD',
      link: 'https://www.prisma.io/docs/concepts/components/prisma-client/crud'
    }
  },
  {
    day: 42,
    title: '🔐 Auth Setup - Security First',
    explanation: 'Time to protect your platform! JWT authentication keeps users secure. Install the auth toolkit!',
    task: '⚡ Challenge: Install @nestjs/jwt, passport, bcrypt. Bonus: Read JWT documentation!',
    resource: {
      title: 'NestJS - Authentication',
      link: 'https://docs.nestjs.com/security/authentication'
    }
  },
  {
    day: 43,
    title: '📝 Registration - Welcome Users',
    explanation: 'Let users create accounts! Hash passwords with bcrypt (never store plain text). Save to database. Security 101!',
    task: '⚡ Challenge: Create POST /auth/register with password hashing. Bonus: Check if email exists!',
    resource: {
      title: 'NestJS - Authentication (Registration)',
      link: 'https://docs.nestjs.com/security/authentication'
    }
  },
  {
    day: 44,
    title: '🔑 Login - Issue Tokens',
    explanation: 'Verify password, generate JWT token. Users get a token to access protected routes. Authentication complete!',
    task: '⚡ Challenge: Create POST /auth/login returning JWT. Bonus: Add refresh token!',
    resource: {
      title: 'NestJS - JWT Strategy',
      link: 'https://docs.nestjs.com/security/authentication#jwt-functionality'
    }
  },
  {
    day: 45,
    title: '🛡️ JWT Strategy - Validate Tokens',
    explanation: 'Every request with a token needs validation. JWT Strategy extracts user from token. Attach to request. Beautiful!',
    task: '⚡ Challenge: Create JwtStrategy validating tokens. Bonus: Add token expiration check!',
    resource: {
      title: 'NestJS - Passport Strategies',
      link: 'https://docs.nestjs.com/security/authentication#implementing-passport-strategies'
    }
  },
  {
    day: 46,
    title: '🚪 Protected Routes - Auth Required',
    explanation: 'Only logged-in users can post jobs or apply. Guards protect routes. No token = no access!',
    task: '⚡ Challenge: Protect POST /jobs with JwtAuthGuard. Bonus: Protect DELETE /jobs/:id!',
    resource: {
      title: 'NestJS - Guards',
      link: 'https://docs.nestjs.com/guards'
    }
  },
  {
    day: 47,
    title: '👑 Role-Based Access - Permissions',
    explanation: 'Employers post jobs. Seekers apply. Different roles, different permissions. RolesGuard enforces this!',
    task: '⚡ Challenge: Create RolesGuard restricting POST /jobs to employers. Bonus: Add admin role!',
    resource: {
      title: 'NestJS - Authorization',
      link: 'https://docs.nestjs.com/security/authorization'
    }
  },
  {
    day: 48,
    title: '📬 Applications Module - Track Applications',
    explanation: 'When users apply, store it! Application model links User + Job. Track status: pending, accepted, rejected.',
    task: '⚡ Challenge: Create Applications module and Application model. Bonus: Add status enum!',
    resource: {
      title: 'NestJS - Modules (Feature Modules)',
      link: 'https://docs.nestjs.com/modules'
    }
  },
  {
    day: 49,
    title: '✉️ Apply Feature - Complete Flow',
    explanation: 'The big moment! Users click "Apply", you create Application record. Check if already applied. Send confirmation!',
    task: '⚡ Challenge: Create POST /jobs/:id/apply endpoint. Bonus: Prevent duplicate applications!',
    resource: {
      title: 'Prisma - Relation Queries',
      link: 'https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries'
    }
  },

  // ⚡ WEEK 7: NEXT.JS - Modern Frontend (Days 50-56)
  {
    day: 50,
    title: '▲ Next.js - React on Steroids',
    explanation: 'Next.js = React + SSR + Routing + SEO. Used by Netflix, TikTok, Twitch. Your job platform goes pro!',
    task: '⚡ Challenge: Create Next.js app with App Router. Bonus: Explore the app folder structure!',
    resource: {
      title: 'Next.js - Getting Started',
      link: 'https://nextjs.org/docs/getting-started/installation'
    }
  },
  {
    day: 51,
    title: '🗂️ File-Based Routing - Magic Navigation',
    explanation: 'No more route config! Create app/jobs/page.tsx → /jobs route exists. Create app/jobs/[id]/page.tsx → dynamic routes!',
    task: '⚡ Challenge: Create pages for /, /jobs, /jobs/[id]. Bonus: Add /profile and /post-job!',
    resource: {
      title: 'Next.js - Routing Fundamentals',
      link: 'https://nextjs.org/docs/app/building-your-application/routing'
    }
  },
  {
    day: 52,
    title: '🎨 Layouts - Shared UI',
    explanation: 'Header and Footer on every page? Use layouts! Define once, wrap all pages. DRY principle in action!',
    task: '⚡ Challenge: Create root layout with Header + Footer. Bonus: Add different layout for /dashboard!',
    resource: {
      title: 'Next.js - Layouts and Templates',
      link: 'https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts'
    }
  },
  {
    day: 53,
    title: '🖥️ Server Components - SEO Power',
    explanation: 'Server Components fetch data on server. Faster, better SEO, no loading spinners. Default in Next.js 13+!',
    task: '⚡ Challenge: Create server component fetching jobs (no "use client"). Bonus: Add metadata!',
    resource: {
      title: 'Next.js - Server Components',
      link: 'https://nextjs.org/docs/app/building-your-application/rendering/server-components'
    }
  },
  {
    day: 54,
    title: '🎮 Client Components - Interactivity',
    explanation: 'Need useState, onClick, forms? Use "use client". Client Components handle interactivity. Best of both worlds!',
    task: '⚡ Challenge: Create SearchBar with "use client" and useState. Bonus: Add filter dropdowns!',
    resource: {
      title: 'Next.js - Client Components',
      link: 'https://nextjs.org/docs/app/building-your-application/rendering/client-components'
    }
  },
  {
    day: 55,
    title: '🎯 Dynamic Routes - Job Details',
    explanation: 'Click job → see details at /jobs/123. Dynamic routes fetch data based on URL param. Professional apps do this!',
    task: '⚡ Challenge: Create /jobs/[id]/page.tsx fetching single job. Bonus: Add "Apply" button!',
    resource: {
      title: 'Next.js - Dynamic Routes',
      link: 'https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes'
    }
  },
  {
    day: 56,
    title: '🔍 SEO Optimization - Get Discovered',
    explanation: 'Google needs metadata! generateMetadata() adds dynamic titles, descriptions, Open Graph tags. Rank higher!',
    task: '⚡ Challenge: Add generateMetadata() to job details with dynamic title. Bonus: Add OG image!',
    resource: {
      title: 'Next.js - Metadata',
      link: 'https://nextjs.org/docs/app/building-your-application/optimizing/metadata'
    }
  },

  // 🤖 WEEK 8: AI INTEGRATION - Future Tech (Days 57-60)
  {
    day: 57,
    title: '🧠 OpenAI Setup - AI Power',
    explanation: 'The future is here! OpenAI can write job descriptions, match candidates, answer questions. Let\'s integrate it!',
    task: '⚡ Challenge: Get OpenAI API key, install SDK in NestJS. Bonus: Test with a simple prompt!',
    resource: {
      title: 'OpenAI - Quickstart',
      link: 'https://platform.openai.com/docs/quickstart'
    }
  },
  {
    day: 58,
    title: '⚙️ AI Service - Smart Backend',
    explanation: 'Create AiService to interact with OpenAI. Handle errors, rate limits, retries. Professional AI integration!',
    task: '⚡ Challenge: Create AiService with generateJobDescription() method. Bonus: Add prompt templates!',
    resource: {
      title: 'OpenAI - API Reference',
      link: 'https://platform.openai.com/docs/api-reference'
    }
  },
  {
    day: 59,
    title: '✨ Auto-Generate Descriptions - AI Magic',
    explanation: 'Employers enter job title + requirements → AI writes professional description. Save hours of work. This is the future!',
    task: '⚡ Challenge: Create POST /jobs/generate-description using AI. Bonus: Let users edit before saving!',
    resource: {
      title: 'OpenAI - Text Generation',
      link: 'https://platform.openai.com/docs/guides/text-generation'
    }
  },
  {
    day: 60,
    title: '🎯 AI Job Matching - Perfect Fit',
    explanation: 'Final day! AI analyzes user skills + job requirements → recommends perfect matches. You built a complete AI-powered job platform!',
    task: '⚡ Challenge: Create GET /jobs/recommendations using AI matching. Bonus: Add match score percentage! 🎉',
    resource: {
      title: 'OpenAI - Embeddings',
      link: 'https://platform.openai.com/docs/guides/embeddings'
    }
  },
];
