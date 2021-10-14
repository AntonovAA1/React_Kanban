import {useState, useRef} from 'react'
//import nextId from 'react-id-generator'
import css from './add-list-form.module.css'

export default function AddListForm (props) {
    const {addCard} = props
    const {AddTask} = props
    const itemsInput = useRef()
    const [formValid, setFormValid] = useState(true)


function handleSubmit (e) {
    e.preventDefault ()
    const isValideted = isFormValidated()
    if (isValideted) {
        const items = itemsInput.current.value
        const data = {
            id: Math.random().toString(36),
			content: items,
        }
        setFormValid (true)
        addCard(data)
        AddTask() // переключаем кнопку с Submit на + Add card
        itemsInput.current.value = '' //очищаем форму после ввода
    } else {
        setFormValid (false)
    }
   
}

// валидация формы, принимает булевое значение
function isFormValidated () {
    return itemsInput.current.value !== ''
}

    return (
        <form className = {css.form} onSubmit={handleSubmit}>
            <input ref = {itemsInput} className = {css.input} type = "submint" placeholder = 'New task title...'/>
            <br />
            <button onClick = {handleSubmit} className = {css.button} type = "submint">Submit</button>
            {!formValid && <p className={css.error}>List must have a least one item</p>}
        </form>
    )
}