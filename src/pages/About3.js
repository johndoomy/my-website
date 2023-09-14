export default function About3({ windowWidth }) {
  return (
    <div className="bg-tertiary" id="about">
      <h1 className="text-3xl pl-8 pt-8">About</h1>
      <div className="    ">
        <p className="w-80 mx-auto 2xl:w-auto 2xl:px-80 md:px-0 2xl:mx-80 2xl:py-16  py-8  block animate-fadeIn-.4">
          Hello! My name is John Doomy. I'm a web developer based in Denver, CO.
          I am originally from the east coast in Winston-Salem, NC. While I went
          to school for Linguistics and Teaching English as a Second Language,
          my passion over the past two years has pivoted towards web
          development. In transitioning into web development, I have naturally
          gravitated towards Javascript, and I have found it to be interesting
          and fun to learn as a language in terms of my linguistic background. I
          love learning languages and it felt no different when learning a
          programming language.
        </p>
      </div>
      <div className=" w-full block animate-fadeIn-1">
        <p className="w-80 2xl:w-auto 2xl:px-80 2xl:mx-80 2xl:py-16 py-8 md:py-16 mx-auto block">
          I am an avid learner and I am always looking to increase my knowledge
          in all sorts of areas. In my free time I look for ways to expand my
          toolkit and increase my skills in coding and web development. I love
          the feeling of finally solving a problem or understanding the
          inner-workings of something new. I work well with others, and am
          always willing to admit when I'm wrong or let someone show me a better
          way of doing things. I'm adaptable and always willing to do what it
          takes to get the job done. In my previous job at SupperBell, I started
          all the way at the bottom as a driver. As I continued working there, I
          gradually worked my way up the ladder: first as a prep cook in the
          kitchen learning how to cook, secondly as a full cook able to cook
          whatever in the kitchen, and finally integrating into the office by
          managing routing for the whole company.
        </p>
        <div className=" text-black py-8">
          <p className="text-xl md:text-2xl font-bold text-center mb-6">
            Technologies I am familiar with:
          </p>
          <div className="flex justify-center">
            <ul className="mx-16 mb-4 -indent-5">
              <li className="mb-2">
                Javascript (ES6, React, React-Redux, Material UI, Node.js,
                Express)
              </li>
              <li className="mb-2">HTML</li>
              <li className="mb-2">CSS (Vanilla, TailwindCSS, Bootstrap)</li>
              <li className="mb-2">
                AWS (S3, DynamoDB, Lambda, API Gateway, EC2)
              </li>
              <li className="mb-2">MongoDB</li>
              <li className="mb-2">Git/GitHub</li>
              <li className="mb-2">CRUD/REST API's</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
