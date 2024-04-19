import {getProject} from "@/lib/projectManager";
import {notFound} from "next/navigation";

export const runtime = 'edge'

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await getProject(params.slug)
    if(!project) {
        notFound()
    }
    return <div>My Project: {project.title}</div>
}