import Image from "next/image";
import educationData from "@/data/education.json";
import InstituteI from "@/interfaces/institute";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

export default function EducationPage(): React.ReactNode {
  return (
    <Stack className="institutes-boxes">
      <p className="fs-3 text-center my-3">Education</p>
      {educationData.map((institute, index) => (
        <Institute instituteData={institute} key={index} />
      ))}
    </Stack>
  );
}

interface InstituteProps {
  key: number;
  instituteData: InstituteI;
}

function Institute({ instituteData, key }: InstituteProps): React.ReactNode {
  return (
    <Container key={key} className="w-75 p-3 border border-2 rounded-4 mx-auto my-3">
      <Row className="justfy-content-start align-items-start">
        <Col xs={2}>
          <Image
            src={`/${instituteData.file_name}`}
            alt={instituteData.name}
            width={100}
            height={100}
          />
        </Col>
        <Col xs={10} className="text-start">
          <p className="fs-5 mb-1">{instituteData.name}</p>
          <p className="fs-6 mb-0">{instituteData.degree}</p>
        </Col>
      </Row>
      <Row className="justify-content-start align-items-start">
        <Col xs={12} className="text-start">
          {instituteData.major ?
            <p className="fs-6 mb-1">Major: {instituteData.major}</p>
            : null
          }
          <p className="fs-6 mb-1">Year of Admission: {instituteData.admission_year}</p>
          <p className="fs-6 mb-1">Year of Graduation: {instituteData.graduation_year}</p>
        </Col>
      </Row>
    </Container>
  );
}
