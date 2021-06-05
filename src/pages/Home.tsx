import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(!newTaskTitle) return;

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks([...tasks, newTask]);
    setNewTaskTitle('')
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists

    const taskChecked = tasks.map(task => task.id === id ? {
      ...task,
      done: !task.done
    } : task)

    setTasks(taskChecked)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask)
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}