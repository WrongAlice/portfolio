import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
    return (
      <div className={styles.container}>
   
  
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={70} height={16} />
            </span>
              + Next.js
          </a>
        </footer>
      </div>
    )
  }
  