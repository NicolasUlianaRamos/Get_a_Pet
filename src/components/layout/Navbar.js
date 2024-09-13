import { Link } from "react-router-dom"

import styles from "./Navbar.module.css"

import Logo from "../../assets/img/logo.png"

/* Context */
import { Context } from "../../context/UserContext"
import { useContext } from "react"

import MenuHamburguer from "../../assets/img/Menu.svg"

function Navbar(){

    const { authenticated, logout } = useContext(Context)

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={Logo} alt="Get a Pet" />
                <h2>Get a Pet</h2>
            </div>
            <input type="checkbox" id='caixa-menu' className={styles.caixaMenu} />
            <label htmlFor="caixa-menu">
                <img src={MenuHamburguer} className={styles.cabecalho__menuHamburguer} alt='Menu' />
            </label>
            <ul>
                <li>
                    <Link to="/">Adotar</Link>
                </li>
                {
                    authenticated ? (
                    <>
                        <li>
                            <Link to="/pet/myadoptions">Minhas adoções</Link>
                        </li>
                        <li>
                            <Link to="/pet/mypets">Meus pets</Link>
                        </li>
                        <li>
                            <Link to="/user/profile">Perfil</Link>
                        </li>
                        <li onClick={logout}>
                            <p>Sair</p>
                        </li>
                    </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login">Entrar</Link>
                            </li>
                            <li>
                                <Link to="/register">Cadastrar</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar