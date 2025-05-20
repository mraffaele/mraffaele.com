"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Error() {
    return (
        <div className={styles.page}>
            <h1>404: Page Not Found</h1>
            <p>Oh no! It looks like you&apos;ve found a broken or missing page.</p>
            <p>Don&apos;t stress, its not your fault. I&apos;m probably already working away to fix the problem.</p>
            <p>With that said though, if you can spare a minute could you <Link href="/contact">contact me</Link> and let me know how you got here?</p>
            <p>I&apos;m not 100% sure what you were looking for, but maybe one of these will point you in the right direction:</p>
            <ul>
                <li>Were you looking for my <Link href="/">Homepage</Link>?</li>
                <li>No, perhaps you were looking for my <Link href="/posts">posts</Link></li>
            </ul>
        </div>
    );
}
