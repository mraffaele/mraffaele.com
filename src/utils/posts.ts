import path from "path";
import fs from "fs";
import { getMarkdownData, MarkdownData } from "./markdown";

let POST_SLUGS = [] as { slug: string }[];

export const getPostsPath = () => {
  return process.cwd() + "/src/app/posts/_content";
};

export const getPostSlugs = async (): Promise<{ slug: string }[]> => {
  if (POST_SLUGS.length === 0) {
    console.log("Loading post slugs...");
    const posts = getPostsPath();
    if (!fs.existsSync(posts)) {
      console.error(`Directory does not exist: ${getPostsPath()}`);
      return Promise.reject([]);
    }

    const files = await fs.promises.readdir(posts);
    POST_SLUGS = files
      .filter((file) => path.extname(file) === ".md")
      .map((file) => ({
        slug: path.basename(file, ".md"),
      }));
  }

  return Promise.resolve(POST_SLUGS);
};

export type PostSlugWithMetadata = MarkdownData["meta"] & { url: string };

export const getPostsWithMetadata = async (): Promise<
  PostSlugWithMetadata[]
> => {
  const allPostSlugs = await getPostSlugs();
  const data = await Promise.all(
    allPostSlugs.map(async (post) => {
      const { slug } = post;
      const markdownData = await getMarkdownData(slug);
      return {
        ...markdownData.meta,
        url: `/posts/${slug}`,
      };
    })
  );
  data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return data;
};
