import styles from "../app/page.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navigation}>
        <div className="">#LIVEINGREECE</div>
        <div className={styles.links}>
          <div>For</div>
          <div>TALENTS</div>
          <div>ENTREPRENEURS</div>
          <div>INVESTORS</div>
          <div className={styles.extraLinks}>
            <div>Innitiatives</div>
            <div>Q&A</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
