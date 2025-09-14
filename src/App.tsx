import React, { Suspense, useState, createContext, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import ScrollManager from './components/ScrollManager';

// Lazy load components for better performance
const Resume = React.lazy(() => import('./sections/Resume'));
const Blog = React.lazy(() => import('./sections/Blog'));
const Footer = React.lazy(() => import('./components/Footer'));

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Check for saved theme in localStorage or user's system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useLayoutEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  // Component to group the main page sections
  const HomePage = () => (
    <>
      <Hero />
      <Projects />
      <About />
    </>
  );

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <Router>
        <ScrollManager />
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
          <Header />
          <main className="flex-grow pt-16"> {/* Add padding-top to offset fixed header */}
            <Suspense fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;

