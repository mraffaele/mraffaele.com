import { getPostsWithMetadata } from "@/utils/posts";
import styles from "./page.module.css";
import { PostSummary } from "@/components/PostSummary";



export default async function Home() {
  const posts = await getPostsWithMetadata()
  const recentPosts = posts.slice(0, 5);

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <p>Hi, I&apos;m Michael Raffaele; a Melbourne-based freelance Front End Developer with a focus on building clean, maintainable, and performant interfaces. I work primarily with JavaScript, HTML, and CSS, and bring a pragmatic, detail-driven approach to modern front-end architecture.</p>
        <p>I&apos;m currently working with REA Group and have previously delivered solutions for organisations like carsales, Alinta Energy, and Tribal DDB.</p>
      </div>
      <div className={styles.posts}>
        <p>I seldom use this website these days. However, if you&apos;re interested, you can view my posts here:</p>
        {recentPosts.map((post) => <PostSummary post={post} key={post.url} />)}
      </div>
    </div >
  );
}
