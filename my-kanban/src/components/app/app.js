import { useState } from 'react'
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import css from './app.module.css';
import mock from '../../mock';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [state, setState] = useState(mock)

//извлекаем из localStorage объект todos, если он там есть
    if (localStorage.Todos != null)
    {state.todos = JSON.parse(localStorage.getItem('Todos'))} 
  
  // записываем в localStorage объект todos с ключем 'Todos'
  //useEffect(() => {
  //  window.localStorage.setItem('Todos', JSON.stringify(state.todos))
  //}, [state.todos])

  const updateLocal = () => {
  localStorage.setItem('Todos', JSON.stringify(state.todos))
}

/* добавляем новое описание задачи description  */
function addDescription (dataDescription) {  
  const updatedDescription = state.todos.map (todo => {
  if (todo.items.content === dataDescription.content) 
    return todo.items.description = dataDescription.description
    return todo
})
console.log (dataDescription, updatedDescription)
setState ({...state.todos, updatedDescription})
updateLocal();// вызываем localStorage
}


/*добавляем новый эл-т в конец массива Backlog */
function addCard (data) {  
    const updatedTodos = state.todos.map (todo => {
      if (todo.title === 'Backlog')
        return  todo.items.push(data)
        return todo
    })
    setState ({...state.todos, updatedTodos})
    updateLocal();// вызываем localStorage
}

function addCardReady (dataReady) {
   /* сформирован новый массив для Baclog  */
  let newBacklog = state.todos[0].items.filter(item => item.content !== dataReady.content); 
  /* функция для обновления массивов Backlog и Ready */
  const updatedReady = state.todos.map (todo => {
    if (todo.title === 'Backlog')
      return  todo.items = newBacklog
    if (todo.title === 'Ready')
      return  todo.items.push(dataReady)
      return todo
  })
  setState ({...state.todos, updatedReady}) /* перезаписываем state */
  updateLocal();// вызываем localStorage
}

function addCardInProgress (dataInProgress) {
  let newInProgress = state.todos[1].items.filter(item => item.content !== dataInProgress.content); 
  const updatedInProgress = state.todos.map (todo => {
    if (todo.title === 'Ready')
      return  todo.items = newInProgress
    if (todo.title === 'In Progress')
      return  todo.items.push(dataInProgress)
      return todo
  })
  setState ({...state.todos, updatedInProgress})
  updateLocal();// вызываем localStorage
}

function addCardFinished (dataFinished) {
  let newFinished = state.todos[2].items.filter(item => item.content !== dataFinished.content); 
  const updatedFinished = state.todos.map (todo => {
    if (todo.title === 'In Progress')
      return  todo.items = newFinished
    if (todo.title === 'Finished')
      return  todo.items.push(dataFinished)
      return todo
  })
  setState ({...state.todos, updatedFinished})
  updateLocal();// вызываем localStorage
}


  return (
      <div className ={css.app}>
      <Router>
          <Header />
          <Main todos =  {state.todos} 
                addCard={addCard} 
                addDescription = {addDescription}
                addCardReady = {addCardReady} 
                addCardInProgress = {addCardInProgress}
                addCardFinished = {addCardFinished}/>
          <Footer todos =  {state.todos}/>
      </Router>
      </div>
  );
}

export default App;
