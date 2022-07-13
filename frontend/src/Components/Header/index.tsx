import header from '../../assets/img/header.svg'
import './styles.css'

function Header() {

  return (
    <>
       <header>
        <div className="dsmeta-logo-container">
            <img src={header} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por 
              <a href="https://www.linkedin.com/in/kevin-soares-dev/"> Kevin Soares </a>
               durante a semana Spring React @DevSuperior
            </p>
        </div>
    </header>
    </>
  )
}

export default Header
