import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'


// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: "" 

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/166733735?v=4',
      name: 'Carlos Rangel',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Bom dia!' },
      { type: 'paragraph', content: 'Acabei de voltar do shopping. Que filme bom esse do Dead Pool!' },
      { type: 'link', content: '#deadPoolAndWolverineForever' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
    comments: [
      { author: 'Ivancicley', avatar: 'https://avatars.githubusercontent.com/u/449953?v=4', content: 'Bom dia! E a task, já fez?' },
      { author: 'Carlos Rangel', avatar: 'https://avatars.githubusercontent.com/u/166733735?v=4', content: '🤡' },
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/449953?v=4',
      name: 'Ivancicley',
      role: 'Dev Senior',
    },
    content: [
      { type: 'paragraph', content: 'Aula de Muaitay concluída com sucesso!' },
      { type: 'link', content: '#faixapreta' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
    comments: [
      { author: 'Carlos Rangel', avatar: 'https://avatars.githubusercontent.com/u/166733735?v=4', content: 'Tô terminando a task, viu?' },
      { author: 'Ivancicley', avatar: 'https://avatars.githubusercontent.com/u/449953?v=4', content: 'Certo!' },
    ]
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {
            posts.map((post, index) => {
              return (
                <Post
                  key={index}
                  author={post.author}
                  content={post.content}
                  comments={post.comments}
                  publishedAt={post.publishedAt}
                />)
            })
          }

        </main>
      </div>
    </>
  )
}

export default App
