import { DashboardStats } from "@/components/sections/DashboardStats"
import { BentoFeatures } from "@/components/sections/BentoFeatures"
import { PricingTable } from "@/components/sections/PricingTable"
import { ApiQuickstart } from "@/components/sections/ApiQuickstart"
import { TeamSection } from "@/components/sections/TeamSection"
import { WorkflowSteps } from "@/components/sections/WorkflowSteps"
import { Testimonials } from "@/components/sections/Testimonials"
import { SecuritySection } from "@/components/sections/SecuritySection"
import { InfraSection } from "@/components/sections/InfraSection"
import { GlobalDistribution } from "@/components/sections/GlobalDistribution"
import { IntegrationsSection } from "@/components/sections/IntegrationsSection"
import { BlogLayout } from "@/components/sections/BlogLayout"
import { FaqSection } from "@/components/sections/FaqSection"
import { StatsWall } from "@/components/sections/StatsWall"
import { NewsletterSection } from "@/components/sections/NewsletterSection"
import { CtaSection } from "@/components/sections/CtaSection"
import { FeatureCards } from "@/components/sections/FeatureCards"
import { FooterAdvanced } from "@/components/sections/FooterAdvanced"
import { CookieConsent } from "@/components/sections/CookieConsent"
import { MaintenanceSection } from "@/components/sections/MaintenanceSection"
import { LoginForm } from "@/components/sections/LoginForm"
import { ChangelogTimeline } from "@/components/sections/ChangelogTimeline"
import { NotFoundPage } from "@/components/sections/NotFoundPage"

export const COMPONENTS = {
  "dashboard-stats": {
    title: "SaaS Dashboard Overview",
    description: "A comprehensive analytics block featuring key performance metrics, real-time trends, and trend indicators. Perfect for admin panels and monitoring systems.",
    component: DashboardStats,
  },
  "bento-features": {
    title: "Feature Bento Grid",
    description: "Modern landing page section showcasing core features in a high-impact grid layout. Designed for visual clarity and engagement.",
    component: BentoFeatures,
  },
  "pricing-table": {
    title: "Enterprise Pricing",
    description: "A conversion-optimized comparison table with monthly/yearly billing toggles, feature highlights, and plan-specific tags.",
    component: PricingTable,
  },
  "api-quickstart": {
    title: "Developer API Quickstart",
    description: "A developer-focused section with a multi-language code switcher, line numbering, and step-by-step installation instructions.",
    component: ApiQuickstart,
  },
  "team-grid": {
    title: "Modern Team Workspace",
    description: "Sophisticated team grid featuring profile cards, role descriptions, and integrated social handles for companies and communities.",
    component: TeamSection,
  },
  "workflow-steps": {
    title: "Product Execution Workflow",
    description: "A chronological walkthrough of your product's process, using vertical alignment and visual markers for clarity.",
    component: WorkflowSteps,
  },
  "testimonials": {
    title: "Testimonial Wall",
    description: "Social proof section with refined avatars, star ratings, and floating feedback cards. Perfect for building trust and credibility.",
    component: Testimonials,
  },
  "security": {
    title: "Security & Compliance",
    description: "Trust-building section detailing data protection, global compliance standards, and infrastructure security protocols.",
    component: SecuritySection,
  },
  "infra": {
    title: "System Infrastructure",
    description: "Multi-point technical breakdown of your cloud infrastructure, showing distribution, latency, and hardware specs.",
    component: InfraSection,
  },
  "global-edge": {
    title: "Global Distribution",
    description: "Interactive globe and map visualization showcasing regional presence, network live-sync, and edge computing nodes.",
    component: GlobalDistribution,
  },
  "integrations": {
    title: "Product Integrations Hub",
    description: "Cloud connection hub for mapping your stack's ecosystem, featuring interactive app nodes and ecosystem sync visualization.",
    component: IntegrationsSection,
  },
  "blog-post": {
    title: "Engineering Blog Post",
    description: "Highly readable blog content structure with typography-first design, code highlighting, and metadata displays.",
    component: BlogLayout,
  },
  "faq": {
    title: "Interactive FAQ",
    description: "Smooth accordion-based section for common user inquiries. Features beautiful animations and a clean, modern layout.",
    component: FaqSection,
  },
  "stats-wall": {
    title: "Impact Stats Wall",
    description: "High-impact, metric-heavy section for social proof and celebrating high-level business wins with bold typography.",
    component: StatsWall,
  },
  "newsletter": {
    title: "Premium Newsletter",
    description: "Conversion-focused mailing list signup with success states and premium hover effects. Built for audience growth.",
    component: NewsletterSection,
  },
  "cta": {
    title: "Global CTA Block",
    description: "High-impact final pitch for your landing page with dual action buttons, trust signals, and elegant gradients.",
    component: CtaSection,
  },
  "feature-cards": {
    title: "Feature Benefit Cards",
    description: "Elegant grid of feature cards with interactive hover highlights.",
    component: FeatureCards,
  },
  "footer-advanced": {
    title: "Advanced Global Footer",
    description: "Comprehensive site foundation with deep links and social integration.",
    component: FooterAdvanced,
  },
  "cookie-consent": {
    title: "GDPR Cookie Consent",
    description: "A highly customizable and non-intrusive cookie consent banner for privacy compliance.",
    component: CookieConsent,
  },
  "maintenance-page": {
    title: "Under Maintenance",
    description: "A beautiful maintenance page with a countdown timer to keep your users informed.",
    component: MaintenanceSection,
  },
  "login-form": {
    title: "Login / Auth Form",
    description: "A sleek authentication card with email & password fields, social OAuth buttons, and a modern gradient accent.",
    component: LoginForm,
  },
  "changelog-timeline": {
    title: "Changelog Timeline",
    description: "A vertical timeline of product releases with version tags, dates, and rich descriptions.",
    component: ChangelogTimeline,
  },
  "not-found-page": {
    title: "404 Not Found Page",
    description: "A custom, animated 404 page with a glitch effect and a prominent call-to-action to return home.",
    component: NotFoundPage,
  },
}
