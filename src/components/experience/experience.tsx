import Link from "next/link";
import styles from '../../app/styles/experience.module.css';

type ExperienceBoxProps = {
  title: string;
  date: string;
  href: string;
};

const ExperienceBox: React.FC<ExperienceBoxProps> = ({ title, date, href }) => (
  <div className={styles.box}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.date}>{date}</p>
    <Link className={styles.btn} href={href}>
      En savoir plus
    </Link>
  </div>
);

const experiences = [
  { title: "Uneal", date: "juin 2023 - aout 2023", href: "https://uneal.com/" },
  { title: "Uneal", date: "juin 2022 - aout 2022", href: "https://uneal.com/" },
  {
    title: "Gardien de déchèterie",
    date: "juillet 2021 - aout 2021",
    href: "https://www.bethunebruay.fr/fr/annuaire-des-sites-communautaires-et-mairies/dechetterie-de-bruay-la-buissiere",
  },
  {
    title: "Conducteur de ligne Pasquier",
    date: "mars 2021 - juillet 2021",
    href: "https://www.pasquier.fr/",
  },
  { title: "Stages Aztek.lu", date: "avril 2023 - juin 2023", href: "https://new.aztek.lu/" },
];

const ExperienceComponent = () => (
  <div className={styles.container}>
    <h1 className={`${styles.title} ${styles.top_title}`}>Experiences Pro</h1>
    {experiences.map((experience, index) => (
      <ExperienceBox key={index} {...experience} />
    ))}
  </div>
);

export default ExperienceComponent;
