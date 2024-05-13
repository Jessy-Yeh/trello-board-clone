import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" />
        <h1>Trello clone</h1>
      </div>
      <h2>Project Management</h2>
    </div>
  );
};

export default Navbar;
