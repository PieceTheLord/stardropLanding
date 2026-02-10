"use client";

import { Button } from "@/components/ui/Button/Button";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.badge}>
          ✨ Платформа в раннем доступе
        </div>

        <h1 className={styles.title}>
          Монетизируйте свой <br />
          <span className={styles.highlight}>Telegram-канал</span> за секунды.
        </h1>

        <p className={styles.subtitle}>
          Самый простой способ продавать цифровые товары, эксклюзивный контент и пресеты
          прямо вашим подписчикам используя нативные Telegram Stars.
        </p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Введите ваш email"
            className={styles.input}
            required
          />
          <Button type="submit">
            Вступить в лист ожидания
          </Button>
        </form>

        <div className={styles.socialProof}>
          <p className={styles.trustedText}>Удобно, быстро и безопасно получайте оплату за свой продукт</p>
        </div>
      </div>
    </section>
  );
};
