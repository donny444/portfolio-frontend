import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import contactsData from "@/data/contacts.json";

import PlatformI from "@/interfaces/platform.ts";

interface PlatformsI {
  platforms: Array<PlatformI>;
}

export default function ContactsSection(): React.ReactNode {
  return (
    <Container>
      <h3>Contact me</h3>
      <Row>
        <PlatformsSection platforms={contactsData} />
      </Row>
      <Row>
        <Col>
          <p className="box-text">
            {process.env.NEXT_PUBLIC_PHONE}
          </p>
        </Col>
        <Col>
          <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
            {process.env.NEXT_PUBLIC_EMAIL}
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

function PlatformsSection({ platforms }: PlatformsI): React.ReactNode {
  return (
    <div className="contacts-images">
      {platforms.map((platform, index) => (
        <Link className="contact-link" key={index} href={platform.url}>
          <Image
            className="contact-image"
            src={platform.file_name}
            alt={platform.name}
            width={100}
            height={100}
          />
        </Link>
      ))}
    </div>
  );
}
