import Image from "next/image";
import educationData from "@/data/education.json";
import InstituteI from "@/interfaces/institute";

export default function EducationPage(): React.ReactNode {
  return (
    <>
      <div className="institutes-boxes">
        {educationData.map((institute, index) => (
          <Institute
            instituteData={institute}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

interface InstituteProps {
  key: number,
  instituteData: InstituteI
}

function Institute({ instituteData, key }: InstituteProps): React.ReactNode {
  return (
    <div key={key}>
      <Image src={`/${instituteData.file_name}`} alt={instituteData.name} width={50} height={50} />
      <p>{instituteData.name}</p>
      <p>{instituteData.degree}</p>
    </div>
  );
}
