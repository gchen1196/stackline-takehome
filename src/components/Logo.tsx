import logo from "../assets/stackline_logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <div className={styles.lineContainer}>
        <svg height="20" width="24">
          <line x1="0" y1="2" x2="200" y2="2" className={styles.line} />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
