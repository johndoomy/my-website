import Button from '../components/Button';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function Connect() {
  return (
    <div className="">
      <div className="py-24 px-6 flex justify-center text-lg">
        <p className="text-center md:w-80">
          If you have any questions or inquiries, please feel free to connect
          with me via email, and I will respond as soon as possible!
        </p>
      </div>
      <div className="px-6 bg-secondary ">
        <h1 className="text-2xl pt-16 mb-6 text-center">
          Let's get connected!
        </h1>
        <div className="ml-4 md:ml-12 py-10 text-center md:flex md:justify-evenly md:text-2xl">
          <div className="mb-4 animate-slideFadeInRight-1">
            <Button
              color="bg-complementary2"
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
          <div className="mb-4 animate-slideFadeInRight-2">
            <a
              href="https://github.com/johndoomy"
              rel="noreferrer"
              target="_blank"
            >
              <Button
                color="bg-complementary2"
                hoverColor="hover:bg-complementary1"
              >
                <div className="flex justify-center align-middle">
                  <span className="text-2xl md:text-3xl mr-2">
                    <BsGithub />
                  </span>
                  <span>GitHub</span>
                </div>
              </Button>
            </a>
          </div>
          <div className="mb-4 animate-slideFadeInRight-3">
            <a
              href="https://www.linkedin.com/in/john-doomy-84b23a204/"
              rel="noreferrer"
              target="_blank"
            >
              <Button
                color="bg-complementary2"
                hoverColor="hover:bg-complementary1"
              >
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
