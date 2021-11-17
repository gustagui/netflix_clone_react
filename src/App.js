import Logo from './assets/images/logo.png'
import Motivo1 from './assets/images/motivo-1.png'
import Motivo2 from './assets/images/motivo-2.png'

import './app.css'

function App() {
  return (
    <>
      <header>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div id="login">
          <select id="idioma">
            <option value="PT">Português</option>
            <option value="ING">Ingles</option>
          </select>
          <button>Entrar</button>
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
          <button>Vamos Lá</button>
        </div>
      </section>
      <hr className="divisor" />
      <section className="motivos">
        <div>
          <h1>Aproveite na TV.</h1>
          <p>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </p>
        </div>
        <div>
          <img src={Motivo1} alt="Motivo 1" />
        </div>
      </section>
      <hr className="divisor" />
      <section className="motivos alterna">
        <div>
          <h1>Aproveite na TV.</h1>
          <p>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </p>
        </div>
        <div>
          <img src={Motivo2} alt="Motivo 1" />
        </div>
      </section>
      <hr className="divisor" />
      <section className="motivos">
        <div>
          <h1>Aproveite na TV.</h1>
          <p>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </p>
        </div>
        <div>
          <img src={Motivo1} alt="Motivo 1" />
        </div>
      </section>
      <hr className="divisor" />
      <section className="motivos alterna">
        <div>
          <h1>Aproveite na TV.</h1>
          <p>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </p>
        </div>
        <div>
          <img src={Motivo1} alt="Motivo 1" />
        </div>
      </section>
      <hr className="divisor" />
    </>
  );
}

export default App;