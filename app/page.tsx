import Link from "next/link";
import {getAllProjects} from "@/lib/projectManager";
import ProjectPreview from "@/app/components/ProjectPreview";

export const runtime = 'edge'

const Home = async () => {
    const projects = await getAllProjects()

    return (
        <div>
            <h1>Home</h1>
            <p>Hello World! This is the Home page</p>
            <div>
                {
                    projects.map((project) => ProjectPreview(project))
                }
            </div>
            <p>
                Visit the <Link href="/about">About</Link> page.
            </p>
        </div>
    );
};

export default Home;