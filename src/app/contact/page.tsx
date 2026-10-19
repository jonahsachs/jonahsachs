import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const { contact } = site;

  return (
    <div className="page page-narrow">
      <h1>{contact.heading}</h1>
      <p>
        If you&apos;d like to inquire about having me speak or have questions
        about storytelling and creativity, reach me on Twitter —{" "}
        <a
          href={site.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          @jonahsachs
        </a>{" "}
        — or fill out the form below.
      </p>
      <ContactForm />
    </div>
  );
}
