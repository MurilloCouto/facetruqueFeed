import { Avatar } from "./Avatar";

import { Trash, HandsClapping } from "phosphor-react";

import styles from "./Comment.module.scss";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/62120617?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.userInfo}>
              <strong>Nome</strong>
              <time>ha 2h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <HandsClapping size={20} />
            Aplaudir
            <span>21</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
