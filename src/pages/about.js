import ContainerBlock from '../components/ContainerBlock/ContainerBlock'
import userData from '../constants/data'

export default function About() {
  return (
    <ContainerBlock title="AJ Arriola - Developer by Design">
      <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        About Me Page
      </h1>
      {userData.aboutMeSection.map((i, index) => (
        <p key={index}>{i}</p>
      ))}
    </ContainerBlock>
  )
}
