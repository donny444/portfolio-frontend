import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from "react-bootstrap";

import biographyData from "@/data/biography.json";

import EducationSec from "@/app/education/education_section.tsx";
import ProjectsSec from "@/app/projects/projects_section";
import SkillsSection from "@/app/skills/skills_section.tsx";
import ContactsSection from "@/app/contacts/contacts_section.tsx";

export default function BiographyPage(): React.ReactNode {
  return (
    <Stack gap={2}>
      <Profile fileName="/profile.jpg" />
      <BiographySec />
      <EducationSec />
      <ProjectsSec />
      <SkillsSection />
      <ContactsSection />
    </Stack>
  );
}

function Profile({ fileName }: { fileName: string }): React.ReactNode {
  return (
    <div className="container-lg">
      <Image src={fileName} alt="sample profile image" width={100} height={100} />
      <h3 className="text-center">Welcome to my portfolio website!</h3>
    </div>
  );
}

function BiographySec(): React.ReactNode {
  const firstName = biographyData[0].firstname;
  const lastName = biographyData[0].lastname;
  const nickName = biographyData[0].nickname;
  const birthDate = new Date(biographyData[0].birthdate.$date);
  const nationality = biographyData[0].nationality;

  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - birthDate.getTime();
  const age = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <div className={`container-lg ${styles.biography}`}>
      <h3 className="text-center">Biography</h3>
      <p><b>Name:</b> {firstName} {lastName} ({nickName})</p>
      <p><b>Birthdate:</b> {birthDate.getDate()}/{birthDate.getMonth() + 1}/{birthDate.getFullYear()} ({age})</p>
      <p><b>Nationality:</b> {nationality}</p>
    </div>
  );
}