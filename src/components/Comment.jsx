import { Avatar } from "./Avatar";

import { Trash, ThumbsUp } from "phosphor-react";

import styles from "./Comment.module.scss";

import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://st3.depositphotos.com/3581215/18899/v/450/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.userInfo}>
              <strong>User Unknown</strong>
              <time>há 2h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Curtir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
