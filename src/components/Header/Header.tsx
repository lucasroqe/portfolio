import { Menu } from "lucide-react";
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>LR</div>
        <ul className={styles.navlinks}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre Mim</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          {/* <li>
            <a href="#contato">Contato</a>
          </li> */}
        </ul>
        <button className={styles.menuButton}>
          <Menu size={24} color="#605AD0"/>
        </button>
      </nav>
    </header>
  );
}
