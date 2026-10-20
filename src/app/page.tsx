import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="page">
      <div className="links">
        <p>
          <a
            href="https://www.linkedin.com/in/jonahsachs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Jonah_Sachs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        </p>
      </div>

      <p className="intro">
        Hi. If you&apos;d like to get in touch with me about storytelling, a
        speaking engagement, or one of my films or books, you can send me a
        note here.
      </p>

      <ContactForm />
    </main>
  );
}
