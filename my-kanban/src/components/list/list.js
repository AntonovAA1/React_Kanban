import {useState} from 'react'
import css from "./list.module.css"
import ListItem from "./list-item"
import AddListForm from '../add-list-form'
import Dropdown from '../dropdown'
import {  Route, Switch, NavLink } from 'react-router-dom'
import Popap from "../popap" 

export default function List (props) {
    const {addCard, addCardReady, addCardInProgress, addCardFinished} = props
    const {todos} = props
    const initialState = {
        isForm: false,
        todos: todos,
    }
    const [state, setState] = useState (initialState)

    // переключаем кнопку + Add card на submit
    const AddTask = () => {
        setState ({...state,  isForm: !state.isForm})
    }
    // записываем из drop-down данные в спиок задач Ready
    const handleChangeReady = (e) => {
        const dataReady = {
            id: Math.random().toString(36),
			content: e.target.value,
            }
        addCardReady(dataReady)
        AddTask ()
    }
    // записываем из drop-down данные в спиок задач In Progress
    const handleChangeInProgress = (e) => {
        const dataInProgress = {
            id: Math.random().toString(36),
			content: e.target.value,
            }
            addCardInProgress(dataInProgress)
        AddTask ()
    }
    // записываем из drop-down данные в спиок задач Finished
    const handleChangeFinished = (e) => {
        const dataFinished = {
            id: Math.random().toString(36),
			content: e.target.value,
            }
            addCardFinished(dataFinished)
        AddTask ()
    }

    const Backlog = todos.find(todo => todo.title === 'Backlog')
    const Ready = todos.find(todo => todo.title === 'Ready')
    const InProgress = todos.find(todo => todo.title === 'In Progress')

    return (
      
        <div className = {css.cards}>
            {todos.map ( todo => {
                return (
                    <div className = {css.card}>
                        <NavLink to={`/title/${todo.title}`} key={todo.title} style={{ textDecoration: 'none' }}>
                            <p className = {css.card_p}>{todo.title}</p>
                        </NavLink>
                        <Switch>
                            <Route exact path={`/title/${todo.title}`}>
                                <Popap {...todo} />
                            </Route>
                        </Switch>
                        <br />
                            <ul className = {css.list}>
                                {todo.items.map(item => {
                                    return  ( <ListItem content = {item.content}/> )       
                                })}
                            </ul>
                                
                                {/* Выводим форму при клике на +Add card */}
                                
                            {!state.isForm && todo.title === 'Backlog' ?
                            <AddListForm 
                                addCard={addCard} 
                                AddTask={AddTask}/>  : 
                            <>
                            <Dropdown  
                                AddTask = {AddTask}
                                addCardReady = {addCardReady} 
                                addCardInProgress = {addCardInProgress}
                                addCardFinished = {addCardFinished}
                                Backlog = {Backlog}
                                Ready = {Ready}
                                InProgress = {InProgress}
                                todotitle ={todo.title}
                                />
                            {/*<button onClick = {AddTask} className={css.button}>
                               {todo.title === 'Backlog' && "+ Add card"}
                            </button>
                            */}
                           </> 
                            }
                                {/* <button onClick = {AddTask} className={css.button}>
                                    {state.isForm && todo.title === 'Backlog'? "" : "+ Add card"}
                                </button>
                        */}
                                {/* Выводим ДропДаун со списком задач */}

                            {/*
                            {state.isForm && todo.title === 'Ready'  &&
                               <select className={css.select} onChange={handleChangeReady}>
                                 {Backlog.items.map((item) => {
                                    return <option value={item.content}>{item.content}</option>
                                    })}
                                </select> 
                            }
                            {state.isForm && todo.title === 'In Progress'  &&
                               <select className={css.select} onChange={handleChangeInProgress}>
                                 {Ready.items.map((item) => {
                                    return <option value={item.content}>{item.content}</option>
                                    })}
                                </select> 
                            }
                            {state.isForm && todo.title === 'Finished'  &&
                               <select className={css.select} onChange={handleChangeFinished}>
                                 {InProgress.items.map((item) => {
                                    return <option value={item.content}>{item.content}</option>
                                    })}
                                </select> 
                            }
                        */}
                        {/* <button onClick = {AddTask} className={css.button}>
                            {state.isForm && todo.title === 'Backlog'? "" : "+ Add card"}
                        </button>
                    */}

                    </div>
                  
                )
            })}
        </div>
         
    )
}