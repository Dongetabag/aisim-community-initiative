import { CropSection } from "@/components/CropSection";
import { BudgetSection } from "@/components/BudgetSection";
import { GrowthPlan } from "@/components/GrowthPlan";
import { GettingStarted } from "@/components/GettingStarted";
import { SystemComparison } from "@/components/SystemComparison";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { TroubleshootSection } from "@/components/TroubleshootSection";
import { AccessibilitySection } from "@/components/AccessibilitySection";
import { ROISection } from "@/components/ROISection";
import { AIUpgradePath } from "@/components/AIUpgradePath";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-bg-tertiary bg-bg-secondary/95 backdrop-blur px-6 py-3 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-xl font-bold">
            <span className="text-green-dark">AISIM</span>{" "}
            <span className="text-text-muted font-normal">Community</span>
          </span>
          <div className="hidden gap-6 text-sm font-medium text-text-secondary md:flex">
            <a href="#start" className="hover:text-green transition">Start</a>
            <a href="#crops" className="hover:text-green transition">Crops</a>
            <a href="#systems" className="hover:text-green transition">Systems</a>
            <a href="#budget" className="hover:text-green transition">Budget</a>
            <a href="#roi" className="hover:text-green transition">Savings</a>
            <a href="#care" className="hover:text-green transition">Care</a>
            <a href="#ai" className="hover:text-green transition">AI</a>
            <a href="#troubleshoot" className="hover:text-green transition">Help</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative bg-bg-hero px-6 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 inline-block rounded-full border border-coral/60 bg-coral/10 px-5 py-1.5 text-sm font-semibold tracking-wide text-coral uppercase">
            AISIM Community Initiative — West Springfield, MA
          </p>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Grow Your Own Food
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
            A step-by-step guide to growing fresh herbs and greens indoors —
            designed for everyone, including elderly family and community members.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#start" className="rounded-full bg-coral px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-coral/90 hover:shadow-xl">
              Getting started
            </a>
            <a href="#crops" className="rounded-full bg-white/15 border border-white/30 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/25">
              What to grow
            </a>
            <a href="#budget" className="rounded-full bg-white/15 border border-white/30 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/25">
              Budget
            </a>
            <a href="#plan" className="rounded-full bg-white/15 border border-white/30 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/25">
              Growth plan
            </a>
          </div>
        </div>
      </header>

      <GettingStarted />
      <CropSection />
      <SystemComparison />
      <BudgetSection />
      <ROISection />
      <GrowthPlan />
      <AIUpgradePath />
      <MaintenanceSection />
      <TroubleshootSection />
      <AccessibilitySection />

      {/* Footer */}
      <footer className="border-t border-bg-tertiary bg-green-dark px-6 py-10 text-center text-white/70">
        <p className="text-lg">
          <span className="font-bold text-white">AISIM</span> Community Initiative — West Springfield, MA
        </p>
        <p className="mt-2">Growing food, growing community. Part of the Springfield AI Initiative.</p>
        <p className="mt-1 text-white/50 text-sm">Powered by AI Sim Intelligence — ESP32 sensors, Claude API, computer vision</p>
      </footer>
    </div>
  );
}
