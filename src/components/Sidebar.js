import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const elementPosition = element.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
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
      if (homePosition.top <= 0) {
        setActiveSection('home');
        setIsOpen(false);
      }
      if (aboutPosition.top <= 0) {
        setActiveSection('about');
        setIsOpen(false);
      }
      if (portfolioPosition.top <= 0) {
        setActiveSection('portfolio');
        setIsOpen(false);
      }
      if (connectPosition.top <= 0) {
        setActiveSection('connect');
        setIsOpen(false);
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="z-50 fixed top-8 cursor-pointer right-8 border-2 border-black rounded-full bg-black shadow-md">
        <button onClick={handleClick} className="text-3xl text-tertiary p-2 ">
          <AiOutlineMenu />
        </button>
      </div>
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="z-20 fixed bg-black opacity-50 w-screen h-screen"
          ></div>
        </>
      )}
      <div
        className={`bg-white h-screen z-40 w-72 fixed top-0 right-0 ease-in-out duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mt-32 text-right">
          <div
            onClick={() => scrollToSection('home')}
            className={activeSection === 'home' ? selectedStyling : baseStyling}
          >
            <button>Home</button>
          </div>
          <div
            onClick={() => scrollToSection('about')}
            className={
              activeSection === 'about' ? selectedStyling : baseStyling
            }
          >
            <button>About</button>
          </div>
          <div
            onClick={() => scrollToSection('portfolio')}
            className={
              activeSection === 'portfolio' ? selectedStyling : baseStyling
            }
          >
            <button>Portfolio</button>
          </div>
          <div
            onClick={() => scrollToSection('connect')}
            className={
              activeSection === 'connect' ? selectedStyling : baseStyling
            }
          >
            <button>Connect</button>
          </div>
        </div>
      </div>
    </>
  );
}
