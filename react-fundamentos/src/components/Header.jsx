//IMG
import logo from '../assets/ignite-logo.svg'

//CSS
import style from './Header.module.css'

export function Header() {
    return(
        <header className={style.header}>
            <img src={logo} alt="ignite-logo" />
        </header>
    )
}