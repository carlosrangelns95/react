import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './comment.module.css'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
    const [aplausos, setAplausos] = useState(0);

    function addAplauso() {
        setAplausos(aplausos + 1)
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={/*props.avatar*/ 'https://avatars.githubusercontent.com/u/166733735?v=4'} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{/*props.author*/ 'Carlos Rangel'}</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                        </div>

                        <button
                            title='Deletar comentário'
                            onClick={handleDeleteComment}
                        >
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={addAplauso}>
                        <ThumbsUp />
                        Aplaudir
                        <span>{aplausos}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}