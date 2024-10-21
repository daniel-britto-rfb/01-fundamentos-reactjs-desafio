import React, { useState } from 'react';
import styles from './NewTask.module.css';
import { PlusCircle } from "phosphor-react"

export function NewTask({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskText.trim()) {
      onAddTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.textarea}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
