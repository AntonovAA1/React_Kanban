import {useState, useRef} from 'react'
import css from './addtaskdetail.module.css'

export default function Addtaskdetail (props) {
    const {addCard} = props
    const itemsInput = useRef()
    const [formValid, setFormValid] = useState(true)
    const [isForm, setisForm] = useState(false)


function handleSubmit (e) {
    e.preventDefault ()
    const isValideted = isFormValidated()
    if (isValideted) {
        const items = itemsInput.current.value
        const dataDescription = {
            
			description: items,
        }

        setFormValid (true)
        //addCard(dataDescription)
        AddDescriptionBtn ()
        itemsInput.current.value = '' //очищаем форму после ввода
    } else {
        setFormValid (false)
    }

}

const AddDescriptionBtn = () => {
    setisForm (!isForm)
} 

// валидация формы, принимает булевое значение
function isFormValidated () {
    return itemsInput.current.value !== ''
}

    return (
        <>
        {isForm &&
            <form className = {css.form} onSubmit={handleSubmit}>
                <input ref = {itemsInput} className = {css.input} type = "submint" placeholder = 'Create/add a description for the task...'/>
                <br />
                <button onClick = {handleSubmit} className = {css.button} type = "submint">Submit</button>
                {!formValid && <p className={css.error}>Description must have a least one item</p>}
            </form>
        }
        <button onClick = {AddDescriptionBtn} className={css.buttonAdd}>
            {!isForm && "+ Add description"}
        </button>
        
        </>
    )
}