import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FreeContent } from './components/FreeContent';
import { AdsSection } from './components/AdsSection';
import { PaidUpgradeCTA } from './components/PaidUpgradeCTA';
import { Footer } from './components/Footer';
import { Newsletter } from './components/Newsletter';
import { ArticlesSection } from './components/ArticlesSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FreeContent />
        <AdsSection />
        <PaidUpgradeCTA />
        <Newsletter />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;