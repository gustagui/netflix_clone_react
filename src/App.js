import Logo from './assets/images/logo.png'
import Motivo1 from './assets/images/motivo-1.png'
import Motivo2 from './assets/images/motivo-2.png'
import Button from './components/Button'
import Section from './components/Section'
import MOTIVOS from './constants/motivos'

import './netflix.css'

function App() {
  const idioma = 'ENG';

  return (    
    <div>
      <header>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div id="login">
          <select id="idioma">
            <option value="PT">Português</option>
            <option value="ING">Ingles</option>
          </select>
          <Button variante="sucesso" text='Entrar' />
        </div>
      </header>
      <section id="banner">
        <h1>
          Filmes, séries e muito <br />
          mais. Sem limites.
        </h1>
        <h3>Assista onde quiser. Cancele quando quiser.</h3>
        <small>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </small>
        <div>
          <input type="email" placeholder="Email" />
          <Button variante="alerta" text= 'Vamos lá' />
        </div>
      </section>
      <hr className="divisor" />

      <Section title={MOTIVOS[idioma].ONE.TITLE} 
            description={MOTIVOS[idioma].ONE.DESCRIPTION}
            image={Motivo1} />

      <hr className="divisor" />

      <Section title={MOTIVOS[idioma].ONE.TITLE}
            description={MOTIVOS[idioma].ONE.DESCRIPTION} 
            image={Motivo2} alterna={true} />

      <hr className="divisor" />

      <Section title={MOTIVOS[idioma].ONE.TITLE}
            description={MOTIVOS[idioma].ONE.DESCRIPTION} 
            image={Motivo2}  />

      <hr className="divisor" />

      <Section title={MOTIVOS[idioma].ONE.TITLE}
            description={MOTIVOS[idioma].ONE.DESCRIPTION} 
            image={Motivo2} alterna={true} />

      <hr className="divisor" />
      
    </div>
  );
}

export default App;