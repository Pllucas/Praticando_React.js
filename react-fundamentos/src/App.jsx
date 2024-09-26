//COMPONENTS
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

//CSS
import style from './App.module.css'
import './index.css'

function App() {

  return (
    <div className='App'>
      <Header/>

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
