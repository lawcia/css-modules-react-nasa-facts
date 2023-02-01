import cx from 'classnames';

import GridItem from './GridItem';

import styles from './Grid.module.css';
import mediaStyles from './Media.module.css';

function Grid({ facts, updateClicked }) {
  return (
    <section className={cx(styles.grid, mediaStyles.grid)}>
      <>
        {facts.map((fact) => (
          <GridItem key={fact.id} fact={fact} updateClicked={updateClicked} />
        ))}
      </>
    </section>
  );
}

export default Grid;
