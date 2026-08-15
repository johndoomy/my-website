export default function About3({ windowWidth }) {
  return (
    <div className="bg-tertiary" id="about">
      <h1 className="text-3xl pl-8 pt-8">About</h1>
      <div className="    ">
        <p className="w-80 mx-auto 2xl:w-auto 2xl:px-80 md:px-0 2xl:mx-80 2xl:py-8  py-8  block animate-fadeIn-.4">
          Hello! My name is John Doomy. I'm a web and mobile developer based in
          Denver, CO working primarily with React and React Native. While I went
          to school for Linguistics and Teaching English as a Second Language,
          my passion over the past few years has pivoted towards programming,
          and I took online courses to get where I am today.
        </p>
      </div>
      <div className=" w-full block animate-fadeIn-1">
        <p className="w-80 2xl:w-auto 2xl:px-80 2xl:mx-80 2xl:py-8  py-8 md:py-16 mx-auto block">
          I took what I learned, and went in search for somewhere I could apply
          myself. I ended up finding a home at American Water Damage of Denver
          as a one man team where, among other web related work, I built a
          mobile application from scratch that allows their field technicians to
          create and send project estimates directly to clients for water
          restoration and mitigation work. It has been in active use for over a
          year, and has given their team a much more streamlined experience that
          has improved client relations.
        </p>
        <p className="w-80 2xl:w-auto 2xl:px-80 2xl:mx-80 2xl:py-8  py-8 md:py-16 mx-auto block">
          Before development, I spent years in operations centered roles: mainly
          coordinating projects, managing client relationships, and keeping work
          with deadlines on track. That background shows up in how I now work on
          projects. I care about shipping something that actually works and
          making sure it's enjoyable to use for the end user.
        </p>
        <div className=" text-black py-8">
          <p className="text-xl md:text-2xl font-bold text-center mb-6">
            Technologies I am familiar with:
          </p>
          <div className="flex justify-center">
            <ul className="mx-16 mb-4 -indent-5">
              <li className="mb-2">Javascript & Typescript</li>
              <li className="mb-2">React, React Native, & Next.js</li>
              <li className="mb-2">Redux/RTK Query</li>
              <li className="mb-2">Node.js</li>
              <li className="mb-2">LLM's (ChatGPT, Claude, & Gemini)</li>
              <li className="mb-2">HTML</li>
              <li className="mb-2">CSS (Vanilla, TailwindCSS, Bootstrap)</li>
              <li className="mb-2">
                AWS (S3, DynamoDB, Lambda, API Gateway, EC2)
              </li>
              <li className="mb-2">MongoDB</li>
              <li className="mb-2">Git/GitHub</li>
              <li className="mb-2">CRUD/REST API's</li>
              <li className="mb-2">Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
