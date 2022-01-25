import ContainerBlock from '../components/ContainerBlock/ContainerBlock'
import userData from '../constants/data'
import Image from 'next/image'

export default function Home() {
  return (
    <ContainerBlock title="AJ Arriola - Developer by Design">
      <h1 className="text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
        Welcome To <br /> My Personal Portfolio
      </h1>
      <p className="text-xs md:text-base font-light text-sm mt-10">
        The purpose of this website is to share a little bit about myself and
        whats going on during my constant growth as a Full-Stack Developer
      </p>
      <h1 className="text-2xl md:text-1xl font-bold text-gray-700 pt-10 md:text-left dark:text-gray-200">
        {`Let's get started shall we?`}
      </h1>
      {userData.aboutMeSection.map((i, index) => (
        <p className="text-xs md:text-base font-light text-sm mt-2" key={index}>
          {i}
        </p>
      ))}
      <div>
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {`I'm always open for a chat shoot me an`}{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  email
                </a>{' '}
                {`and I'll get back to you.`}
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Currently open to new opportunities, If you see me as a good
                fit, check my{' '}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{' '}
                {`and I'd love to hear from you.`}
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-700 dark:text-gray-200">
              Technologies
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="javascript"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="express"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="postgres"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="html"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="css"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="nodejs"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="redux"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="git"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="react"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="bootstrap"
              />
              <Image
                src={userData.tech.nextjs}
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="nextjs"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4"
                width="120px"
                height="120px"
                alt="mongodb"
              />
            </div>
          </div>
        </div>
      </div>
    </ContainerBlock>
  )
}
