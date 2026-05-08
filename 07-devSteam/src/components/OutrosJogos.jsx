import styles from './OutroJogos.module.css'

function OutrosJogos(props){

  return(

    <div className={styles.card}>

      {/* IMAGEM */}
      <img
        src={props.image}
        alt="game"
        className={styles.image}
      />

      {/* INFORMAÇÕES */}
      <div className={styles.info}>

        <h2>{props.title}</h2>

        <p>{props.category}</p>

        <span>{props.price}</span>

      </div>

      {/* BOTÃO */}
      <button className={styles.button}>
        ADICIONAR AO CARRINHO
      </button>

    </div>
  )
}

export default OutrosJogos