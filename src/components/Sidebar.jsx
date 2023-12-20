import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.scss";

import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop&w=256&q=100=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className={styles.profile}>
          <Avatar src="https://avatars.githubusercontent.com/u/123082600?v=4" />

          <strong>Murillo Couto</strong>
          <span>Front End Developer</span>
        </div>
        <footer className={styles.footer}>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </div>
  );
}
