import {getAllProjects} from "@/lib/projectManager"
import ProjectPreview from "@/app/components/ProjectPreview"
import Heading1 from "@/app/components/typography/Heading1"
import Heading2 from "@/app/components/typography/Heading2"
import {Mail} from "react-feather"

export const runtime = "edge"

const Home = async () => {
  const projects = await getAllProjects()

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full flex p-4 pt-10 pb-10 md:pb-4 md:pt-4 md:pr-2 order-2 md:order-1 items-center">
            <div>
              <h1 className="font-mono font-bold md:font-black text-pink-600 text-8xl md:text-9xl mb-4">Hi.</h1>
              <p className="text-xl mb-4">My name is Simon Ludwig. I study Media Informatics at the University of Applied Sciences in Düsseldorf.</p>
              <p className="text-xl mb-6">I am passionate about software engineering methodology, software architecture, security engineering and music software.</p>
              <a className="p-2 font-bold rounded-xl border-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 no-underline inline-block transition-all duration-200 ease-out" href="mailto:hello@simonludwig.com">
                <Mail className="inline" />&nbsp;&nbsp;Get in Touch
              </a>
            </div>
          </div>
          <div className="md:min-h-96 lg:aspect-square md:p-4 md:pl-2 float-right order-1 md:order-2">
            <img src="https://static.simonludwig.com/images/main-lg.jpg" alt="" className="object-cover w-full md:h-full" />
          </div>
        </div>
      </div>
      <div className="bg-gray-950 text-gray-50">
        <div className="max-w-screen-2xl mx-auto w-full p-4 pt-10 pb-10">
          <Heading1 colorClass="text-gray-50">Projects</Heading1>
          <p className="mb-10">These are some of the projects I have worked on recently.</p>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading2 colorClass="text-gray-50">Work Projects</Heading2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 sm:gap-4 lg:gap-8 mt-8 mb-14">
                {
                  projects.filter((project) => project.category === 'Work').map((project) => ProjectPreview(project))
                }
                <ProjectPreview slug="asd" title="asd" subtitle="asd" category="" description="" githubURL="" imageSmall="https://static.simonludwig.com/images/projects/anwaltskanzlei-ludwig_sm.png" imageLarge="" />
              </div>
            </div>
            <div>
              <Heading2 colorClass="text-gray-50">University Projects</Heading2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 sm:gap-4 lg:gap-8 mt-8 mb-14">
                {
                  projects.filter((project) => project.category === 'University').map((project) => ProjectPreview(project))
                }
              </div>
            </div>
          </div>
          <div>
            <Heading2 colorClass="text-gray-50">Personal Projects</Heading2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 lg:gap-8 mt-8 mb-14">
              {
                projects.filter((project) => project.category === 'Personal').map((project) => ProjectPreview(project))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home