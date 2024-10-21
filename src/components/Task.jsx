import React from 'react';
import styles from './Task.module.css';
import { Trash, Check } from "phosphor-react"

export function Task({ id, texto, concluida, onToggle, onDelete }) {
  const handleChange = () => {
    onToggle(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const checkboxClassName = `${styles.checkbox} ${concluida ? styles['checkbox-marcada'] : styles['checkbox-desmarcada']}`;

  return (
    <div className={styles.tarefa}>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={concluida}
          onChange={handleChange}
          className={checkboxClassName}
          aria-label={`Marcar tarefa como ${concluida ? 'não concluída' : 'concluída'}`}
        />
        {concluida && <Check className={styles.checkIcon} />}
      </label>
      <p className={concluida ? styles.textoTachado : ''}>{texto}</p>
      <button onClick={handleDelete} aria-label="Deletar tarefa">
        <Trash />
      </button>
    </div>
  );
}
