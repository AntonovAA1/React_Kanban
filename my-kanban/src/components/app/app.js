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
    let m1 = state.todos[0].items.push(data) //добавляем новый эл-т в конец массива
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
          <Main todos =  {state.todos} addCard={addCard} />
          <Footer todos =  {state.todos}/>
      </Router>
      </div>
  );
}

export default App;
