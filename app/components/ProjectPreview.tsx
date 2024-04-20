import {Project} from ".prisma/client"
import Link from "next/link"
import Heading3 from "@/app/components/typography/Heading3"
import {ChevronRight} from "react-feather"

export default function ProjectPreview(project: Project) {
  return (
    <div className="text-gray-900">
      <img src={project.imageSmall} alt={`${project.title} project image`} className="w-full rounded-t-xl"/>
      <div className="p-4 bg-gray-50 rounded-b-xl border-t-gray-300 border-t-2">
        <Heading3 colorClass="text-gray-900">{project.title}</Heading3>
        <p className="font-mono text-gray-500 text-sm mt-3 mb-3">{project.subtitle}</p>
        <Link href={`/projects/${project.slug}`} className="text-gray-900"><ChevronRight className="inline mr-1" />Learn more</Link>
      </div>
    </div>
  )
}