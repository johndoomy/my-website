import { useRef } from 'react';
// import useOnScreen from '../hooks/useOnScreen';
import Button from './Button';
import { BsGithub, BsGlobe2 } from 'react-icons/bs';

export default function PortfolioCard({
  windowWidth,
  textColor,
  bgColor,
  title,
  children,
  media1,
  media2,
  gitHubLink,
  websiteLink,
}) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  // const isVisible1 = useOnScreen(ref1);
  // const isVisible2 = useOnScreen(ref2);

  let smallMobile = false;
  if (windowWidth < 376) {
    smallMobile = true;
  } else {
    smallMobile = false;
  }

  return (
    <div className={` p-6 pt-8 ${bgColor} ${textColor}`}>
      <h1 className="text-2xl mb-8 md:mb-0 animate-fadeIn-1">{title}</h1>
      <div className="lg:flex lg:justify-around md:w-auto animate-fadeIn-1">
        {children[0]}
        <div className={`${smallMobile ? '' : 'flex justify-normal'}`}>
          {media1.type === 'video' ? (
            <video
              ref={ref1}
              //animation bug, add back after fix: ${isVisible1 && 'animate-slideFadeInRight-1'}
              className={`md:mr-24 h-80 md:h-auto md:w-64 mx-auto my-10 border-2 border-black rounded-2xl drop-shadow-xl opacity-100 `}
              src={media1.src}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              ref={ref1}
              //animation bug, add back after fix: ${isVisible1 && 'animate-slideFadeInRight-1'}
              className={`md:mr-24 h-80 md:h-auto md:w-64 mx-auto my-10 border-2 border-black rounded-2xl drop-shadow-xl opacity-100 `}
              src={media1.src}
              alt="screenshot of web application"
            />
          )}
          {media2.type === 'video' ? (
            <video
              ref={ref2}
              className={` h-80 mx-auto md:h-auto md:w-64 my-10 border-2 border-black rounded-2xl drop-shadow-xl opacity-100 `}
              src={media2.src}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              ref={ref2}
              className={` h-80 mx-auto md:h-auto md:w-64 my-10 border-2 border-black rounded-2xl drop-shadow-xl opacity-100 `}
              src={media2.src}
              alt="screenshot of web application"
            />
          )}
        </div>
      </div>

      {children[1]}
      {children[2]}
      <div className="my-8 text-center flex justify-evenly md:justify-center text-black">
        <div className="md:mr-8">
          {gitHubLink ? (
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
          ) : null}
        </div>
        <div>
          {websiteLink ? (
            <a
              href={websiteLink}
              className=" "
              rel="noreferrer"
              target="_blank"
            >
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
