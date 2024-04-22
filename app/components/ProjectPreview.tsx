"use client"

import {Project} from ".prisma/client"
import Link from "next/link"
import Heading3 from "@/app/components/typography/Heading3"
import {ChevronRight} from "react-feather"
import {useRef} from "react"
import {useIsVisible} from "@/lib/animationHelpers"

export default function ProjectPreview(project: Project) {
  const projectPreviewRef = useRef<any>()
  const projectPreviewVisible = useIsVisible(projectPreviewRef)

  return (
    <div ref={projectPreviewRef} className={`text-gray-900 transition-all transform ease-in duration-600 ${projectPreviewVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
      <img src={project.imageSmall} alt={`${project.title} project image`} className="w-full rounded-t-xl"/>
      <div className="p-4 bg-gray-50 rounded-b-xl border-t-gray-300 border-t-2">
        <Heading3 colorClass="text-gray-900">{project.title}</Heading3>
        <p className="font-mono text-gray-500 text-sm mt-3 mb-3">{project.subtitle}</p>
        <Link href={`/projects/${project.slug}`} className="text-gray-900"><ChevronRight className="inline mr-1" />Learn more</Link>
      </div>
    </div>
  )
}