import React from 'react';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { TableOfContent } from './components/TableOfContent';
import { Fixtek } from './components/projects/Fixtek';
import { GachDo } from './components/projects/GachDo';
import { CaloFix } from './components/projects/CaloFix';
import { PhenCha } from './components/projects/PhenCha';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-blue-accent selection:text-white relative">
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-[#C8DFFC] via-[#EAF2FF] to-white pointer-events-none -z-10"></div>
      <main className="flex flex-col items-center">
        <Header />
        <AboutMe />
        <TableOfContent />
        <Fixtek />
        <GachDo />
        <CaloFix />
        <PhenCha />
      </main>
      <Footer />
    </div>
  );
}

