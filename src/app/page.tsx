import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Button } from "react-bootstrap";

import biographyData from "@/data/biography.json";
import projectsData from "@/data/projects.json";
import educationData from "@/data/education.json";

import SkillsSection from "@/app/skills/skills_section.tsx";
import ContactsSection from "@/app/contacts/contacts_section.tsx";

export default function BiographyPage(): React.ReactNode {
  return (
    <div className={styles.page}>
      <p>Hello Next.js</p>
      <Profile fileName="/profile.jpg" />
      <BiographyBox />
      <EducationBox />
      <ProjectsBox />
      <SkillsSection />
      <ContactsSection />
    </div>
  );
}

function Profile({ fileName }: { fileName: string }): React.ReactNode {
  return (
    <div className="profile">
      <Image src={fileName} alt="sample profile image" width={50} height={50} />
      <h3 className="profile-text">Welcome to my portfolio website!</h3>
    </div>
  );
}

function BiographyBox(): React.ReactNode {
  const firstName = biographyData[0].firstname;
  const lastName = biographyData[0].lastname;
  const nickName = biographyData[0].nickname;
  const birthDate = new Date(biographyData[0].birthdate.$date);
  const nationality = biographyData[0].nationality;

  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - birthDate.getTime();
  const age = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <div className="box">
      <h3 className="box-header">Biography</h3>
      <p className="box-label">Name:</p>
      <p className="box-value">
        {firstName} {lastName} ({nickName})
      </p>
      <p className="box-label">Birthdate:</p>
      <p className="box-value">
        0{birthDate.getDate()}/0{birthDate.getMonth() + 1}/
        {birthDate.getFullYear()} ({age})
      </p>
      <p className="box-label">Nationality:</p>
      <p className="box-value">{nationality}</p>
    </div>
  );
}

function ProjectsBox(): React.ReactNode {
  return (
    <div>
      <h3>All my side projects</h3>
      <div>
        {projectsData.map((project, index) => (
          <div key={index}>
            <Image
              src={`/${project.file_name}`}
              alt={project.name}
              width={50}
              height={50}
            />
            <p>{project.name}</p>
          </div>
        ))}
      </div>
      <Button variant="primary">
        <Link href="/projects">More Information</Link>
      </Button>
    </div>
  );
}

function EducationBox(): React.ReactNode {
  return (
    <div className="box">
      <h3 className="box-header">See my education profile</h3>
      <div className="education-images">
        {educationData.map((institute, index) => (
          <Image
            className="education-image"
            key={index}
            src={`/${institute.file_name}`}
            alt={institute.name}
            width={50}
            height={50}
          />
        ))}
      </div>
      <Button variant="primary">
        <Link className="box-link" href="/education">Click</Link>
      </Button>
    </div>
  );
}
