import styles from '../../styles/skills.module.css'

const skills = [
    {
        title: 'JS',
        body: 'Lorem Ipsum dolor sit amet',
        icon: 'https://img.icons8.com/ios/50/000000/javascript.png'
    },
    {
        title: 'HTML',
        body: 'Lorem Ipsum dolor sit amet',
        icon: 'https://img.icons8.com/ios/50/000000/html-5.png'
    },
    {
        title: 'CSS',
        body: 'Lorem Ipsum dolor sit amet',
        icon: 'https://img.icons8.com/ios/50/000000/css3.png'
    },
    {
        title: 'React',
        body: 'Lorem Ipsum dolor sit amet',
        icon: 'https://img.icons8.com/ios/50/000000/react-native.png'
    },
    {
        title: 'Node',
        body: 'Lorem Ipsum dolor sit amet',
        icon: 'https://img.icons8.com/ios/50/000000/nodejs.png'
    },
    {
        title: 'SQL',
        body: 'Lorem Ipsum dolor sit amet',
        icon: 'https://img.icons8.com/ios/50/000000/sql.png'
    },
    {
        title: 'Git',
        body: 'Lorem Ipsum dolor sit amet',
        icon: 'https://img.icons8.com/ios/50/000000/git.png'
    },
    {
        title: 'Testing',
        body: 'Lorem Ipsum dolor sit amet',
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
