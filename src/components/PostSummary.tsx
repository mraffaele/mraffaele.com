import { PostSlugWithMetadata } from "@/utils/posts";
import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./PostSummary.module.css";

export const PostSummary: FunctionComponent<{ post: PostSlugWithMetadata }> = ({ post: { title, date, summary, url } }) => {
    return <article className={styles.post}>
        <h2 className={styles.title}><Link href={url}>{title}</Link></h2>
        <p className={styles.summary}>{summary}</p>
        <time className={styles.date} dateTime={date}>{date}</time>
    </article>
}