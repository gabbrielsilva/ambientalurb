import styles from './faleconosco.module.css'

const Faleconosco = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divcontainer}>
        <div className={styles.text}>
          <h1>Canal de comunicação</h1>
          <span>Entre em contato com nós via e-mail. Responderemos o mais rápido possível.</span>
        </div>

        <form >
          <div className={styles.form}>
            <p>Nome:</p>
            <input type="text"></input>

            <p>E-mail:</p>
            <input type="email"></input>
          </div>
          <div className={styles.duvida}>

            <p>Escreva sua mensagem ou dúvida:</p>
            <input type='text'></input>
            <input type="submit" value="Enviar" />
          </div>


        </form>
      </div>
    </div>
  )
}

export default Faleconosco