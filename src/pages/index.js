import ContainerBlock from "../components/ContainerBlock/ContainerBlock";

export default function Home() {
  return (
    <ContainerBlock title="AJ Arriola - Developer by Design">
      <h1 className="text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">Welcome To <br/> My Personal Portfolio</h1>
      <p className="text-xs md:text-base font-light text-sm mt-10">The purpose of this website is to share a little bit about myself and whats going on during my constant growth as a Full-Stack Developer</p>
    </ContainerBlock>
  );
}
