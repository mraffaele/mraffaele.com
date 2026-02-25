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
          Just added dark mode support for this site. No idea why I hadn&apos;t
          earlier.
        </li>
        <li>Developing a new way of working in the new AI world</li>
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
        <li>
          🚴 (trying to get ready for{" "}
          <a href="https://murraytomoyne.com.au/" target="_blank">
            M2M
          </a>
          )
        </li>
        <li>
          Currently playing{" "}
          <a
            href="https://store.steampowered.com/app/1229490/ULTRAKILL/"
            target="_blank"
          >
            ULTRAKILL
          </a>
        </li>
        <li>⛹️</li>
      </ul>
      <h2>Personal Battery Levels</h2>
      <div className={styles.energyLevels}>
        <div className={styles.energyItem}>
          <div className={styles.energyItemLabel}>Family:</div>
          <div className={styles.energyItemLevel} data-val="5"></div>
        </div>
        <div className={styles.energyItem}>
          <div className={styles.energyItemLabel}>Physical Health:</div>
          <div className={styles.energyItemLevel} data-val="4"></div>
        </div>
        <div className={styles.energyItem}>
          <div className={styles.energyItemLabel}>Mental Health:</div>
          <div className={styles.energyItemLevel} data-val="3"></div>
        </div>
        <div className={styles.energyItem}>
          <div className={styles.energyItemLabel}>Play:</div>
          <div className={styles.energyItemLevel} data-val="4"></div>
        </div>
      </div>
      <div className={styles.updated}>Updated: 25 February 2026</div>
    </div>
  );
}
