import { getPostsWithMetadata } from "@/utils/posts";
import styles from "../page.module.css";
import { PostSummary } from "@/components/PostSummary";


export default async function Posts() {
  const posts = await getPostsWithMetadata()

  return (
    <div className={styles.page}>
      <h1>All posts</h1>
      <p>View all <strong>{posts.length}</strong> posts that I have written; dating back 2011.</p>
      <hr />
      {posts.map((post) => <PostSummary post={post} key={post.url} />)}
    </div>
  )
}