import styles from "./discoverbuttonsection.module.css";
import Image from "next/image";

const DiscoverButton = ({ label, link, href }) => {
  return (
    <div className={styles.discoverButtonSection}>
      <span className={styles.label}>{label}</span>
      <div className={styles.discoverButtonArrow}>
        <Image
          src="/assets/img/arrowrighttop.svg"
          alt="Vercel Logo"
          width={16}
          height={16}
          priority
        />
      </div>
    </div>
  );
};

export default DiscoverButton;
