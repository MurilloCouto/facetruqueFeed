import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { Locale, format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { HandsClapping } from "phosphor-react";

import styles from "./Post.module.scss";

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType;
}


export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["post maneiro!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR as unknown as Locale,
    }
  );

  const publishedAtRelative = formatDistanceToNow(post.publishedAt, {
    locale: ptBR as unknown as Locale,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  function handleCheckComment(event: InvalidEvent<HTMLTextAreaElement>) {
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
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong className={styles.nome}>{post.author.name}</strong>
            <span className={styles.prof}>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedAtRelative}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
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
