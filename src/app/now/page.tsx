/* eslint-disable @next/next/no-img-element */
import { basePath } from "@/utils/basePath";
import styles from "../page.module.css";

export default function Now() {
  return (
    <div className={styles.page}>
      <h1>What I&apos;m Doing Now</h1>
      <p>
        This /now page shows what I&apos;m doing. If you have your own site, you
        should{" "}
        <a href="https://nownownow.com/about" target="_blank">
          consider one too.
        </a>
      </p>
      <h2>What I&apos;m Making for me</h2>
      <ul>
        <li>
          <a href="https://swiptip.com/" target="_blank">
            SwipTip
          </a>{" "}
          - A fun, AI-powered, constantly evolving stream of tips and hacks. It
          adapts based on your history.
        </li>
        <li>
          Migrating <em>this</em> site (the one you&apos;re on) from WordPress
          ➡️ Static Site Generation (Next.js)
        </li>
      </ul>
      <h2>What I&apos;m Making for them</h2>I work at{" "}
      <a href="https://www.rea-group.com/" target="_blank">
        REA Group
      </a>{" "}
      as a Senior UI Engineer - not just interfaces:
      <ul>
        <li>
          Everything{" "}
          <a href="https://property.com.au/" target="_blank">
            property.com.au
          </a>
        </li>
        <li>
          Hackdays Crew - organising, facilitating, supporting, and promoting
          our annual hackathons
        </li>
        <li>UI Guild co-admin - hosting monthly talks about all things web</li>
      </ul>
      <h2>What I&apos;m Enjoying</h2>
      <ul>
        <li>
          Our new family pup, Ollie. He&apos;s getting huge:
          <a href={`${basePath}/assets/2025/ollie-2.jpg`} target="_blank">
            <img
              src={`${basePath}/assets/2025/ollie-2-thumb.jpg`}
              alt="Ollie"
              style={{
                width: "100%",
                maxWidth: "200px",
                height: "auto",
                display: "block",
                borderRadius: "8px",
              }}
            />
          </a>
        </li>
        <li>🚴 (thought admittedly less than normal of late)</li>
        <li>
          Currently playing{" "}
          <a
            href="https://store.steampowered.com/app/1643320/STALKER_2_Heart_of_Chornobyl/"
            target="_blank"
          >
            S.T.A.L.K.E.R. 2: Heart of Chornobyl
          </a>
        </li>
        <li>⛹️</li>
      </ul>
      {/* <h2>Personal Battery Levels</h2>
      <div className={styles.energyLevels}>
        <div className={styles.energyItem}>
          <div className={styles.energyItemLabel}>Family:</div>
          <div className={styles.energyItemLevel} data-val="5"></div>
        </div>
        <div className={styles.energyItem}>
          <div className={styles.energyItemLabel}>Physical Health:</div>
          <div className={styles.energyItemLevel} data-val="3"></div>
        </div>
        <div className={styles.energyItem}>
          <div className={styles.energyItemLabel}>Mental Health:</div>
          <div className={styles.energyItemLevel} data-val="4"></div>
        </div>
        <div className={styles.energyItem}>
          <div className={styles.energyItemLabel}>Play:</div>
          <div className={styles.energyItemLevel} data-val="5"></div>
        </div>
      </div> */}
      <div className={styles.updated}>Updated: 12 December 2025</div>
    </div>
  );
}
