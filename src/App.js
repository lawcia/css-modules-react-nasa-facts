import { useState } from 'react';

import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';
import Title from './Title/Title';

// Data
import initialFacts from './data/NASA_facts.json';

// Styles
import styles from './App.module.css';

function App() {
  const [facts, setFacts] = useState(initialFacts);

  const updateClicked = (id) => {
    const factsCopy = Object.assign([], facts);
    factsCopy[id].clicked = true;
    setFacts(factsCopy);
  };

  return (
    <div className={styles.App}>
      <Title />
      <Background />
      <Grid facts={facts} updateClicked={updateClicked} />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
