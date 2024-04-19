import {Project} from ".prisma/client";

export default function ProjectPreview(project: Project) {
    return (
        <div>
            <h4>{project.title}</h4>
            <p>{project.subtitle}</p>
            <a href="#">Learn more...</a>
        </div>
    );
}