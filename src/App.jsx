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
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return.' },
      { type: 'link', content: 'carlos.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/166733735?v=4',
      name: 'Francisco Rafael',
      role: 'Chef',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de fazer mais uma pizza. Venham experimentar!' },
      { type: 'link', content: 'rafael.design/doctorcare' }
    ],
    publishedAt: new Date('2024-08-19 16:40:00')
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>

    </div>
  )
}

export default App
