import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  return (
    <div className="page">
      <h1>Writing</h1>
      <div className="article-list">
        {site.articles.map((article) => (
          <article key={article.url} className="article-card">
            {article.imageLocal ? (
              <Image
                src={article.imageLocal}
                alt=""
                width={400}
                height={300}
              />
            ) : (
              <div />
            )}
            <div>
              <h2>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title} →
                </a>
              </h2>
              {article.date ? (
                <p className="article-meta">{article.date}</p>
              ) : null}
              <p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read it here
                </a>
                .
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
