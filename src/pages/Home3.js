import Typewriter from '../components/TypeWriter';

export default function Home3({ windowWidth }) {
  const lines = ["Hi I'm John", 'Welcome to my webpage!'];
  let intro = (
    <div className="flex items-center md:items-start justify-center md:justify-normal">
      <div className="px-6 text-center md:text-left h-48 md:px-12">
        <h1 className="">
          <Typewriter texts={lines} />
        </h1>
      </div>
    </div>
  );

  let mobile = true;
  let image;
  let styling;
  if (windowWidth > 1023) {
    mobile = false;
    image =
      'https://johnpersonalwebsite.s3.amazonaws.com/images/color-right.png';
    styling = {
      backgroundPosition: '40% 65%',
      height: '800px',
    };
  } else if (windowWidth < 1024 && windowWidth > 768) {
    mobile = false;
    image =
      'https://johnpersonalwebsite.s3.amazonaws.com/images/color-right.png';
    styling = {
      backgroundPosition: '40% 65%',
      height: '600px',
    };
  } else if (windowWidth < 769 && windowWidth > 425) {
    image =
      'https://johnpersonalwebsite.s3.amazonaws.com/images/square-color.png';
    styling = {
      backgroundPosition: '50% 20%',
      height: '600px',
    };
  } else {
    image =
      'https://johnpersonalwebsite.s3.amazonaws.com/images/square-color.png';
    styling = {
      backgroundPosition: '50% 20%',
      height: '500px',
    };
  }
  return (
    <div id="home" className="overflow-hidden bg-primary">
      {mobile && intro}
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat animate-fadeIn-.4"
        style={{
          ...styling,
          backgroundImage: `url(${image})`,
        }}
      >
        <div className=" absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
          {!mobile && intro}
        </div>
      </div>
    </div>
  );
}
