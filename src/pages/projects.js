import ContainerBlock from '../components/ContainerBlock/ContainerBlock'
import Image from 'next/image'
import userData from '../constants/data'

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <Image
            src={imgUrl}
            target="_blank"
            link={link}
            alt="portfolio"
            layout="fill"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 dark:bg-yellow-500  rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-blue-500 dark:text-yellow-500 font-bold text-xl">
          {number.length === 1 ? '0' + number : number}
        </h1>
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <ContainerBlock title="Projects - AJ Arriola">
      <section>
        <div className="max-w-6xl mx-auto h-48">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Projects
          </h1>
        </div>
        {/* Grid starts here */}
        <div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
            {userData.projects.map((proj, idx) => (
              <ProjectCard
                key={idx}
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                number={`${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </ContainerBlock>
  )
}
