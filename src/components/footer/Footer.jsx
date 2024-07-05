import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Mememe</div>
      <div className={styles.text}>
        Mememememe © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;