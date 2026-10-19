import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      {" · "}
      <a href={site.twitter} target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      {" · "}© {new Date().getFullYear()} Jonah Sachs
    </footer>
  );
}
