import styles from "./Projects.module.css";
import goldenHiveImage from "../../assets/images/golden-hive.jpg";
import nutrimeImage from "../../assets/images/nutrime.png";

export default function Projects() {
  const projects = [
    {
      title: 'Nutrime',
      description: 'Sistema web que registra alimentos consumidos diariamente pelos usuários, permitindo o controle de calorias e nutrientes.',
      image: nutrimeImage,
      tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Git'],
    },
    {
      title: 'Golden Hive Solutions',
      description: 'Sistema web didático para apresentar a metodologia ágil Scrum',
      image: goldenHiveImage,
      tags: ['HMTL5', 'CSS3', 'JavasScript', 'PostgreSQL', 'Git'],
    },
  ];

  return (
    <section id="projetos" className={styles.projects}>
      <h2 className={styles.pjTitle}>Meus projetos</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}