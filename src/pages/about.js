import ContainerBlock from '../components/ContainerBlock/ContainerBlock'
import userData from '../constants/data'

export default function About() {
  return (
    <ContainerBlock title="AJ Arriola - Developer by Design">
      <section>
        <h1 className="text-3xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
          About Me Page
        </h1>
        {userData.aboutMeSection.map((i, index) => (
          <p key={index}>{i}</p>
        ))}
      </section>
    </ContainerBlock>
  )
}
