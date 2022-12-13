import styles from '../../styles/skills.module.css'
import node from '../assets/node.png'

const skills = [
    {
        title: 'HTML',
        body: 'The standard markup language for web pages and applications',
        icon: 'https://img.icons8.com/ios/50/000000/html-5.png'
    },
    {
        title: 'CSS',
        body: 'Standard CSS3, Flexbox, Grid, SASS, AntDesign, Bootstrap, Material UI',
        icon: 'https://img.icons8.com/ios/50/000000/css3.png'
    },
    {
        title: 'JavaScript',
        body: 'Vanilla JS, ES6, AJAX, JSON, APIs',
        icon: 'https://img.icons8.com/ios/50/000000/javascript.png'
    },
    {
        title: 'React',
        body: 'React Hooks, React Router, Redux, Context API, Styled Components, Next.js',
        icon: 'https://img.icons8.com/ios/50/000000/react-native.png'
    },
    {
        title: 'Node.JS',
        body: 'Express, RESTful APIs, JWT, Bcrypt, PostgreSQL, Knex, Heroku',   
        icon: 'https://img.icons8.com/ios/50/000000/javascript.png'
    },
    {
        title: 'SQL',
        body: 'PostgreSQL, Knex, SQLite3',
        icon: 'https://img.icons8.com/ios/50/000000/sql.png'
    },
    {
        title: 'Git',
        body: 'Git, GitHub, Heroku, Vercel, Netlify, CLI, Continuous Integration',
        icon: 'https://img.icons8.com/ios/50/000000/git.png'
    },
    {
        title: 'Testing',
        body: 'Cypress.io, Jest, Playwright',
        icon: 'https://img.icons8.com/ios/50/000000/test-passed.png'
    },
]

export default function Home() {
    return (
    <div className={styles.container}>
      {skills.map((skill, index) => (
            <div className={styles.card} key={index}>
            <div className={styles.cardheader}>
            <img className={styles.icon} src={skill.icon} alt="icon"/>
            </div>
            <div className={styles.cardinfo}>
            <p className={styles.texttitle}>{skill.title}</p>
            <p className={styles.textbody}>{skill.body}</p>
            </div>
            </div>
        ))}

    </div>
    )
}
