
import { getMarkdownData } from '@/utils/markdown';
import { getPostSlugs } from '@/utils/posts';
import { PageProps } from '../../../../.next/types/app/page';
import { Metadata } from 'next/types';
import Link from 'next/link';
import styles from "./page.module.css"
import { ArchiveMessage } from '@/components/ArchiveMessage';
import Markdown from 'react-markdown'
import Image from 'next/image'
import { getImageDimensions } from '@/utils/image';
import { basePath } from '@/utils/basePath';
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm"




export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const markdownData = await getMarkdownData(slug);

  return {
    title: markdownData.meta.title,
    description: markdownData.meta.summary,
  }
}


export async function generateStaticParams() {
  return getPostSlugs();
}


export default async function Post({ params }: PageProps) {
  const { slug } = await params;

  const markdownData = await getMarkdownData(slug);
  const { meta: { archive, title, topics, date }, markdown } = markdownData;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.meta}>
          <time className={styles.date} dateTime={date}>{date}</time>
          <span className={styles.topics}>{topics.join(',')}</span>
        </div>
      </header>
      <section className={styles.body}>
        {archive && <ArchiveMessage />}
        <Markdown rehypePlugins={[rehypeRaw, remarkGfm]} components={{
          img: (props) => {
            const { width, height } = getImageDimensions(props.src as string)
            return <Image src={`${basePath}${props.src as string}`} alt={props.alt ?? ''} width={width} height={height} />
          },
        }}>{markdown}</Markdown>
      </section>
      <footer className={styles.footer}>
        <Link href="/posts" className={styles.back}>&larr; Back to posts</Link>
      </footer>
    </article >
  );
}