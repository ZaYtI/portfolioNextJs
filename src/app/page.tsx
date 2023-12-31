import Image from 'next/image'
import styles from './styles/home.module.css'
import Presentation from '../components/presentation/presentation'

export default function Home() {
  return (
    <div className={styles.home_wrapper} >
      <Presentation />
    </div>
  )
}
