import { useState } from 'react';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

 //usando "handle" antes do nome da função para eventos disparadas pelo usuário

export function Post({ author, content, /*comments,*/ publishedAt }) {
  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComment] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');


  function handleCreateNewComment(evt) {
    evt.preventDefault();
    setComment([...comments, newCommentText]);
    setNewCommentText('');
  }


  function handleNewCommentChange(evt) {
    setNewCommentText(evt.target.value);
  }



  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          } else {
            return <p key={index}><a>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário'
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>

        {
          comments.map((comment, index) => {
            return (
              <Comment
              key={index}
                content={comment}
              />
            )
          })
        }

      </div>

    </article >
  )
}
