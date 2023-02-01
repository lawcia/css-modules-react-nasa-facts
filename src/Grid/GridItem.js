import Explorer from './Explorer'
import Badge from './Badge'


import styles from "./GridItem.module.css";

function GridItem({ fact: { id, title, fact, clicked }, updateClicked}) {
  return (
    <div className={styles.card} onClick={() => updateClicked(id)}>
      {clicked ? <Explorer /> : <Badge />}
      <h2 className={styles.title}>{title}</h2>
      <article className={styles.fact}>{fact}</article>
    </div>
  );
}

export default GridItem;