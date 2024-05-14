import styles from './causa.module.css'

import ar from './../../imagens/ar.png'
import gota from './../../imagens/gota-de-agua.png'
import reciclar from './../../imagens/reciclar.png'
import salvando from './../../imagens/salvando.png'
import solo from './../../imagens/solo.png'
import recurso from './../../imagens/recursos-humanos.png'

const Causa = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <span>
          Quais serão as consequências para o meio ambiente se houver um mal gerenciamento e descarte incorreto dos lixos em meios urbanos?
        </span>
      </div>
      <div className={styles.containerdiv}>
        <div className={styles.blocos}>
          <img src={solo}></img>
          <span>Poluição do solo e enchentes</span>
        </div>
        <div className={styles.blocos}>
          <img src={gota}></img>
          <span>Poluição da água</span>
        </div>
        <div className={styles.blocos}>
          <img src={ar}></img>
          <span>Poluição do ar</span>
        </div>
      </div>

      <div className={styles.containerdiv}>
        <div className={styles.blocos}>
          <img src={recurso}></img>
          <span>Riscos para a saúde humana</span>
        </div>
        <div className={styles.blocos}>
          <img src={salvando}></img>
          <span>Impactos na economia</span>
        </div>
        <div className={styles.blocos}>
          <img src={reciclar}></img>
          <span>Dificuldades no manejo de resíduos</span>
        </div>
      </div>

      <div className={styles.containertext}>
        <span>Poluição do ar: A queima de lixo em aterros mal gerenciados pode liberar gases tóxicos, como o dióxido de carbono, metano e óxidos de nitrogênio, que contribuem para o aquecimento global e a poluição do ar.</span>
        <span>Poluição da água: O descarte inadequado de lixo pode contaminar os corpos d'água próximos, prejudicando a vida marinha e a qualidade da água. Além disso, substâncias tóxicas podem se infiltrar no solo, contaminando os aquíferos subterrâneos.</span>
        <span>Emissão de gases de efeito estufa: Os aterros sanitários são responsáveis por cerca de 20% das emissões totais de metano, um gás de efeito estufa muito mais potente que o dióxido de carbono. Isso contribui para o aquecimento global e as mudanças climáticas.</span>
        <span>Prejuízos à saúde pública: O acúmulo de lixo em áreas urbanas pode atrair pragas como mosquitos, ratos e baratas, que podem transmitir doenças para os humanos.</span>
        <span>Degradação do solo: A disposição inadequada de lixo pode causar erosão do solo e a contaminação com produtos químicos tóxicos, tornando-o incapaz de sustentar a vida vegetal.</span>
      </div>
    </div>
  )
}

export default Causa