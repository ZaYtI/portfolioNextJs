import Link from "next/link";
import styles from '../../app/styles/experience.module.css'

export default function ExperienceComponent(){
  return(
  <div className={styles.container}>
    <h1 className={`${styles.title} ${styles.top_title}`}>Experiences Pro</h1>
    <div className={styles.box}>
      <h3 className={styles.title}>Uneal</h3>
      <p className={styles.date}>juin 2023 - aout 2023</p>
      <Link className={styles.btn} href="https://uneal.com/">En savoir plus</Link>
    </div>
    <div className={styles.box}>
      <h3 className={styles.title}>Uneal</h3>
      <p className={styles.date}>juin 2022 - aout 2022</p>
      <Link className={styles.btn} href="https://uneal.com/">En savoir plus</Link>
    </div>
    <div className={styles.box}>
      <h3 className={styles.title}>Gardien de déchèterie</h3>
      <p className={styles.date}>juillet 2021 - aout 2021</p>
      <Link className={styles.btn} href="https://www.bethunebruay.fr/fr/annuaire-des-sites-communautaires-et-mairies/dechetterie-de-bruay-la-buissiere">En savoir plus</Link>
    </div>
    <div className={styles.box}>
      <h3 className={styles.title}>Conducteur de ligne Pasquier</h3>
      <p className={styles.date}>mars 2021 - juillet 2021</p>
      <Link className={styles.btn} href="https://www.pasquier.fr/">En savoir plus</Link>
    </div>
    <div className={styles.box}>
      <h3 className={styles.title}>Stages Aztek.lu</h3>
      <p className={styles.date}>avril 2023 - juin 2023</p>
      <Link className={styles.btn} href="https://new.aztek.lu/">En savoir plus</Link>
    </div>
  </div>
  )
}
