import { useState, useEffect } from 'react';
import Header2 from './components/Header2';
import Home3 from './pages/Home3';
import About3 from './pages/About3';
import Portfolio2 from './pages/Portfolio2';
import Connect from './pages/Connect';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header2 />
      <Home3 windowWidth={windowWidth} />
      <About3 />
      <Portfolio2 />
      <Connect />
    </div>
  );
}
