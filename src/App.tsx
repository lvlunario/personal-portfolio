
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import ComingSoon from './components/ComingSoon';

const Blog = React.lazy(() => import('./sections/Blog'));
const Contact = React.lazy(() => import('./sections/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Projects />
                  <ComingSoon /> {/* Replaces About */}
                  <ComingSoon /> {/* Replaces Contact */}
                </>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;