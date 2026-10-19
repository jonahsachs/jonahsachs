import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Speaking",
};

export default function SpeakingPage() {
  const { speaking } = site;

  return (
    <div className="page">
      <Image
        src="/images/speaking/jonah-sachs-speaker-image.png"
        alt="Jonah Sachs speaking"
        width={1200}
        height={700}
        className="speak-hero"
        priority
      />

      <h2>{speaking.lead}</h2>
      {speaking.paras.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}

      <p className="quote">{speaking.testimonial}</p>

      <h2>Speaking Topics</h2>
      <ul className="bullet-list">
        {speaking.topics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h2>Video Reel</h2>
      <a
        className="video-thumb"
        href="https://www.youtube.com/results?search_query=Jonah+Sachs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/speaking/Jonah-speaking-reel-thumbnnail.png"
          alt="Jonah speaking reel"
          width={1120}
          height={630}
        />
      </a>

      <h2>Past Talks Include</h2>
      <div className="speak-logos">
        {speaking.logos.map((file) => (
          <Image
            key={file}
            src={`/images/speaking/${file}`}
            alt=""
            width={200}
            height={120}
          />
        ))}
      </div>

      <Image
        src="/images/speaking/unsafetalk.jpg"
        alt="Unsafe Thinking talk"
        width={800}
        height={450}
        className="speak-hero"
      />

      <h2>Book a Talk</h2>
      <p>{speaking.formNote}</p>
      <ContactForm subjectDefault="Speaking inquiry" />
    </div>
  );
}
