import Link from 'next/link';
import Image from 'next/image';
import styles from '../../app/styles/project.module.css';
import githubIcons from '../../../public/images/github.svg';
import gitlabIcons from '../../../public/images/gitlab.svg';

const projectLinks = [
  {
    icon: githubIcons,
    description: 'Accéder à mes projets GitHub. Vous pourrez accéder à tous mes projets personnels, que ce soit web ou mobile.',
    link: 'https://github.com/ZaYtI',
    alt: 'GitHub',
  },
  {
    icon: gitlabIcons,
    description: 'Accéder à mes projets GitLab. Vous pourrez accéder à tous mes projets scolaires.',
    link: 'https://gitlab.univ-artois.fr/antonin_riquart',
    alt: 'GitLab',
  },
];

export default function ProjectPresentation() {
  return (
    <div className={styles.wrapper}>
      {projectLinks.map((project, index) => (
        <div key={index} className={styles.project_presentation}>
          <div>
            <Image
              src={project.icon}
              alt={`Picture of ${project.alt} logo`}
              width={150}
              height={150}
            />
          </div>
          <div className={styles.description_project}>
            <p className={styles.text}>{project.description}</p>
            <Link className={styles.link_to} href={project.link}>
              Accéder à {project.alt}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
