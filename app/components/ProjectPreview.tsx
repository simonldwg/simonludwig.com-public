import {Project} from ".prisma/client"
import Link from "next/link"
import Heading3 from "@/app/components/typography/Heading3"
import {ChevronRight} from "react-feather"

export default function ProjectPreview(project: Project) {
  return (
    <div className="text-title">
      <img src={project.imageSmall} alt={`${project.title} project image`} className="w-full rounded-t-xl"/>
      <div className="p-4 bg-light rounded-b-xl">
        <Heading3 colorClass="text-title">{project.title}</Heading3>
        <p className="font-mono text-text text-sm mt-3 mb-3">{project.subtitle}</p>
        <Link href={`/projects/${project.slug}`}><ChevronRight className="inline mr-1" />Learn more</Link>
      </div>
    </div>
  )
}