import Link from "next/link";
import Image from "next/image";

import contactsData from "@/data/contacts.json";

import PlatformI from "@/interfaces/platform.ts";

interface PlatformsI {
  platforms: Array<PlatformI>;
}

export default function ContactsSection(): React.ReactNode {
  return (
    <div className="box">
      <h3 className="box-header">Contact me</h3>
      <PlatformsSection platforms={contactsData} />
      <p className="box-text">
        {/* <PhoneIcon /> */}
        {process.env.NEXT_PUBLIC_PHONE}
      </p>
      <p className="box-text">
        {/* <EmailIcon /> */}
        {process.env.NEXT_PUBLIC_EMAIL}
      </p>
      <Link className="box-link" href="/contacts">
        Click
      </Link>
    </div>
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
