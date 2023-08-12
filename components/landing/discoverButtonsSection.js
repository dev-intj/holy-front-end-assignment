import styles from "../../app/page.module.css";
import stylesSection from "./discoverbuttonsection.module.css";

import DiscoverButton from "./discoverButton";

const DiscoverButtonSection = () => {
  return (
    <div className={stylesSection.layout}>
      <h1 className={styles.header}>
        Discover innovation <br />
        opportunities
      </h1>
      <div>
        <DiscoverButton label="TALENTS" />
        <DiscoverButton label="ENTERPRENEURS" />
        <DiscoverButton label="INVESTORS" />
      </div>
    </div>
  );
};

export default DiscoverButtonSection;
