import { FunctionComponent } from "react";
import styles from "./ArchiveMessage.module.css";

export const ArchiveMessage: FunctionComponent = () => {
    return <div className={styles.message}>⚠️ This post is a quite old now - keep that in mind when reading</div>
}