import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './comment.module.css'
import { useState } from 'react'

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComent() {
        setLikeCount(likeCount + 1)
    }

    function handleDeleteComment() {
        deleteComment(content)
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
                    <button onClick={handleLikeComent}>
                        <ThumbsUp />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}