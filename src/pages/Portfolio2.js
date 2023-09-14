import PortfolioCard from '../components/PortfolioCard';
import stronglifts1 from '../images/stronglifts1.png';
import stronglifts2 from '../images/stronglifts2.png';
import recipeai1 from '../images/recipeai1.png';
import recipeai2 from '../images/recipeai2.png';
import supperbell1 from '../images/supperbell1.png';
import supperbell2 from '../images/supperbell2.png';

export default function Portfolio2() {
  const baseStyling = 'lg:w-80 md:mt-20 md:text-lg';
  return (
    <div id="portfolio">
      <div className="pt-8 px-8 md:pr-0 md:w-80 pb-16 md:m-auto">
        <h1 className="text-3xl mb-12 animate-fadeIn-.4">My Portfolio</h1>
        <p className="animate-fadeIn-1">
          Here are the major projects I have built over the past 2 years that I
          believe demonstrate progressive growth. Starting with the latest
          projects first.
        </p>
      </div>
      <PortfolioCard
        textColor="text-tertiary"
        bgColor="bg-[#092032]"
        title="Recipe.AI Recipe Generator"
        img1={recipeai1}
        img2={recipeai2}
        gitHubLink="https://github.com/johndoomy/recipe.ai"
        websiteLink="http://recipe-ai.net/"
      >
        <div className={baseStyling}>
          <h2 className="text-xl text-complementary4">Purpose</h2>
          <p className="mb-6">Generate any recipe by integrating chatGPT</p>
          <h2 className="text-xl text-complementary4">About</h2>
          <p>
            For my latest project, I wanted to learn how to implement a full
            stack application using the MERN (MongoDB, Express js, React,
            Node.js) tech stack. I also wanted to familiarize myself with the
            chatGPT API and also learn React-Redux.
          </p>
        </div>

        <div className="flex justify-center">
          <p>Technologies Used:</p>

          <ul className="ml-6 -indent-5 pl-4">
            <li>MERN Tech Stack</li>
            <li>Mongoose</li>
            <li>React-Redux</li>
            <li>React-Router</li>
            <li>AWS EC2</li>
            <li>Material UI</li>
            <li>chatGPT API</li>
            <li>React-Redux</li>
            <li>JWT for user verification</li>
            <li>Bcrypt for password encryption</li>
          </ul>
        </div>
        <p className="pt-4 text-center">
          Note: Testing login is email: test@test.com, password: 123
        </p>
      </PortfolioCard>
      <PortfolioCard
        textColor="text-tertiary"
        bgColor="bg-[#224275]"
        title="StrongLifts Workout Tracker"
        img1={stronglifts1}
        img2={stronglifts2}
        gitHubLink="https://github.com/johndoomy/stronglifts"
        websiteLink="https://main.d2fech0f4131sc.amplifyapp.com/"
      >
        <div className={baseStyling}>
          <h2 className="text-xl text-complementary4">Purpose</h2>
          <p className="mb-6">Track workout routine</p>
          <h2 className="text-xl text-complementary4">About</h2>
          <p>
            My goals for this project were to familiarize myself with AWS
            services and serverless architecture. This web application is
            serverless, and it utilizes AWS Lambda functions along with AWS API
            Gateway to directly communicate to my database in DynamoDB.
          </p>
        </div>

        <div className="flex justify-center">
          <p>Technologies Used:</p>
          <ul className="ml-6 -indent-5 pl-4">
            <li>Javascript(React)</li>
            <li>TailwindCSS</li>
            <li>Framer Motion for animations</li>
          </ul>
        </div>
      </PortfolioCard>

      <PortfolioCard
        textColor="text-tertiary"
        bgColor="bg-[#404042]"
        title="SupperBell Cooking App"
        img1={supperbell1}
        img2={supperbell2}
        gitHubLink="https://github.com/johndoomy/supperbell-cooking-app"
        websiteLink="https://vocal-blancmange-a70d03.netlify.app/"
      >
        <div className={baseStyling}>
          <h2 className="text-xl text-complementary4">Purpose</h2>
          <p className="mb-6">
            Allow SupperBell cooks to store and scale up recipes
          </p>
          <h2 className="text-xl text-complementary4">About</h2>
          <p>
            This project, while unfinished, was my first major project that I
            conceived while working at an online food delivery business called
            SupperBell. I found a need in our kitchen to help the cooks be able
            to scale up recipes in order to cut out errors in their day to day
            duties. I unfortunately was not able to finish this project before
            leaving the company, so I have yet to go back and complete it.
          </p>
        </div>

        <div className="flex justify-center">
          <p>Technologies Used:</p>
          <ul className="ml-6 -indent-5 pl-4">
            <li>Javascript(React)</li>
            <li>CSS</li>
          </ul>
        </div>
      </PortfolioCard>
    </div>
  );
}
