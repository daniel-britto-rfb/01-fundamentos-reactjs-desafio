import { useState } from 'react'
import './index.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
      <Header />
      <TaskList />
    </div>
  )
}

export default App
