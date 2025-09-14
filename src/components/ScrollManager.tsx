import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollManager = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the navigation state has a 'scrollTo' property
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo.substring(1);
      const elem = document.getElementById(targetId);
      
      if (elem) {
        // Use a short timeout to ensure the element is painted before scrolling
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
          // Clean up the state from history so it doesn't re-trigger
          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
      }
    } else {
      // For all other navigations, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  return null; // This component does not render anything
};

export default ScrollManager;

