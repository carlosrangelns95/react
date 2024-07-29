import Header from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post
            author="Carlos Rangel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus at corporis adipisci."
          />

          <Post
            author="Gabriel Buzzi"
            content="Um novo posto muito legal"
          />
        </main>
      </div>

    </div>
  )
}

export default App
