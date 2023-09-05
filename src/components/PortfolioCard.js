import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import Button from './Button';
import { BsGithub, BsGlobe2 } from 'react-icons/bs';

export default function PortfolioCard({
  bgColor,
  title,
  children,
  img1,
  img2,
  gitHubLink,
  websiteLink,
}) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isVisible1 = useOnScreen(ref1);
  const isVisible2 = useOnScreen(ref2);

  // let styling = null;
  // if (window.innerWidth > 425) {
  //   styling = {
  //     height: '530px',
  //   };
  // }

  return (
    <div className={` p-6 pt-8 ${bgColor}`}>
      <h1 className="text-2xl mb-8 md:mb-0 animate-fadeIn-1">{title}</h1>
      <div className="md:flex md:justify-around animate-fadeIn-1">
        {children[0]}
        <div className="flex justify-normal">
          <img
            ref={ref1}
            className={`md:mr-24 h-80 md:h-auto md:w-64 mx-auto my-10 border-2 border-black rounded-2xl drop-shadow-xl opacity-0 ${
              isVisible1 && 'animate-slideFadeInRight-1'
            }`}
            src={img1}
            alt="screenshot of web application"
          />
          <img
            ref={ref2}
            className={` h-80 mx-auto md:h-auto md:w-64 my-10 border-2 border-black rounded-2xl drop-shadow-xl opacity-0 ${
              isVisible2 && 'animate-slideFadeInRight-2'
            }`}
            src={img2}
            alt="screenshot of web application"
          />
        </div>
      </div>
      {children[1]}
      <div className="my-8 text-center flex justify-evenly md:justify-center">
        <div className="md:mr-8">
          <a href={gitHubLink} className=" " rel="noreferrer" target="_blank">
            <Button
              color="bg-complementary2"
              hoverColor="hover:bg-complementary1"
            >
              <div className="flex justify-center align-middle ">
                <span className="text-2xl  mr-2">
                  <BsGithub />
                </span>
                <span>GitHub</span>
              </div>
            </Button>
          </a>
        </div>
        <div>
          <a href={websiteLink} className=" " rel="noreferrer" target="_blank">
            <Button
              color="bg-complementary2"
              hoverColor="hover:bg-complementary1"
            >
              <div className="flex justify-center align-middle">
                <span className="text-2xl mr-2">
                  <BsGlobe2 />
                </span>
                <span>Website</span>
              </div>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
