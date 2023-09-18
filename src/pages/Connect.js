import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import Button from '../components/Button';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function Connect() {
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const isVisible3 = useOnScreen(ref3);
  const isVisible4 = useOnScreen(ref4);
  const isVisible5 = useOnScreen(ref5);

  return (
    <div id="connect" className="overflow-hidden">
      <p className="py-16 md:py-32 text-center text-3xl">
        Thank you for visiting!
      </p>
      <div className="pb-24 px-6 flex justify-center text-lg">
        <p className="text-center md:w-80">
          If you have any questions or inquiries, please feel free to connect
          with me via email, and I will respond as soon as possible!
        </p>
      </div>
      <div className="mx-10 mb-48 md:mb-72 px-6 bg-complementary4">
        <h1 className="text-2xl pt-16 mb-6 text-center">
          Let's get connected!
        </h1>
        <div className="ml-4 md:ml-12 py-10 text-center md:flex md:justify-evenly md:text-2xl">
          <div
            ref={ref3}
            className={`mb-4 ${isVisible3 && 'animate-slideFadeInRight-1'}`}
          >
            <Button
              color="bg-tertiary"
              hoverColor="hover:bg-complementary1"
              clickFunction={() =>
                (window.location = 'mailto:johndoomyjr@gmail.com')
              }
            >
              <div className="flex justify-center align-middle">
                <span className="text-2xl md:text-3xl mr-2">
                  <MdEmail />
                </span>
                <span>Email</span>
              </div>
            </Button>
          </div>
          <div
            ref={ref4}
            className={`mb-4 ${isVisible4 && 'animate-slideFadeInRight-2'}`}
          >
            <a
              href="https://github.com/johndoomy"
              rel="noreferrer"
              target="_blank"
            >
              <Button color="bg-tertiary" hoverColor="hover:bg-complementary1">
                <div className="flex justify-center align-middle">
                  <span className="text-2xl md:text-3xl mr-2">
                    <BsGithub />
                  </span>
                  <span>GitHub</span>
                </div>
              </Button>
            </a>
          </div>
          <div
            ref={ref5}
            className={`mb-4 ${isVisible5 && 'animate-slideFadeInRight-3'}`}
          >
            <a
              href="https://www.linkedin.com/in/john-doomy"
              rel="noreferrer"
              target="_blank"
            >
              <Button color="bg-tertiary" hoverColor="hover:bg-complementary1">
                <div className="flex justify-center align-middle">
                  <span className="text-2xl md:text-3xl mr-2">
                    <BsLinkedin />
                  </span>
                  <span>LinkedIn</span>
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
