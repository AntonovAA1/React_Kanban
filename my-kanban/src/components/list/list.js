import {useState } from 'react'
import css from "./list.module.css"
import ListItem from "./list-item"
import AddListForm from '../add-list-form'
import Dropdown from '../dropdown'
import {  Route, Switch, NavLink } from 'react-router-dom'
import TaskDetail from "../taskdetail" 

export default function List (props) {
    const {todos, addCard, addDescription, addCardReady, addCardInProgress, addCardFinished} = props
    const [state] = useState (todos)

    const backlog = todos.find(todo => todo.title === 'Backlog')
    const ready = todos.find(todo => todo.title === 'Ready')
    const inProgress = todos.find(todo => todo.title === 'In Progress')
   
    return (
      
        <div className = {css.cards}>
            {todos.map ( todo => {
                return (
                    <div className = {css.card}>
                            <p className = {css.card_p}>{todo.title}</p>
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
                                            addDescription = {addDescription}/>
                                           
                                    </Route>
                                    </Switch>
                                </> )
                                })}
                            </ul>

                            {/* Выводим форму при клике на +Add card */}
                            {!state.isForm && todo.title === 'Backlog' ?
                            <AddListForm addCard={addCard}/>  : 
                          
                            <Dropdown  
                                addCardReady = {addCardReady} 
                                addCardInProgress = {addCardInProgress}
                                addCardFinished = {addCardFinished}
                                Backlog = {backlog}
                                Ready = {ready}
                                InProgress = {inProgress}
                                todotitle ={todo.title} />
                            }
                    </div>
                )
            })}
        </div>
    )
}