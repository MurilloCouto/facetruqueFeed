import styles from "./Header.module.scss";
import igniteLogo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logoFeed" />
      <h1>FaceTruque</h1>
    </header>
  );
}
