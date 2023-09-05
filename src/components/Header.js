import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [selected, setSelected] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setSelected(0);
    }
    if (location.pathname === '/about') {
      setSelected(1);
    }
    if (location.pathname === '/portfolio') {
      setSelected(2);
    }
    if (location.pathname === '/connect') {
      setSelected(3);
    }
  }, [location]);

  const baseStyling = 'px-7 w-auto py-4 md:px-12 md:hover:bg-primary';
  const selectedStyling = 'px-7 w-auto py-4 md:px-12 bg-primary';

  return (
    <div className="h-15 w-full z-10 text-sm sticky top-0 bg-complementary1">
      <div className=" w-full bg-transparent flex justify-between md:justify-end">
        <div>
          <Link to="/">
            <button className={selected === 0 ? selectedStyling : baseStyling}>
              Home
            </button>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <button className={selected === 1 ? selectedStyling : baseStyling}>
              About
            </button>
          </Link>
        </div>
        <div>
          <Link to="/portfolio">
            <button className={selected === 2 ? selectedStyling : baseStyling}>
              Portfolio
            </button>
          </Link>
        </div>
        <div>
          <Link to="/connect">
            <button className={selected === 3 ? selectedStyling : baseStyling}>
              Connect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
