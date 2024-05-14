import styles from './Main.module.css'

import header from '../imagens/header.png'
const Main = () => {
  return (
    <div className={styles.container}>
        <img src={header}></img>
    </div>
  )
}

export default Main