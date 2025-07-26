import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* Add About and Contact sections here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;