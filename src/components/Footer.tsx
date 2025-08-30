import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-card-border text-foreground/70">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} Leonardo Lunario. All rights reserved.</p>
            <p className="text-xs mt-1">Built with React, TypeScript, and Tailwind CSS.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/lvlunario" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <FiGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/LeonardoLunario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <FiLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;