import styles from './layout.module.css'
import Link from 'next/link'
export default function Footer() {
  return(
    <div className={styles.footer_wrapper}>
      <h1 className={styles.footer_title}>Antonin Riquart Portfolio</h1>
      <ul>
        <li>
          Titulaire du permis B et A
        </li>
        <li>
          <Link href="tel:+330760405456">07.60.40.64.56</Link>
        </li>
        <li>
          <Link href="mailto:antonin.riquart@gmail.com">antonin.riquart@gmail.com</Link>
        </li>
        <li>
          <Link href="https://maps.app.goo.gl/ryLbVuLFrMavTwcFA">adresse</Link>
        </li>
      </ul>
    </div>
  )
}
