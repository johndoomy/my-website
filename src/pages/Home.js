import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Home({ img }) {
  const text = (
    <div className="w-72 ">
      <h1 className="text-3xl flex justify-center">Hi I'm John!</h1>
      <p className="text-center mt-4">
        Welcome to my personal website! I'm an aspiring web developer located in
        Denver, CO specializing in Javascript and React.
      </p>
      <div className="flex justify-center mt-6">
        <Link to="/contact">
          <Button text="Contact" />
        </Link>
      </div>
    </div>
  );
  return (
    <>
      <div className=" w-full pt-8 md:pt-20 ">
        <img
          className="md:h-80 md:ml-72 animate-fadeIn-.4"
          src={img}
          alt="John Doomy"
        />
        {/* <div className="mt-48 ml-48 mr-64 animate-fadeIn-1">
          {window.innerWidth > 425 && text}
        </div> */}
      </div>

      <div className="bg-white pt-10 pb-64 flex justify-center animate-fadeIn-1">
        {text}
      </div>
    </>
  );
}
