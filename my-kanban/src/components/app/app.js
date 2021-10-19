import {useState} from 'react'
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import css from './app.module.css';
import mock from '../../mock';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  const [state, setState] = useState(mock)
 
  // извлекаем из localStorage объект todos
    if (localStorage.Todos != null)
     {state.todos = JSON.parse(localStorage.getItem('Todos'))} 
  
   // записываем в localStorage объект todos с ключем 'Todos'
   const updateLocal = () => {
    localStorage.setItem('Todos', JSON.stringify(state.todos))
}

function addCard (data) {
    let m1 = state.todos[0].items.push(data) //добавляем новый эл-т в конец массива Baclog
    console.log (m1)
setState(state => {
        return {
            isForm: false,
            todos: [...state.todos], 
  }
    })
    updateLocal();// вызываем localStorage
}

function addCardReady (dataReady) {
  let m1 = state.todos[1].items.push(dataReady) //добавляем новый эл-т в конец массива Ready
  console.log (m1)

  let statetodos = state.todos[0].items.filter (item => item !== dataReady);
  console.log(dataReady.content, statetodos)
setState(state => {
      return {
          isForm: false,
          todos: [...state.todos], 
}
  })
  updateLocal();// вызываем localStorage
}

function addCardInProgress (dataInProgress) {
  let m1 = state.todos[2].items.push(dataInProgress) //добавляем новый эл-т в конец массива In Progress
  console.log (m1)
setState(state => {
      return {
          isForm: false,
          todos: [...state.todos], 
}
  })
  updateLocal();// вызываем localStorage
}

function addCardFinished (dataFinished) {
  let m1 = state.todos[3].items.push(dataFinished) //добавляем новый эл-т в конец массива In Progress
  console.log (m1)
setState(state => {
      return {
          isForm: false,
          todos: [...state.todos], 
}
  })
  updateLocal();// вызываем localStorage
}

  return (
      <div className ={css.app}>
      <Router>
          <Header />
          <Main todos =  {state.todos} 
                addCard={addCard} 
                addCardReady = {addCardReady} 
                addCardInProgress = {addCardInProgress}
                addCardFinished = {addCardFinished}/>
          <Footer todos =  {state.todos}/>
      </Router>
      </div>
  );
}

export default App;
