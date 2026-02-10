import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span>StarDrop</span>
          <span className={styles.badge}>BETA</span>
        </Link>

        <nav className={styles.nav}>
          <a href="#features" className={styles.nav_link}>
            <Button className={styles.navLink}>
              Функции
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};
