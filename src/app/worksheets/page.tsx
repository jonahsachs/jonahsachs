import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Worksheets",
};

export default function WorksheetsPage() {
  const { worksheets } = site;

  return (
    <div className="page page-narrow">
      <h1>{worksheets.heading}</h1>
      <p>
        For readers of Winning the Story Wars who wish to further practice the
        methodology outlined in the book, please visit the resources found{" "}
        <a
          href={worksheets.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
