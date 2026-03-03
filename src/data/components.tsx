import dynamic from "next/dynamic"

const DashboardStats = dynamic(() => import("@/components/sections/DashboardStats").then(m => ({ default: m.DashboardStats })))
const BentoFeatures = dynamic(() => import("@/components/sections/BentoFeatures").then(m => ({ default: m.BentoFeatures })))
const PricingTable = dynamic(() => import("@/components/sections/PricingTable").then(m => ({ default: m.PricingTable })))
const ApiQuickstart = dynamic(() => import("@/components/sections/ApiQuickstart").then(m => ({ default: m.ApiQuickstart })))
const TeamSection = dynamic(() => import("@/components/sections/TeamSection").then(m => ({ default: m.TeamSection })))
const WorkflowSteps = dynamic(() => import("@/components/sections/WorkflowSteps").then(m => ({ default: m.WorkflowSteps })))
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })))
const SecuritySection = dynamic(() => import("@/components/sections/SecuritySection").then(m => ({ default: m.SecuritySection })))
const InfraSection = dynamic(() => import("@/components/sections/InfraSection").then(m => ({ default: m.InfraSection })))
const GlobalDistribution = dynamic(() => import("@/components/sections/GlobalDistribution").then(m => ({ default: m.GlobalDistribution })))
const IntegrationsSection = dynamic(() => import("@/components/sections/IntegrationsSection").then(m => ({ default: m.IntegrationsSection })))
const BlogLayout = dynamic(() => import("@/components/sections/BlogLayout").then(m => ({ default: m.BlogLayout })))
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then(m => ({ default: m.FaqSection })))
const StatsWall = dynamic(() => import("@/components/sections/StatsWall").then(m => ({ default: m.StatsWall })))
const NewsletterSection = dynamic(() => import("@/components/sections/NewsletterSection").then(m => ({ default: m.NewsletterSection })))
const CtaSection = dynamic(() => import("@/components/sections/CtaSection").then(m => ({ default: m.CtaSection })))
const FeatureCards = dynamic(() => import("@/components/sections/FeatureCards").then(m => ({ default: m.FeatureCards })))
const FooterAdvanced = dynamic(() => import("@/components/sections/FooterAdvanced").then(m => ({ default: m.FooterAdvanced })))
const CookieConsent = dynamic(() => import("@/components/sections/CookieConsent").then(m => ({ default: m.CookieConsent })))
const MaintenanceSection = dynamic(() => import("@/components/sections/MaintenanceSection").then(m => ({ default: m.MaintenanceSection })))
const LoginForm = dynamic(() => import("@/components/sections/LoginForm").then(m => ({ default: m.LoginForm })))
const ChangelogTimeline = dynamic(() => import("@/components/sections/ChangelogTimeline").then(m => ({ default: m.ChangelogTimeline })))
const NotFoundPage = dynamic(() => import("@/components/sections/NotFoundPage").then(m => ({ default: m.NotFoundPage })))
const HeroCentered = dynamic(() => import("@/components/sections/HeroCentered").then(m => ({ default: m.HeroCentered })))
const HeroVideo = dynamic(() => import("@/components/sections/HeroVideo").then(m => ({ default: m.HeroVideo })))
const HeroSplitForm = dynamic(() => import("@/components/sections/HeroSplitForm").then(m => ({ default: m.HeroSplitForm })))
const SidebarNavigation = dynamic(() => import("@/components/sections/SidebarNavigation").then(m => ({ default: m.SidebarNavigation })))

export const COMPONENTS: Record<string, { title: string; description: string; component: React.ComponentType }> = {
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
  "hero-centered": {
    title: "Centered Hero",
    description: "A bold, centered hero section with gradient heading, dual CTAs, and radial background effects.",
    component: HeroCentered,
  },
  "hero-video": {
    title: "Video Background Hero",
    description: "A cinematic hero with full-width background video, dark overlay, and layered content.",
    component: HeroVideo,
  },
  "hero-split-form": {
    title: "Hero with Signup Form",
    description: "A split-layout hero with headline and value props on the left and a waitlist form card on the right.",
    component: HeroSplitForm,
  },
  "sidebar-navigation": {
    title: "Sidebar Navigation",
    description: "A collapsible sidebar with grouped nav items, active states, badges, search, and user profile.",
    component: SidebarNavigation,
  },
}
