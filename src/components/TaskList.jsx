import React, { useState } from 'react';
import { Task } from './Task';
import { NewTask } from './NewTask';
import styles from './TaskList.module.css';

export function TaskList() {
  const [tarefas, setTarefas] = useState([]);

  const handleToggleTask = (id) => {
    setTarefas(prevTarefas => prevTarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  const handleDeleteTask = (id) => {
    setTarefas(prevTarefas => prevTarefas.filter(tarefa => tarefa.id !== id));
  };

  const handleAddTask = (texto) => {
    const newTask = {
      id: Date.now(),
      concluida: false,
      texto
    };
    setTarefas(prevTarefas => [...prevTarefas, newTask]);
  };

  const tarefasConcluidas = tarefas.reduce((valorAtual, tarefa) =>
    tarefa.concluida ? valorAtual + 1 : valorAtual, 0);

  return (
    <>
      <NewTask onAddTask={handleAddTask} />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headercriadas}>
            <p>Tarefas criadas</p>
            <span>{tarefas.length}</span>
          </div>
          <div className={styles.headerconcluidas}>
            <p>Concluídas</p>
            <span>{tarefasConcluidas} de {tarefas.length}</span>
          </div>
        </div>
        <div className={styles.listadetarefas}>
          {tarefas.length > 0 ? (
            tarefas.map(tarefa => (
              <Task
                key={tarefa.id}
                id={tarefa.id}
                concluida={tarefa.concluida}
                texto={tarefa.texto}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            ))
          ) : (
            <div className={styles.semTarefas}>
              <img src="/clipboard.png" alt="Clipboard" className={styles.semTarefasIcone} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
