import styles from '../../../styles/components/Card.module.css'

function Card() {
  return(
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>Titulo</h2>{/*{title}*/}
        <h2>enterprise</h2>{/*{enterprise}*/}
        <p>description</p>{/*{description}*/}
      </div>
      <div className={styles.details}>
        <h3>Publicado</h3>
        <p>day</p>{/*{day}*/}
        <p>local</p>{/*{local}*/}
      </div>
    </div>
  )
}

export default Card