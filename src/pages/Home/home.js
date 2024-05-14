import styles from './home.module.css'

import lixeira from '../../imagens/lixeira.png'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerUrb}>
        <div className={styles.textos}>
          <span className={styles.textUrb}>Urbitável</span>
          <div className={styles.projectUrb}>
            <span>O projeto Urbitável é uma iniciativa coletiva de estudantes da FIAP,  Que busca apresentar uma solução sustentável,  relativa a um dos problemas ambientais mais ocorridos pelo mundo todo:</span><br/><br/>
            <span>O inadequado descarte dos lixos e substratos prejudiciais  ao ambiente em meios urbanos.</span><br/> <br/>
            <span>Se trata, portanto, de uma ideia  interventiva que tem como objetivo recompensar a população urbana por descartar corretamente os seus lixos, através do programa consciente de descarte.</span>
          </div>
        </div>

        <div className={styles.lixeira}>
          <img src={lixeira}></img>
        </div>
      </div>

      <div className={styles.containerLuta}>
          <div className={styles.text1}>Lutamos pela saúde do planeta que habitamos</div>
          <div className={styles.text2}>Podemos mudar o mundo</div>
          <div className={styles.span}>
            <span>Se você quer defender o planeta e se somar às pessoas que atuam para proteger o meio ambiente, aqui é o seu lugar!</span><br/> <br/>
            <span>Nós acreditamos que um mundo mais verde, pacífico e justo para todas as formas de vida é possível, e não poupamos esforços para alcançá-lo.</span> <br/> <br/>
            <span>Temos décadas de ativismo que muito nos ensinou e que nos mostra que ainda temos muito o que fazer.</span>
          </div>

          <div className={styles.bottom}><NavLink to='/sobrenos'>saiba quem somos</NavLink></div>
      </div>
    </div>
  )
}

export default Home