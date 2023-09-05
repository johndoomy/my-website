import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home2() {
  let styling;
  if (window.innerWidth > 425) {
    styling = {
      backgroundPosition: '50% 20%',
      height: '700px',
    };
  } else {
    styling = {
      backgroundPosition: '50% 20%',
      height: '500px',
    };
  }
  return (
    <div className="overflow-hidden">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat hero-background"
        style={styling}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.15)] bg-fixed">
          <div className="flex h-full items-center md:items-start justify-center md:justify-normal">
            <div className="px-6 text-center md:px-12">
              <h1 className="mt-48 text-2xl text-white font-bold tracking-tight md:text-5xl xl:text-5xl">
                Hi I'm John!
              </h1>
              <h1 className="mb-8 text-2xl text-white font-bold tracking-tight md:text-5xl xl:text-5xl">
                Welcome to my webpage!
              </h1>
              <div className="flex justify-center mt-6">
                <Link to="/connect">
                  <Button
                    color="bg-complementary2"
                    hoverColor="hover:bg-complementary1"
                  >
                    Connect
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-8  bg-primary text-black pb-40">
        <p className="mb-8 text-xl">I'm a web developer based in Denver, CO</p>
        <Link className="text-black" to="/about">
          <Button
            color="bg-complementary2"
            hoverColor="hover:bg-complementary1"
          >
            About
          </Button>
        </Link>
      </div>
    </div>
  );
}
