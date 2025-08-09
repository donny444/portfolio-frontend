import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

import projectsData from "@/data/projects.json";

export default function ProjectsSec(): React.ReactNode {
  return (
    <Stack className={`container-lg p-3 border border-2 rounded-4 ${styles.projects}`}>
      <p className="fs-3 text-center my-3">All my side projects</p>
      <Container className="my-3">
        {projectsData.map((project, index) => (
          <Row key={index} className="my-3">
            <Col xs={2}>
              <Image
                src={`/${project.file_name}`}
                alt={project.name}
                width={100}
                height={100}
                className="rounded-4"
              />
            </Col>
            <Col xs={10}>
              <p className="fs-5 text-start my-1">{project.name}</p>
              <p className="fs-6 text-start mb-0">{project.description}</p>
            </Col>
          </Row>
        ))}
      </Container>
      <Button variant="primary" className="mx-auto my-3 w-75">
        <Link className="text-light" href="/projects" >
          More Information
        </Link>
      </Button>
    </Stack>
  );
}
