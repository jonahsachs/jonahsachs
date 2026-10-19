import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Books",
};

export default function BooksPage() {
  const { unsafe, storyWars } = site.books;

  return (
    <div className="page">
      <section className="book-block">
        <Image
          src="/images/books/unsafe.png"
          alt="Unsafe Thinking"
          width={480}
          height={720}
          priority
        />
        <div>
          <h1>{unsafe.title}</h1>
          <p className="muted">{unsafe.subtitle}</p>
          <div className="book-links">
            {unsafe.links.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? " | " : null}
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </span>
            ))}
          </div>
          <p className="book-lead">{unsafe.lead}</p>
          <p>{unsafe.intro}</p>
          <ul className="bullet-list">
            {unsafe.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>{unsafe.closing}</p>
          <h2>Praise for Unsafe Thinking</h2>
          {unsafe.praise.map((q) => (
            <p key={q.slice(0, 40)} className="quote">
              {q}
            </p>
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      <section className="book-block">
        <Image
          src="/images/books/story-wars.png"
          alt="Winning the Story Wars"
          width={480}
          height={720}
        />
        <div>
          <h1>{storyWars.title}</h1>
          <p>
            <a
              href={storyWars.worksheetUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {storyWars.worksheetNote}
            </a>
          </p>
          <p>{storyWars.intro}</p>
          <ul className="bullet-list">
            {storyWars.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>{storyWars.closing}</p>
          <p className="quote">{storyWars.quote}</p>
        </div>
      </section>
    </div>
  );
}
