import Link from "next/link"
import { Logo } from "./Logo"
import styles from "./Navigation.module.css"
import { FunctionComponent } from "react"

export const Navigation: FunctionComponent = () => {
    return <header className={styles.wrapper}>
        <div className={styles.inner}>
            <Link className={styles.homeLink} href="/">
                <Logo className={styles.logo} />
                <h1 className={styles.title}>
                    Michael Raffaele
                    <span className={styles.byline}>Front End Developer</span>
                </h1>
            </Link>

            <nav className={styles.navItems}>
                <Link className={styles.navItem} href="/">Home</Link>
                <Link className={styles.navItem} href="/posts">All posts</Link>
                <Link className={styles.navItem} href="/resume">Resume</Link>
                <Link className={styles.navItem} href="/now">Now</Link>
                <Link className={styles.navItemHero} href="/contact">Get in touch</Link>
            </nav>
        </div>
    </header>
}