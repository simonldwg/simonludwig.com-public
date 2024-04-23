import {getAllProjects} from "@/lib/projectManager"
import ProjectPreview from "@/app/components/ProjectPreview"
import Heading1 from "@/app/components/typography/Heading1"
import Heading2 from "@/app/components/typography/Heading2"
import {Linkedin, Mail} from "react-feather"
import Link from "next/link"

export const runtime = "edge"

const Home = async () => {
  const projects = await getAllProjects()

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-red-50">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full flex p-4 sm:p-8 pt-10 pb-10 md:pb-4 md:pt-4 md:pr-2 order-2 md:order-1 items-center">
            <div>
              <div className="inline-block"><h1 className="font-mono font-bold md:font-black text-red-500 text-8xl mb-7 typewriter border-r-8 inline-block overflow-hidden">Hi:)</h1></div>
              <p className="text-xl mb-4">My name is Simon Ludwig. I study Media Informatics at the University of Applied Sciences in Düsseldorf.</p>
              <p className="text-xl mb-6">I am passionate about software engineering methodology, software architecture, security engineering and music software.</p>
              <a className="p-2 font-bold rounded-xl border-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 no-underline inline-block transition-all duration-200 ease-out" href="mailto:hello@simonludwig.com">
                <Mail className="inline" />&nbsp;&nbsp;Get in touch
              </a>
            </div>
          </div>
          <div className="md:min-h-96 md:pr-8 md:pb-10 md:pt-10 md:pl-2 order-1 md:order-2">
            <img src="https://static.simonludwig.com/images/main-lg.jpg" alt="" className="object-cover w-full md:h-full lg:aspect-square" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-950 to-gray-900 text-gray-50" id="projects">
        <div className="max-w-screen-2xl mx-auto w-full sm:p-8 p-4 pt-10 pb-10">
          <Heading1 colorClass="text-gray-50">Projects</Heading1>
          <p className="mb-10">These are some of the projects I have worked on recently. Some projects were done in a team.</p>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading2 colorClass="text-gray-50">Work Projects</Heading2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 sm:gap-4 lg:gap-8 mt-8 mb-14">
                {
                  projects.filter((project) => project.category === 'Work').map((project, index) => <ProjectPreview key={index} slug={project.slug} title={project.title} subtitle={project.subtitle} category={project.category} description={project.description} githubURL={project.githubURL} imageSmall={project.imageSmall} imageLarge={project.imageLarge}></ProjectPreview>)
                }
              </div>
            </div>
            <div>
              <Heading2 colorClass="text-gray-50">University Projects</Heading2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 sm:gap-4 lg:gap-8 mt-8 mb-14">
                {
                  projects.filter((project) => project.category === 'University').map((project, index) => <ProjectPreview key={index} slug={project.slug} title={project.title} subtitle={project.subtitle} category={project.category} description={project.description} githubURL={project.githubURL} imageSmall={project.imageSmall} imageLarge={project.imageLarge}></ProjectPreview>)
                }
              </div>
            </div>
          </div>
          <div>
            <Heading2 colorClass="text-gray-50">Personal Projects</Heading2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 lg:gap-8 mt-8 mb-14">
              {
                projects.filter((project) => project.category === 'Personal').map((project, index) => <ProjectPreview key={index} slug={project.slug} title={project.title} subtitle={project.subtitle} category={project.category} description={project.description} githubURL={project.githubURL} imageSmall={project.imageSmall} imageLarge={project.imageLarge}></ProjectPreview>)
              }
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto w-full p-4 sm:p-8 pt-10 pb-10 grid grid-cols-1 md:grid-cols-4" id="about-me">
        <div className="md:col-span-3 md:pr-5">
          <Heading1>About Me</Heading1>
          <p className="mb-4">When I first started programming in 2014, using only a Raspberry Pi and my parent’s TV, I wanted to learn everything there is to know about computers. Now, ten years later, I am a lot more knowledgeable and have mostly finished my bachelor’s degree in Media Informatics, but I can confidently say that I have not achieved my naïve goal and likely never will.</p>
          <p className="mb-4">During my studies at the University of Applied Sciences in Düsseldorf, I have focused on the topics of software engineering methodology, software architecture and security engineering. This manifested itself in multiple university projects where we worked in a team and used agile methods and approaches to develop software. I also chose software architecture and security engineering as compulsory elective modules and took part in a capture-the-flag hacking workshop to deepen my understanding of IT security. Moreover, I have worked on several projects as a student assistant under Prof. Dr. Holger Schmidt, most notably <Link href="/projects/turtl">TURTL</Link>, an online application for IT security in computer networks. I coordinated the development work and built the Vue.js frontend and Django backend together with four colleagues.</p>
          <p className="mb-4">I am very passionate about music as well. I previously worked as a volunteer in the orchestra management of the WDR, the second-largest public broadcasting corporation in Europe. I play the guitar, the trombone, the trumpet and the piano in local bands and orchestras and I love producing music, which I have done as part of my studies too. I am also curious about music production software and algorithms, but my university does not offer courses in this field for bachelor students and I have therefore not been able to fully devote myself to this subject area yet.</p>
          <p className="mb-4">Aside from music and computer science, I have a great interest in cooking, baking and food in general. I am still looking for ways to integrate my enthusiasm for food into my studies, but to no avail (...yet).</p>
          <p>You can find more information about me on my <Link href="https://www.linkedin.com/in/simonldwg/">LinkedIn</Link>.</p>
        </div>
        <div>
          <div className="mt-7 md:mt-0 md:pl-5">
            <img src="https://static.simonludwig.com/images/main-lg.jpg" alt="" className="object-cover aspect-square w-full h-full rounded-full" />
          </div>
        </div>
      </div>
      <div className="text-gray-50" id="contact">
        <div id="contact-container">
          <div className="max-w-screen-2xl mx-auto w-full p-4 sm:p-8 pt-20 pb-20 text-center">
            <Heading1 colorClass="text-gray-50 inline-block p-2">Contact Me</Heading1><br />
            <a className="text-xl p-2 inline-block transition-all duration-300 ease-out hover:transform hover:scale-110 mb-2" href="mailto:hello@simonludwig.com">
              <Mail className="inline mr-2" />hello@simonludwig.com
            </a><br />
            <a className="text-xl p-2 inline-block transition-all duration-300 ease-out hover:transform hover:scale-110" href="https://www.linkedin.com/in/simonldwg/">
              <Linkedin className="inline mr-2" />LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home