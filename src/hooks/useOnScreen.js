import { useState, useEffect } from 'react';

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection State:', entry.isIntersecting); // Debugging line
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust threshold to control when callback is invoked
        rootMargin: '0px', // Adjust rootMargin if needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
