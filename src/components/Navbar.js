import styles from './Navbar.module.css'

import logo from '../imagens/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navleft}>
          <span>URBITÁVEL</span>
          <img src={logo}></img>

          <NavLink to='/'> Pagina inicial</NavLink>
          <NavLink to='/sobrenos'>Sobre nós</NavLink>
          <NavLink to='/causa'>Por trás da causa</NavLink>

        </div>

        <div className={styles.navright}>
          <NavLink to='/faleconosco'>Fale conosco</NavLink>
          <NavLink to='/privacidade'>Privacidade</NavLink>
          <NavLink to='/apoie' className={styles.active}>Apoie</NavLink>
        </div>
      </div>
   </nav>

    
  )
}

export default Navbar