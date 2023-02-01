import styles from "./Smoke.module.css";

function Smoke() {
  return (
    <div className={styles.smoke}>
      <video className={styles.video} autoPlay loop>
        <source src="smoke.mov" type="video/mp4"  />
        </video>
    </div>
  );
}

export default Smoke;