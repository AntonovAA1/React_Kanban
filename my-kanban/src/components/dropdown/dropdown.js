import {useState} from 'react'
import css from '../list/list.module.css'


export default function Dropdown (props) {
    const {todotitle, AddTask, addCardReady, addCardInProgress, addCardFinished, Backlog, Ready, InProgress} = props

   
    const [isForm, setisForm] = useState(false)
    
    // переключаем кнопку + Add card на dropdown
    const AddTaskBtn = () => {
        setisForm (!isForm)
    } 

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

    return (
    <>
        {isForm && todotitle === 'Ready' &&
        <select className={css.select} onChange={handleChangeReady}>
           {Backlog.items.map((item) => {
            return <option value={item.content}>{item.content}</option>
            })}
        </select>
        } 
       
   
       {isForm && todotitle === 'In Progress' &&
       <select className={css.select} onChange={handleChangeInProgress}>
          {Ready.items.map((item) => {
           return <option value={item.content}>{item.content}</option>
           })}
       </select>
       } 
       
       {isForm && todotitle === 'Finished' &&
       <select className={css.select} onChange={handleChangeFinished}>
          {InProgress.items.map((item) => {
           return <option value={item.content}>{item.content}</option>
           })}
       </select>
       } 
       <button onClick = {AddTaskBtn} className={css.button}>
           {!isForm ? "+ Add card" : ""}
       </button>


   </>
    )



}