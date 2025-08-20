import styles from './ProfileCard.module.css'


const ProfileCard = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <img className={styles.avatar} src='https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=' alt="" />
                <h1 className={styles.text}>Maria Janice Souza</h1>
                <h2 className={styles.text}>Developer Front-End Senior</h2>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Seguir</button>
                    <button className={styles.buttonT}>Voltar</button>
                </div>
            </div> 
        </div>
    )
}

export default ProfileCard