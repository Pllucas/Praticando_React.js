//CSS
import style from './Post.module.css'

export function Post (){
  return (
    <article className={style.post}>
        <header>
            <div className={style.author}>
                <img className={style.avatar} src="https://avatars.githubusercontent.com/u/139884388?v=4" alt="img" />
                <div className={style.authorInfo}>
                    <strong>Pedro Lucas</strong>
                    <span>Dev Full-Stack</span>
                </div>
            </div>

            <time title='25 de setembro de 2024 ás 8:12' dateTime='2024-09-25 08:12:00'>Públicado há 1 hora</time>
        </header>

        <div className={style.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            
            <p><a href='.'>👉 jane.design/doctorcare</a></p>

            <p>
                <a href=".">#novoprojeto</a>
                <a href=".">#nlw</a>
                <a href=".">#rocketseat</a>
            </p>
        </div>

        <form className={style.feedback}>
            <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Nossa,adorei amigo! Parabéns'
                />

            <button type='submit'>Publicar</button>
        </form>

        
    </article>
  )
}
