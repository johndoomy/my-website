import { useState, useEffect } from 'react';

export default function Header2() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const headerOffset = 52;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const homePosition = document
      .getElementById('home')
      .getBoundingClientRect();

    const aboutPosition = document
      .getElementById('about')
      .getBoundingClientRect();

    const portfolioPosition = document
      .getElementById('portfolio')
      .getBoundingClientRect();

    const connectPosition = document
      .getElementById('connect')
      .getBoundingClientRect();

    const postionArray = [
      homePosition,
      aboutPosition,
      portfolioPosition,
      connectPosition,
    ];

    postionArray.forEach((position) => {
      if (homePosition.top <= 52 && homePosition.bottom >= 0) {
        setActiveSection('home');
      }
      if (aboutPosition.top <= 52 && aboutPosition.bottom >= 0) {
        setActiveSection('about');
      }
      if (portfolioPosition.top <= 52 && portfolioPosition.bottom >= 0) {
        setActiveSection('portfolio');
      }
      if (connectPosition.top <= 52 && connectPosition.bottom >= 0) {
        setActiveSection('connect');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const baseStyling =
    'px-7 w-auto py-4 md:px-12 md:hover:bg-tertiary text-primary';
  const selectedStyling =
    'px-7 w-auto py-4 md:px-12 bg-complementary1 text-primary';

  return (
    <div className="h-15 w-full z-10 text-sm sticky top-0 bg-white">
      <div className=" w-full bg-transparent flex justify-between md:justify-end">
        <div>
          <button
            className={activeSection === 'home' ? selectedStyling : baseStyling}
            onClick={() => {
              scrollToSection('home');
            }}
          >
            Home
          </button>
        </div>
        <div>
          <button
            className={
              activeSection === 'about' ? selectedStyling : baseStyling
            }
            onClick={() => {
              scrollToSection('about');
            }}
          >
            About
          </button>
        </div>
        <div>
          <button
            className={
              activeSection === 'portfolio' ? selectedStyling : baseStyling
            }
            onClick={() => {
              scrollToSection('portfolio');
            }}
          >
            Portfolio
          </button>
        </div>
        <div>
          <button
            className={
              activeSection === 'connect' ? selectedStyling : baseStyling
            }
            onClick={() => {
              scrollToSection('connect');
            }}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
