import styles from "./FeaturesGrid.module.css";

export const FeaturesGrid = () => {
  return (
    <section id="features" className={styles.section}>
      <div className={`container ${styles.grid}`}>

        {/* Global Payments - Wide */}
        <div className={`${styles.card} ${styles.cardGlobal}`}>
          <div className={styles.icon}>🌍</div>
          <h3 className={styles.cardTitle}>Глобальные платежи</h3>
          <p className={styles.cardDesc}>
            Принимайте платежи из любой точки мира через экосистему Telegram.
            Крипта или фиат — всё работает бесшовно.
          </p>
          {/* <div className={styles.visual} style={{ background: 'linear-gradient(90deg, #1e293b, #0f172a)' }} /> */}
        </div>

        {/* Zero Config - Small */}
        <div className={`${styles.card} ${styles.cardConfig}`}>
          <div className={styles.icon}>⚡</div>
          <h3 className={styles.cardTitle}>Без настройки</h3>
          <p className={styles.cardDesc}>
            Настройка бота не требуется. Подключите канал и начните продавать мгновенно.
          </p>
          {/* <div className={styles.visual} /> */}
        </div>

        {/* Secure Delivery - Small */}
        <div className={`${styles.card} ${styles.cardSecure}`}>
          <div className={styles.icon}>🔒</div>
          <h3 className={styles.cardTitle}>Безопасная доставка</h3>
          <p className={styles.cardDesc}>
            Файлы шифруются и доставляются только после подтверждения оплаты в блокчейне.
          </p>
          {/* <div className={styles.visual} /> */}
        </div>

        {/* Real-time Insights - Wide */}
        <div className={`${styles.card} ${styles.cardInsights}`}>
          <div className={styles.icon}>📊</div>
          <h3 className={styles.cardTitle}>Статистика в реальном времени</h3>
          <p className={styles.cardDesc}>
            Отслеживайте продажи, просмотры и конверсию и другую аналитику прямо в дашборде.
          </p>
          {/* <div className={styles.visual} style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', padding: '16px' }}>
            <div style={{ flex: 1, height: '40%', background: '#334155', borderRadius: 4 }}></div>
            <div style={{ flex: 1, height: '60%', background: '#3390ec', borderRadius: 4 }}></div>
            <div style={{ flex: 1, height: '30%', background: '#334155', borderRadius: 4 }}></div>
            <div style={{ flex: 1, height: '80%', background: '#00d2ff', borderRadius: 4 }}></div>
          </div> */}
        </div>

      </div>
    </section>
  );
};
