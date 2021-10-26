import {useState} from 'react'
import css from '../list/list.module.css'


export default function Dropdown (props) {
    const {todotitle, addCardReady, addCardInProgress, addCardFinished, Backlog, Ready, InProgress} = props
    const [isForm, setisForm] = useState(false)
   
// переключаем кнопку + Add card на dropdown
    const AddTaskBtn = () => {
        setisForm (!isForm)
    } 

// записываем из drop-down данные в спиок задач Ready
    const handleChangeReady = (e) => {
       const dataReady = {
			content: e.target.value,
            }
        addCardReady(dataReady)
        AddTaskBtn ()
    }
 // записываем из drop-down данные в спиок задач In Progress
 const handleChangeInProgress = (e) => {
    const dataInProgress = {
        content: e.target.value,
        }
        addCardInProgress(dataInProgress)
        AddTaskBtn ()
}
 // записываем из drop-down данные в спиок задач Finished
 const handleChangeFinished = (e) => {
    const dataFinished = {
        content: e.target.value,
        }
        addCardFinished(dataFinished)
        AddTaskBtn ()
}
   
    return (
    <>
        {isForm && todotitle === 'Ready' &&
        <select  disabled = {Backlog.items.length < 2 ? true : false} className={css.select} onChange={handleChangeReady} >
           {Backlog.items.map((item) => {
            return <option value={item.content} id ={item.id}>{item.content}</option>
            })}
        </select>
        } 
       
       {isForm && todotitle === 'In Progress' &&
       <select disabled = {Ready.items.length < 2 ? true : false} className={css.select} onChange={handleChangeInProgress}>
          {Ready.items.map((item) => {
           return <option value={item.content} id ={item.id}>{item.content}</option>
           })}
       </select>
       } 
       
       {isForm && todotitle === 'Finished' &&
       <select disabled = {InProgress.items.length < 2 ? true : false} id ={InProgress.items.id} value={InProgress.items.content} className={css.select} onChange={handleChangeFinished}>
          {InProgress.items.map((item) => {
           return <option value={item.content} id ={item.id}>{item.content}</option>
           })}
       </select>
       } 
       <button onClick = {AddTaskBtn} className={css.button}>
           {!isForm ? "+ Add card" : ""}
       </button>
   </>
    )



}