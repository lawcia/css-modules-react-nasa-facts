import styles from "./Rocket.module.css";

function Rocket() {
  return (
    <div>
      <img src="shuttle.png" alt="shuttle" className={styles.img} />
    </div>
  );
}

export default Rocket;