import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://avatars.githubusercontent.com/u/166733735?v=4' />
          <div className={styles.authorInfo}>
            <strong>Carlos Rangel</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado a 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return.</p>
        <p><a href="">carlos.design/doctorcare</a></p>
        <p><a href="">#novoprojeto</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe seu comentário' />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article >
  )
}
