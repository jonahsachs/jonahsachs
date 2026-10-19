import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

export default function HomePage() {
  const { home, appearances } = site;

  return (
    <div>
      <Image
        src="/images/home/banner.jpg"
        alt="Break It. Make It. Change It."
        width={2200}
        height={1330}
        className="hero"
        priority
      />

      <div className="page">
        <p className="home-intro">{home.intro}</p>
        <hr className="section-rule" />

        <section className="home-book">
          <Image
            src="/images/home/unsafe-book.png"
            alt="Unsafe Thinking book cover"
            width={468}
            height={544}
          />
          <div>
            <h2>{home.bookHeading}</h2>
            <p>{home.bookDesc}</p>
            {home.quotes.map((q) => (
              <p key={q} className="quote">
                {q}
              </p>
            ))}
            <a
              className="btn"
              href={home.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </div>
        </section>

        <hr className="section-rule" />

        <section className="home-change">
          <div>
            <h2>{home.changeHeading}</h2>
            <p className="quote">“{home.changeQuote}”</p>
            <p>{home.changeBody}</p>
            <Link className="btn" href="/contact">
              Book Jonah
            </Link>
          </div>
          <Image
            src="/images/home/jonah-portrait.jpg"
            alt="Jonah Sachs"
            width={816}
            height={506}
          />
        </section>

        <hr className="section-rule" />

        <section className="appearances">
          <h2>Recent Events and Appearances</h2>
          <div className="logo-grid">
            {appearances.map((file) => (
              <Image
                key={file}
                src={`/images/appearances/${file}`}
                alt=""
                width={200}
                height={120}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
