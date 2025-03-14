import ContainerBlock from '../components/ContainerBlock/ContainerBlock';
import userData from '../constants/data';

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
}) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};

export default function Experience() {
  return (
    <ContainerBlock title="Experience - AJ Arriola">
      <section>
        <div className="max-w-6xl mx-auto h-48">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Experience
          </h1>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
            {/* Experience card */}
            {userData.experience.map((exp, idx) => (
              <div key={idx}>
                <ExperienceCard
                  title={exp.title}
                  desc={exp.desc}
                  year={exp.year}
                  company={exp.company}
                  companyLink={exp.companyLink}
                />
                {idx === userData.experience.length - 1 ? null : (
                  <div className="divider-container flex flex-col items-center -mt-2">
                    <div className="w-4 h-4 bg-blue-500 dark:bg-yellow-500 rounded-full relative z-10">
                      <div className="w-4 h-4 bg-blue-500 dark:bg-yellow-500 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
