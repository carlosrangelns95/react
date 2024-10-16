import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/166733735?v=4',
      name: 'Carlos Rangel',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Bom dia' },
      { type: 'paragraph', content: 'Acabei de fazer mais uma pizza. Venham experimentar!' },
      { type: 'link', content: 'carlos.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/449953?v=4',
      name: 'Ivancicley',
      role: 'Chef',
    },
    content: [
      { type: 'paragraph', content: '?' },
      { type: 'paragraph', content:  'Já fez a task de relatórios?' },
      { type: 'link', content: 'ivancicley.design/doctorcare' }
    ],
    publishedAt: new Date('2024-08-19 16:40:00')
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author= {posts[0].author}
            content= {posts[0].content}
          />
          <Post
            author= {posts[1].author}
            content= {posts[1].content}
          />
        </main>
      </div>
    </>
  )
}

export default App
