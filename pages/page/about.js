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
      <h1 className={styles.title}> Who I Am</h1>
      <p className={styles.text}> I am a flexible and creative coder, but am most familiar with JS based programming at the moment</p>
<p className={styles.text} > Well, lets see... I started off as a hobby photographer/ artist, and during this time I became familiar with the Adobe creative suite + Graphic Art. 
However, I found myself wanting to do more. 
( Like creating entire web-based experiences for businesses. )
While personal branding is something I am familiar with ( I own a small online vintage resale business ), 
my most intense passion is for designing websites and apps. This is where I feel the most powerful creativity. I like the idea of making the web a beautful and functional place,
and tying the business identity into personalized web experiences. Plus, it makes me feel smart to be able to do this.</p>
       <p className={styles.text}> I am currently working on a full stack CRUD app, and am looking for a job in the field. 
       I am also looking to collaborate with other developers on projects.
        </p>
      
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