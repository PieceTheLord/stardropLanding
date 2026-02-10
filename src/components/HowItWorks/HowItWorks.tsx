import styles from "./HowItWorks.module.css";

export const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Как это работает</h2>
          <p className={styles.subtitle}>Начните продавать в три простых шага.</p>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.iconWrapper}>☁️</div>
            <h3 className={styles.stepTitle}>1. Загрузите файлы</h3>
            <p className={styles.stepDesc}>
              Загружайте цифровые активы безопасно. Мы поддерживаем все типы файлов.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.iconWrapper}>🔗</div>
            <h3 className={styles.stepTitle}>2. Получите ссылку</h3>
            <p className={styles.stepDesc}>
              Создайте уникальную, защищенную ссылку на ваш продукт. Разместите её в канале или группе.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.iconWrapper}>✨</div>
            <h3 className={styles.stepTitle}>3. Зарабатывайте Stars</h3>
            <p className={styles.stepDesc}>
              Пользователи платят Telegram Stars. Вы получаете оплату мгновенно. Автоматическая доставка включена.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
