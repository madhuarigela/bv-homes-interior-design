# BV Homes Furniture

A responsive customer-facing furniture storefront built for **BV Homes**, designed to present furniture collections and product details with a polished, modern web experience.

## Live demo

**Vercel:** _Deployment link will be added after production deployment._

## Features

- Responsive furniture storefront
- Home page with hero, categories, featured products, inspiration and trust sections
- Product catalogue and product detail pages
- Product enquiry flow
- Client-side routing with React Router
- Responsive navigation and mobile-friendly layout
- Reusable UI components built with shadcn/ui and Radix UI
- Type-safe development with TypeScript

## Architecture

```text
BV Homes Furniture
├── src/
│   ├── components/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── product/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- React Router
- TanStack Query
- Vitest

## Local development

```bash
git clone https://github.com/madhuarigela/bv-homes-interior-design.git
cd bv-homes-interior-design
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run test
npm run build
```

## Deployment

The project is configured as a Vite single-page application. Vercel can build it with:

- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

A Vercel rewrite is included so direct navigation to routes such as `/shop` and `/product/:id` continues to work after deployment.

## Project purpose

BV Homes Furniture is a portfolio-quality customer-facing project demonstrating responsive frontend development, component architecture, routing, product presentation and deployment readiness.

## Author

**Madhu Arigela**

GitHub: https://github.com/madhuarigela
