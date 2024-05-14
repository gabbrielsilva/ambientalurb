import styles from './apoie.module.css'

import lixeira from './../../imagens/lix.png'
const apoie = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divcontainer}>
          <h1>Doe agora mesmo.</h1>
          <p>Precisamos de recursos para proteger a Terra e lutar contra o descarte indevido de lixo.</p>
          <img src={lixeira}></img>
          <span>Qualquer valor é bem vindo!</span>

          <form>
            <p>Insira o valor que você gostaria de doar:</p>
            <input type='number'  placeholder="R$"></input>
            <input type='submit' value='Realizar doação'></input>
          </form>
      </div>

    </div>
  )
}

export default apoie