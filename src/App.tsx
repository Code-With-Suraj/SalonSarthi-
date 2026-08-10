import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsBanner } from './components/MetricsBanner';
import { ProblemSolution } from './components/ProblemSolution';
import { FeaturePillars } from './components/FeaturePillars';
import { SetupSteps } from './components/SetupSteps';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { LiveDemoModal } from './components/LiveDemoModal';
import { FreeTrialModal } from './components/FreeTrialModal';

export default function App() {
  const [liveDemoOpen, setLiveDemoOpen] = useState(false);
  const [liveDemoMode, setLiveDemoMode] = useState<'owner' | 'customer'>('owner');
  const [freeTrialOpen, setFreeTrialOpen] = useState(false);

  const handleOpenLiveDemo = (mode: 'owner' | 'customer' = 'owner') => {
    setLiveDemoMode(mode);
    setLiveDemoOpen(true);
  };

  const handleOpenFreeTrial = () => {
    setFreeTrialOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 antialiased">
      
      {/* Top Navbar */}
      <Navbar
        onOpenLiveDemo={handleOpenLiveDemo}
        onOpenFreeTrial={handleOpenFreeTrial}
      />

      {/* Main Page Layout */}
      <main>
        {/* First Fold Hero */}
        <HeroSection
          onOpenLiveDemo={handleOpenLiveDemo}
          onOpenFreeTrial={handleOpenFreeTrial}
        />

        {/* Key Metrics Banner */}
        <MetricsBanner />

        {/* Problem vs SalonSarthi Solution */}
        <ProblemSolution onOpenLiveDemo={handleOpenLiveDemo} />

        {/* Core Feature Pillars with Interactive Tools */}
        <FeaturePillars onOpenLiveDemo={handleOpenLiveDemo} />

        {/* 3-Step Setup */}
        <SetupSteps onOpenFreeTrial={handleOpenFreeTrial} />

        {/* Pricing & Subscription */}
        <PricingSection onOpenFreeTrial={handleOpenFreeTrial} />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Bottom CTA & Sticky Bar */}
        <CallToAction
          onOpenFreeTrial={handleOpenFreeTrial}
          onOpenLiveDemo={handleOpenLiveDemo}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Live App Demo Modal (Owner + Customer Viewport Switcher) */}
      <LiveDemoModal
        isOpen={liveDemoOpen}
        onClose={() => setLiveDemoOpen(false)}
        initialMode={liveDemoMode}
      />

      {/* 14-Day Free Trial Wizard Modal */}
      <FreeTrialModal
        isOpen={freeTrialOpen}
        onClose={() => setFreeTrialOpen(false)}
        onSuccessDemoLaunch={() => handleOpenLiveDemo('owner')}
      />

    </div>
  );
}
