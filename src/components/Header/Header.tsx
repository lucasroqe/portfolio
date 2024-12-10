import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>LR</div>
        <ul className={`${styles.navlinks} ${styles.desktopNavlinks}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre Mim</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </ul>
        <button className={styles.menuButton} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X size={24} color="#ffffff" />
          ) : (
            <Menu size={24} color="#605AD0" />
          )}
        </button>
        {isMobileMenuOpen && (
          <ul className={`${styles.navlinks} ${styles.mobileNavlinks}`}>
            <li>
              <a href="#home" onClick={toggleMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={toggleMobileMenu}>
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={toggleMobileMenu}>
                Projetos
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
