import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import HowItWorks from '../components/home/HowItWorks';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <HowItWorks />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
