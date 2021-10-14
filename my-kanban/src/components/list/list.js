import {useState} from 'react'
import css from "./list.module.css"
import ListItem from "./list-item"
import AddListForm from '../add-list-form'
import {  Route, Switch, NavLink } from 'react-router-dom'
import Popap from "../popap" 

export default function List (props) {
    const {addCard} = props
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
    // записываем из drop-down данные в спиок задач
    const handleChange = (e) => {
        const data = {
            id: Math.random().toString(36),
			content: e.target.value,
        }
		addCard(data)
        AddTask ()

    }

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
        
                            {state.isForm && todo.title === 'Backlog' ? 
                            <AddListForm addCard={addCard} AddTask={AddTask} /> : 


                            <select className={css.select} onChange={handleChange} value={todo.items.content}>
                                {/*<option> 123 </option>
                                <option> 456 </option>
                                <option> 789 </option>*/}
                             
                                {todo.items.map((item) => {
                                //return 
                                {console.log(item.content)}
                                <option>{item.content}</option>
                            })}
                            </select>
                            }

                        <button onClick = {AddTask} className={css.button}>
                            {state.isForm ? "" : "+ Add card"}
                        </button>
                        

                    </div>
                  
                )
            })}
        </div>
         
    )
}