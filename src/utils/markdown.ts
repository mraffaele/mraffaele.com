import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { getPostsPath } from "./posts";

export type MarkdownData = {
  markdown?: string;
  meta: {
    title: string;
    date: string;
    topics: string[];
    archive?: boolean;
    summary?: string;
  };
};

export async function getMarkdownData(file: string): Promise<MarkdownData> {
  const fullPath = path.join(getPostsPath(), `${file}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const extractedMatter = matter(fileContents);

  return {
    markdown: extractedMatter.content,
    meta: {
      ...extractedMatter.data,
      summary: extractedMatter.data.summary,
      title: extractedMatter.data.title ?? file,
      date: extractedMatter.data.date ?? new Date().toISOString(),
      topics: extractedMatter.data.topics?.split(",") ?? [],
      archive: extractedMatter.data.archive === "true",
    },
  };
}
