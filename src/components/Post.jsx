import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { HandsClapping, ThumbsUp } from "phosphor-react";

import styles from "./Post.module.scss";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["post maneiro!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedAtRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  function handleCheckComment() {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong className={styles.nome}>{author.name}</strong>
            <span className={styles.prof}>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedAtRelative}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping size={20} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentário"
          onInvalid={handleCheckComment}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((eachComment) => {
          return (
            <Comment
              key={eachComment}
              content={eachComment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
