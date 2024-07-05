import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  // https://images.pexels.com/photos/3721535/pexels-photo-3721535.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load
  return (
    <div className={styles.imgContainer}>
      <Image src="/about.png" alt="About Image" fill className={styles.img} />
    </div>
  );
};

export default AboutPage;
