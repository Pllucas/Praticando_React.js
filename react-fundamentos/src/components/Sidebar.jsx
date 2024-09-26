
//ICON
import { PencilLine } from 'phosphor-react'

//CSS
import style from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
        <img className={style.cover} 
        src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww" 
        alt='image-alt'/>
        
        <div className={style.profile}>
            <img className={style.avatar} src="https://avatars.githubusercontent.com/u/139884388?v=4" alt="picture-profile" />

            <strong>Pedro Lucas</strong>
            <span>Web Developer</span>
        </div>

        <footer className={style.footer}>
            <a href=".">
            <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}