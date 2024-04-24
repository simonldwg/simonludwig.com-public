import {getProject} from "@/lib/projectManager"
import {notFound} from "next/navigation"
import Link from "next/link"
import {ChevronRight, GitHub} from "react-feather"
import Heading1 from "@/app/components/typography/Heading1"
import {Project} from ".prisma/client"
import xss from "xss"

export const runtime = "edge"

const renderGithubLink = (project: Project) => {
  if(project.githubURL) {
    return <p className="mb-4">You can find the source code on <Link href={project.githubURL}><GitHub className="inline-block w-4 ml-1 mr-1"></GitHub>GitHub</Link>.</p>
  }
}


export default async function ProjectPage({params}: { params: { slug: string } }) {
  const project = await getProject(params.slug)
  if (!project) {
    notFound()
  }

  const cleanedDescription = xss(project.description, {
    whiteList: {
      a: ["href"],
      br: [],
      strong: []
    }
  })

  return (
    <div className="max-w-screen-2xl mx-auto w-full pt-4 pb-10">
      <div className="pr-4 pl-4 sm:pr-8 sm:pl-8">
        <nav aria-label="Breadcrumb" className="text-gray-500 mb-8">
          <ul>
            <li className="inline"><Link href="/#projects" className="hover:text-gray-800 transition-all duration-300 ease-out">Projects</Link>&nbsp;<ChevronRight className="inline" /></li>
            <li className="inline"><Link href={`/projects/${project.slug}`} className="hover:text-gray-800 transition-all duration-300 ease-out" aria-current="page">{project.title}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 order-2 md:order-1">
        <div className="pr-4 pl-4 sm:pr-8 sm:pl-8">
          <Heading1>{project.title}</Heading1>
          <p className="font-mono text-gray-500 mb-4">{project.subtitle}</p>
          <p className="mb-4" dangerouslySetInnerHTML={{__html: cleanedDescription}}></p>
          {renderGithubLink(project)}
          <p className="mb-4 text-gray-500 text-sm">Category: {project.category} project</p>
        </div>
        <div>
          <div className="mt-7 md:mt-0 md:pl-5 order-1 md:order-2">
            <img src={project.imageLarge} alt={`${project.title} project image`} className="object-cover w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}