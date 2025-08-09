import Image from "next/image";
import Link from "next/link";
import styles from "./education.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

import educationData from "@/data/education.json";

export default function EducationSec(): React.ReactNode {
  return (
    <Stack className={`container-lg p-3 border border-2 rounded-4 ${styles.education}`}>
      <p className="fs-3 text-center my-3">See my education profile</p>
      <Container className="my-3">
        <Row>
          {educationData.map((institute, index) => (
            <Col key={index}>
              <Image
                className="mx-auto"
                src={`/${institute.file_name}`}
                alt={institute.name}
                width={150}
                height={150}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Button variant="primary" className="mx-auto my-3 w-75">
        <Link className="text-light" href="/education">
          Click
        </Link>
      </Button>
    </Stack>
  );
}
