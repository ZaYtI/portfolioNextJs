import styles from './layout.module.css';
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'accueil' },
  { href: '/project', label: 'projets' },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {navItems.map((item, index) => (
        <div key={index} className={styles.navbar_item}>
          <Link href={item.href} className={styles.navbar_item_link}>
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
