import Link from 'next/link'
import Image from 'next/image'
import styles from '../../app/styles/presentation.module.css'

import githubIcons from '../../../public/images/github.svg'
import gitlabIcons from '../../../public/images/gitlab.svg'
import linkedinIcons from '../../../public/images/social-linkedin.svg'
import photo from '../../../public/images/moi.jpg'

const socialLinks = [
  { href: 'https://github.com/ZaYtI', src: githubIcons, alt: 'GitHub' },
  { href: 'https://gitlab.univ-artois.fr/antonin_riquart', src: gitlabIcons, alt: 'GitLab' },
  { href: 'https://www.linkedin.com/in/antonin-riquart-02007b252/', src: linkedinIcons, alt: 'LinkedIn' },
];

export default function Presentation() {
  return (
    <div className={styles.presentation_wrapper}>
      <div className={styles.left_part}>
        <Image
          className={styles.image_presentation}
          src={photo}
          alt="Picture of the author"
          width={500}
          height={500}
          placeholder='blur'
        />
      </div>
      <div className={styles.right_part}>
        <div className='element_wrapper'>
          <h1 className={styles.title}>Antonin Riquart</h1>
          <h3 className={styles.title}>developpeur web etudiant</h3>
          <p className={styles.description}>
            Actuellement en troisième année de BUT et passionné par le développement d application depuis plusieurs années, je suis à la recherche d un stage de 12 à 16 semaines à partir du 18 mars 2024 en tant que développeur full stack.
          </p>
          <div className={styles.link_item}>
            {socialLinks.map((link, index) => (
              <Link key={index} className={styles.image_link} href={link.href}>
                <Image
                  className={styles.image}
                  src={link.src}
                  alt={`Picture of ${link.alt} logo`}
                  width={50}
                  height={50}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
