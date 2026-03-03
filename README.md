# Vibe UI

A curated collection of production-ready UI sections for modern web applications. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component library.

## Tech Stack

| Technology     | Purpose                    |
| -------------- | -------------------------- |
| Next.js 16     | Framework and routing      |
| React 19       | Component architecture     |
| Tailwind CSS 4 | Utility-first styling      |
| Framer Motion  | Animations and transitions |
| Shiki          | Code syntax highlighting   |
| Lucide React   | Icon system                |

## Components

Vibe UI ships with **27 ready-to-use sections** across multiple categories:

### Heroes
- **Centered Hero** -- Gradient heading, dual CTAs, radial background effects
- **Video Background Hero** -- Cinematic full-width background video with layered content
- **Hero with Signup Form** -- Split layout with headline and waitlist form

### Marketing
- **Feature Bento Grid** -- High-impact grid layout for showcasing core features
- **Feature Benefit Cards** -- Interactive hover-highlighted feature cards
- **Testimonial Wall** -- Star ratings, avatars, and floating feedback cards
- **Impact Stats Wall** -- Bold typography for key business metrics
- **Global CTA Block** -- Dual-action final pitch with trust signals
- **Premium Newsletter** -- Conversion-focused mailing list signup

### Pricing & Plans
- **Enterprise Pricing** -- Comparison table with billing toggles and feature highlights

### Data & Dashboards
- **SaaS Dashboard Overview** -- Key performance metrics with trend indicators
- **Sidebar Navigation** -- Collapsible sidebar with grouped items, badges, and search

### Developer
- **API Quickstart** -- Multi-language code switcher with step-by-step setup
- **Engineering Blog Post** -- Typography-first layout with code highlighting

### Trust & Compliance
- **Security & Compliance** -- Data protection and compliance standards
- **GDPR Cookie Consent** -- Customizable, non-intrusive consent banner

### Infrastructure
- **System Infrastructure** -- Cloud infrastructure breakdown with latency and specs
- **Global Distribution** -- Interactive map with regional presence and edge nodes
- **Product Integrations Hub** -- Ecosystem visualization with app nodes

### Team & Community
- **Modern Team Workspace** -- Profile cards with roles and social handles

### Navigation & Layout
- **Advanced Global Footer** -- Deep links and social integration
- **Product Execution Workflow** -- Step-by-step process visualization

### Utility Pages
- **Interactive FAQ** -- Animated accordion for common questions
- **Changelog Timeline** -- Vertical timeline with version tags and descriptions
- **Login / Auth Form** -- Social OAuth, email/password, gradient accent
- **404 Not Found Page** -- Animated glitch effect with call-to-action
- **Under Maintenance** -- Countdown timer and status messaging

## Project Structure

```
src/
  app/            # Next.js pages and routing
  components/
    sections/     # All 27 UI section components
    ui/           # Shared UI primitives
  data/           # Component registry and metadata
  lib/            # Utility functions
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## License

MIT License — see [LICENSE](LICENSE) for full details.