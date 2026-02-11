"use client";

import { Button } from "@/components/ui/Button/Button";

import styles from "./Hero.module.css";
import { useState } from "react";
import { Toaster, toast } from 'sonner'

export const Hero = () => {
  const [email, setEmail] = useState<string>("")
  const sendWaitlistUser = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://stardrop-beta.vercel.app/api/waitlist_add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        toast.success("Вы успешно добавлены в лист ожидания!");
        setEmail("");
      } else {
        toast.error("Что-то пошло не так. Попробуйте еще раз.");
      }
    } catch (error) {
      toast.error("Произошла ошибка сети. Попробуйте еще раз.");
    }
  }

  return (
    <section className={styles.hero}>
      <div className="container">
        <Toaster position="top-center" richColors />
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

        <form className={styles.form} onSubmit={(e) => sendWaitlistUser(e)}>
          <input
            type="email"
            placeholder="Введите ваш email"
            className={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
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
