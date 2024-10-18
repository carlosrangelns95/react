import { useState } from 'react';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

export function Post(props) {
  // const [comments, setComent] = useState([])



  // const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
  //   locale: ptBR,
  // })

  // const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
  //   locale: ptBR,
  //   addSuffix: true,
  // })
  // function handleCreateNewComment(evt) {
  //   evt.preventDefault()
  //   comments.push(3)
  //   console.log('nhãaaaaaa')
  // }

  return (
    <article className={styles.post}>

      <header>

        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={'publishedDateFormatted'} dateTime={'publishedDateFormatted'}>
          {'publicado a 1h'}
        </time>

      </header>

      <div className={styles.content}>
        {props.content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else {
            return <p><a>{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe seu comentário' />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>

        {
          props.content.map((comment) => {
            return <Comment />
          })
        }

      </div>

    </article >
  )
}
