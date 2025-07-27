import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import ComingSoon from './components/ComingSoon';
// import About from './sections/About';
// import Contact from './sections/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <ComingSoon /> {/* Replaces About */}
        <ComingSoon /> {/* Replaces Contact */}
      </main>
      {/*
      <Footer />
      */}
    </div>
  );
}

export default App;