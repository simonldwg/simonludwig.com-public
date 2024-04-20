import {Project} from ".prisma/client"
import Link from "next/link"

export default function ProjectPreview(project: Project) {
  return (
    <div>
      <h4>{project.title}</h4>
      <p>{project.subtitle}</p>
      <Link href={`/projects/${project.slug}`}>Learn more</Link>
    </div>
  )
}