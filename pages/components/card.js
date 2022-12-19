import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import tarot from '../assets/tarot.png'
import todo from '../assets/to-do.png'
import bugs from '../assets/bugs.png'
import rolly from '../assets/rolly.png'
import form from '../assets/form.png'
import styles from '../../styles/card.module.css'




const imageCards = [
  {
      title: 'Ai Tarot',
      desc: ' A React app that uses the UseContext and UseReducer hooks to implement the lightmode/darkmode feaure while toggling between two sets of cards that correspond to the mode you are currently in. All cards are custom made using MidJourney AI ',
      image: tarot,
      url: 'https://react-tarot.vercel.app',
      code: 'https://github.com/WrongAlice/react-tarot',
  },
  {
    title: 'To-Do List',
    desc: ' A React app where you can add + remove to-dos using local storage to persist the data',
    image: todo,
    url: 'https://big-to-do.vercel.app',
    code: 'https://github.com/WrongAlice/big-to-do',
},
{
  title: 'Full Stack CRUD App',
  desc: ' A React app front end and a Node.js back end that allows you to create, read, update, and delete bugs from a SQL database',
  image: bugs,
  url: 'https://fe-lilac.vercel.app',
  code: 'https://github.com/WrongAlice/b3fe',
},
{
  title: 'Rollaway',  
  desc: ' A simple, retro website for a local business, for information on their services and contact info. ',
  image: rolly,
  url: 'https://rollawayd.vercel.app',
  code: 'https://github.com/WrongAlice/b3fe'
},
{
  title: 'Vanilla JS Form Validation',
  desc: ' A simple, straightforward Validation form that uses vanilla JS to check for valid inputs ',
  image: form,
  url: 'https://form-validation-vanjs.vercel.app',
  code: 'https://github.com/WrongAlice/form-validation-vanjs'
},


]

function Card() {
    return (
      
    
<>
<div className={styles.navcont}>
<Link className={styles.nav} href="/">Home</Link>
<Link className={styles.nav} 
href="/page/about">About</Link>
</div>
      {imageCards.map(( card, index) => (  
        <div className={styles.card} key={index}>
        <header className={styles.cardheader}>
        <h1> {card.title} </h1>
         </header>
         <div className="Card-image">
          <Image className={styles.image}
          src={card.image} 
          width={850}
          height={500}
          alt="image"/>
          </div>
         <div>
          <p className={styles.p}> {card.desc} </p>
         </div>
         <div className={styles.linkcont}>
                        {card.url && <a className={styles.link} id="link" href={card.url} target="blank">URL</a>}
                    
                        {card.code && <a className={styles.link} id="link" href={card.code} target="blank">GitHub</a>}
                    </div>
      </div>
         ))}
      </>
    );
  }
  
  export default Card;
  