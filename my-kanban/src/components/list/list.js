import {useState} from 'react'
import css from "./list.module.css"
import ListItem from "./list-item"
import AddListForm from '../add-list-form'
import Dropdown from '../dropdown'
import {  Route, Switch, NavLink } from 'react-router-dom'
import Popap from "../popap" 
import TaskDetail from "../taskdetail" 


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
  

    const Backlog = todos.find(todo => todo.title === 'Backlog')
    const Ready = todos.find(todo => todo.title === 'Ready')
    const InProgress = todos.find(todo => todo.title === 'In Progress')
   
    return (
      
        <div className = {css.cards}>
            {todos.map ( todo => {
                return (
                    <div className = {css.card}>
                        <NavLink to={`/${todo.title}`} key={todo.title} style={{ textDecoration: 'none' }}>
                            <p className = {css.card_p}>{todo.title}</p>
                        </NavLink>
                        <Switch>
                            <Route exact path={`/${todo.title}`}>
                                <Popap {...todo} />
                            </Route>
                        </Switch>
                        <br /> 
                            <ul className = {css.list}>
                                {todo.items.map(item => {
                                    return  ( 
                                <>
                                    <NavLink to={`/${todo.title}/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                                        <ListItem content = {item.content}/>      
                                    </NavLink> 
                                    
                                    <Switch>
                                     <Route exact path={`/${todo.title}/${item.id}`}>
                                        <TaskDetail {...todo} 
                                            content = {item.content} 
                                            description = {item.description}
                                            id = {item.id}
                                            addCard = {addCard}/>
                                           
                                    </Route>
                                    </Switch>
                                </> )
                                })}
                            </ul>

                            {/* Выводим форму при клике на +Add card */}
                            {!state.isForm && todo.title === 'Backlog' ?
                            <AddListForm 
                                addCard={addCard} 
                                AddTask={AddTask}/>  : 
                          
                            <Dropdown  
                                addCardReady = {addCardReady} 
                                addCardInProgress = {addCardInProgress}
                                addCardFinished = {addCardFinished}
                                Backlog = {Backlog}
                                Ready = {Ready}
                                InProgress = {InProgress}
                                todotitle ={todo.title} />
                            }
                                

                    </div>
                  
                )
            })}
        </div>
         
    )
}