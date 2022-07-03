import styles from './bubble.module.scss';

export function Bubble() {
  return (
    <>
      <div className={styles.ball}>
        <div className={styles.content}>
          content that overflows a little bit over the content
        </div>
      </div>
      <div className={styles.shadow}></div>
    </>
  );
}
