import Link from "next/link";
import Image from "next/image";

import projectsData from "@/data/projects.json";

import ProjectI from "@/interfaces/project.ts";

export default function ProjectsPage(): React.ReactNode {
  return (
    <div>
      <p>Projects Page</p>
      {projectsData.map((project, index) => (
        <Project key={index} projectData={project} />
      ))}
    </div>
  );
}

interface ProjectProps {
  key: number,
  projectData: ProjectI
}

function Project({ key, projectData }: ProjectProps): React.ReactNode {
  return (
    <div key={key}>
      <Image src={`/${projectData.file_name}`} alt={projectData.name} width={100} height={100} />
      <p>{projectData.name}</p>
      <p>{projectData.description}</p>
      <p>{projectData.category}</p>
      <Link href={projectData.url}>GitHub Repository</Link>
    </div>
  );
}
