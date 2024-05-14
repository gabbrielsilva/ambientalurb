import styles from './Section.module.css'

import reciclagem from './../imagens/reciclagem.png'
import { NavLink } from 'react-router-dom'
const section = () => {
  return (
    <div className={styles.container}>
        <div className={styles.retangulo}></div>
        <div className={styles.section}>
            <img src={reciclagem}></img>
            <form className={styles.form}>
                <span>Cadastre-se abaixo!</span>
                <h6>Receba alertas de ações e novos conteúdos no seu email.</h6>
                <input></input>
                <span className={styles.increver}><NavLink to='/'>Inscrevar-se</NavLink></span>
            </form>
        </div>
    </div>
  )
}

export default section