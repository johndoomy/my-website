import { useState, useEffect } from 'react';
import Header2 from './components/Header2';
import Sidebar from './components/Sidebar';
import Home3 from './pages/Home3';
import About3 from './pages/About3';
import Portfolio2 from './pages/Portfolio2';
import Connect from './pages/Connect';
import Footer from './components/Footer';

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
    <div className="">
      {windowWidth > 425 ? <Header2 /> : <Sidebar />}
      <Home3 windowWidth={windowWidth} />
      <About3 />
      <Portfolio2 windowWidth={windowWidth} />
      <Connect />
      <Footer />
    </div>
  );
}
