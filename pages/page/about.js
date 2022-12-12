import Link from 'next/link';
import styles from '../../styles/About.module.css'
import Footer from '../components/footer'
import Image from 'next/image'
import Skills from '../components/skills'



function About() {
    
  return (
    <div className={styles.about}>
  
  <div className={styles.navcont}>
  <Link className={styles.nav} 
href="/"> Home </Link>
<Link className={styles.nav} href="/components/main"> Projects </Link>

</div>
<div>
      <h1 className={styles.title}> Hi, I am a full stack web developer </h1>
      <p className={styles.text}> I know a variety of programming languages, but am most familiar with Vanilla JS</p>
<p className={styles.text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h3> Check out my skills </h3>
      <Skills/>
      </div>
<div className={styles.footer}>
       <Footer/>
       </div>
    </div>
    
  );
}

export default About;