import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoGit,
  BiLogoPostgresql,
  BiLogoJava,
  BiLogoSpringBoot,
} from "react-icons/bi";

import styles from "./About.module.css";
import pcMemoji from "../../assets/images/note-memoji.png";

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <h2 className={styles.title}>Sobre Mim</h2>
      <div className={styles.content}>
        <div>
          <p className={styles.text}>
            Olá! Me chamo Lucas Roque e sou Desenvolvedor de Software,
            especializado em criar interfaces visuais.
          </p>
          <br />
          <p className={styles.text}>Algumas tecnologias que utilizo: </p>
          <div className={styles.middle}>
            <div className={styles.stacks}>
              <BiLogoReact size={40} color="#605AD0" />
              <BiLogoNodejs size={40} color="#605AD0" />
              <BiLogoJavascript size={40} color="#605AD0" />
              <BiLogoTypescript size={40} color="#605AD0" />
              <BiLogoGit size={40} color="#605AD0" />
              <BiLogoPostgresql size={40} color="#605AD0" />
              <BiLogoJava size={40} color="#605AD0" />
              <BiLogoSpringBoot size={40} color="#605AD0" />
            </div>
            <div className={styles.aboutImage}>
              <img src={pcMemoji} alt="Lucas Roque Memoji" />
            </div>
          </div>
          <a
            href="/cv.pdf"
            download="LucasRoque_CV.pdf"
            className={styles.button}
          >
            Baixar CV
          </a>
        </div>
      </div>
    </section>
  );
}
