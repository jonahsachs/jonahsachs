import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const { about } = site;

  return (
    <div className="page">
      <div className="about-layout">
        <aside className="about-side">
          <Image
            src="/images/about/headshot.jpg"
            alt="Jonah Sachs"
            width={560}
            height={700}
            priority
          />
          <div className="connect-row">
            <span>Connect with Jonah:</span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
            <Link href="/contact" className="btn">
              Contact Jonah
            </Link>
          </div>
        </aside>

        <div>
          <h3>{about.lead}</h3>
          {about.paras.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}

          <Image
            src="/images/about/books.png"
            alt="Jonah Sachs books"
            width={840}
            height={420}
            className="about-books-img"
          />
          <h2>{about.booksHeading}</h2>
          {about.booksParas.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <Link href="/books-1" className="btn">
            See Books
          </Link>

          <Image
            src="/images/about/awards.png"
            alt=""
            width={840}
            height={420}
            className="about-awards-img"
          />
          <h2>Awards/Recognitions</h2>
          <ul className="award-list">
            {about.awards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
