import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Hero.module.css";
import mainMemoji from "../../assets/images/tes1.png";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.name}>Lucas Roque 🖐️</p>
        <h1 className={styles.title}>Desenvolvedor de 
          <span className={styles.titleSpan}> Software</span>
        </h1>
        <div className={styles.heroImage}>
          <img src={mainMemoji} alt="Lucas Roque Memoji" />
        </div>
        <p className={styles.description}>
        Aspirante por tecnologia e apaixonado por transformar ideias em realidade.
        </p>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/lucasroqe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={26} color="#605AD0" />
          </a>
          <a
            href="https://github.com/lucasroqe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={26} color="#605AD0" />
          </a>
          <a href="mailto:alvim.lucas2@hotmail.com">
            <Mail size={26} color="#605AD0" />
          </a>
        </div>
      </div>
    </section>
  );
}
