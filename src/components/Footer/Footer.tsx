import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span style={{ color: 'var(--primary)' }}>●</span>
            StarDrop
          </div>
          <p className={styles.tagline}>
            Создано для экономики продаж в Telegram.
          </p>
        </div>

        <nav className={styles.links}>
          <Link href="https://github.com/PieceTheLord/stardrop" target="_blank" className={styles.link}>GitHub repo</Link>
          <Link href="https://github.com/PieceTheLord" target="_blank" className={styles.link}>Contacts</Link>
          <Link href="https://t.me/Alexey_TheGreat" target="_blank" className={styles.link}>Telegram</Link>
        </nav>

        <div className={styles.copyright}>
          © 2026 StarDrop Inc.
        </div>
      </div>
    </footer>
  );
};
