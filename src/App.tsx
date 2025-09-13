import React, { Suspense, useState, createContext, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
// import Contact from './sections/Contact';

const Resume = React.lazy(() => import('./sections/Resume'));
const Blog = React.lazy(() => import('./sections/Blog'));
const Footer = React.lazy(() => import('./components/Footer'));

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useLayoutEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <Router>
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Projects />
                    <About />
                    {/* <Contact /> */}
                  </>
                } />
                {/* Add the new route for your resume page */}
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
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