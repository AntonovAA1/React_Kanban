import {useState} from 'react'
import css from '../list/list.module.css'


export default function Dropdown (props) {
    const {todotitle, addCardReady, addCardInProgress, addCardFinished, Backlog, Ready, InProgress} = props
    const [isForm, setisForm] = useState(false)
   
// переключаем кнопку + Add card на dropdown
    const addTaskBtn = () => {
        setisForm (!isForm)
    } 

// записываем из drop-down данные в спиок задач Ready
    const handleChangeReady = (e) => {
       const dataReady = {
			content: e.target.value,
            }
        addCardReady(dataReady)
        addTaskBtn ()
    }
 // записываем из drop-down данные в спиок задач In Progress
 const handleChangeInProgress = (e) => {
    const dataInProgress = {
        content: e.target.value,
        }
        addCardInProgress(dataInProgress)
        addTaskBtn ()
}
 // записываем из drop-down данные в спиок задач Finished
 const handleChangeFinished = (e) => {
    const dataFinished = {
        content: e.target.value,
        }
        addCardFinished(dataFinished)
        addTaskBtn ()
        console.log(e.target.value)
}
   
    return (
    <>
        {isForm && todotitle === 'Ready' &&
        <select  disabled = {Backlog.items.length < 1 ? true : false} className={css.select} onChange={handleChangeReady} >
           <option value=''>Select value</option>;
           {Backlog.items.map((item) => {
            return <option key = {item.content} value={item.content} id ={item.id}>{item.content}</option>
            })}
        </select>
        } 
       
       {isForm && todotitle === 'In Progress' &&
       <select disabled = {Ready.items.length < 1 ? true : false} className={css.select} onChange={handleChangeInProgress}>
        <option value=''>Select value</option>;
          {Ready.items.map((item) => {
           return <option key = {item.content} value={item.content} id ={item.id}>{item.content}</option>
           })}
       </select>
       } 
       
       {isForm && todotitle === 'Finished' &&
       <select disabled = {InProgress.items.length < 1 ? true : false} id ={InProgress.items.id} value={InProgress.items.content} className={css.select} onChange={handleChangeFinished}>
          <option value=''>Select value</option>;
          {InProgress.items.map((item) => {
           return <option key = {item.content} value={item.content} id ={item.id}>{item.content}</option>
           })}
       </select>
       } 
       <button onClick = {addTaskBtn} className={css.button}>
           {!isForm ? "+ Add card" : ""}
       </button>
   </>
    )
}