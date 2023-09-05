import PortfolioCard from '../components/PortfolioCard';
import stronglifts1 from '../images/stronglifts1.png';
import stronglifts2 from '../images/stronglifts2.png';
import recipeai1 from '../images/recipeai1.png';
import recipeai2 from '../images/recipeai2.png';
import supperbell1 from '../images/supperbell1.png';
import supperbell2 from '../images/supperbell2.png';

export default function Portfolio() {
  const baseStyling =
    'md:text-center indent-6 md:indent-0 md:w-80 md:mt-32 md:text-lg';
  return (
    <div>
      <div className="pt-16 w-80 text-center mx-auto pb-16">
        <h1 className="text-2xl mb-12 animate-fadeIn-.4">My Portfolio</h1>
        <p className="animate-fadeIn-1">
          I am presenting my portfolio as a progression in my learning journey.
          I have 3 projects that I believe show a clear line of progression over
          the last 2 years of building up and improving my competency in web
          development. It is ordered from oldest to newest to reflect this
          progression.
        </p>
      </div>
      <PortfolioCard
        bgColor="bg-primary"
        title="SupperBell Cooking App"
        img1={supperbell1}
        img2={supperbell2}
        gitHubLink="https://github.com/johndoomy/supperbell-cooking-app"
        websiteLink="https://vocal-blancmange-a70d03.netlify.app/"
      >
        <p className={baseStyling}>
          This project, while unfinished, was my first major project that I
          conceived while working at an online food delivery business called
          SupperBell. I found a need in our kitchen to help the cooks be able to
          scale up recipes in order to cut out errors in their day to day
          duties. I unfortunately was not able to finish this project before
          leaving the company, so I have yet to go back and complete it. This
          project was originally written using only vanilla HTML, Javascript,
          and CSS. I rewrote this program several times while learning more and
          more of Javascript until I finally discovered React.
        </p>
        <div className="flex justify-center">
          <p>Technologies Used:</p>
          <ul className="ml-6">
            <li>Javascript(React)</li>
            <li>CSS</li>
          </ul>
        </div>
      </PortfolioCard>
      <PortfolioCard
        bgColor="bg-white"
        title="StrongLifts Workout Tracker"
        img1={stronglifts1}
        img2={stronglifts2}
        gitHubLink="https://github.com/johndoomy/stronglifts"
        websiteLink="https://main.d2fech0f4131sc.amplifyapp.com/"
      >
        <p className={baseStyling}>
          This project was designed as a proof of concept to keep track of my
          workout routine. My goals for this project were to familiarize myself
          with AWS services and serverless architecture. This web application is
          serverless, and it utilizes AWS Lambda functions along with AWS API
          Gateway to directly communicate to my database in DynamoDB. My future
          goals for this project are to implement graphing functionality as well
          as implement a user login system.
        </p>
        <div className="flex justify-center">
          <p>Technologies Used:</p>
          <ul className="ml-6">
            <li>Javascript(React)</li>
            <li>TailwindCSS</li>
            <li>Framer Motion for animations</li>
          </ul>
        </div>
      </PortfolioCard>
      <PortfolioCard
        bgColor="bg-primary"
        title="Recipe.AI Recipe Generator"
        img1={recipeai1}
        img2={recipeai2}
        gitHubLink="https://github.com/johndoomy/recipe.ai"
        websiteLink="http://recipe-ai.net/"
      >
        <p className={baseStyling}>
          For my latest project, I wanted to learn how to implement a full stack
          application using the MERN (MongoDB, Express js, React, Node.js) tech
          stack. I also wanted to familiarize myself with the chatGPT API and
          also learn React-Redux. After cooking a recipe that I had asked
          chatGPT to create, it was very delicious if you are wondering, I
          decided to revisit my idea of a recipe app where one could create and
          store recipes. This web application allows the user to type in a
          desired recipe and make a call to chatGPT to create and send back a
          detailed recipe for any kind of food.
        </p>
        <div className="flex justify-center">
          <p>Technologies Used:</p>

          <ul className="ml-6">
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
      </PortfolioCard>
    </div>
  );
}
