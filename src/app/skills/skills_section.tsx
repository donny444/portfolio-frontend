import Image from "next/image";

import skillsData from "@/data/skills.json";

import SkillI from "@/interfaces/skill.ts";

interface SkillsI {
  skills: Array<SkillI>;
}

export default function SkillsSection(): React.ReactNode {
  return (
    <div>
      <h2>Skills</h2>
      <div>
        <LanguageSkills skills={skillsData} />
        <FrameworkSkills skills={skillsData} />
        <LibrarySkills skills={skillsData} />
        <DatabaseSkills skills={skillsData} />
        <ToolSkills skills={skillsData} />
      </div>
    </div>
  );
}

function LanguageSkills({ skills }: SkillsI): React.ReactNode {
  return (
    <div>
      <h3>Languages:</h3>
      <div>
        {skills.map((skill: SkillI, index: number) => (
          <>
            {skill.type === "language" ? (
              <Image key={index} src={`/${skill.file_name}`} alt={skill.name} width={50} height={50} />
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

function FrameworkSkills({ skills }: SkillsI): React.ReactNode {
  return (
    <div>
      <h3>Frameworks:</h3>
      <div>
        {skills.map((skill, index) => (
          <>
            {skill.type === "framework" ? (
              <Image key={index} src={`/${skill.file_name}`} alt={skill.name} width={50} height={50} />
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

function LibrarySkills({ skills }: SkillsI): React.ReactNode {
  return (
    <div>
      <h3>Libraries:</h3>
      <div>
        {skills.map((skill, index) => (
          <>
            {skill.type === "library" ? (
              <Image key={index} src={`/${skill.file_name}`} alt={skill.name} width={50} height={50} />
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

function DatabaseSkills({ skills }: SkillsI): React.ReactNode {
  return (
    <div>
      <h3>Databases:</h3>
      <div>
        {skills.map((skill, index) => (
          <>
            {skill.type === "database" ? (
              <Image key={index} src={`/${skill.file_name}`} alt={skill.name} width={50} height={50} />
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

function ToolSkills({ skills }: SkillsI): React.ReactNode {
  return (
    <div>
      <h3>Tools:</h3>
      <div>
        {skills.map((skill, index) => (
          <>
            {skill.type === "tool" ? (
              <Image key={index} src={`/${skill.file_name}`} alt={skill.name} width={50} height={50} />
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </div>
  );
}