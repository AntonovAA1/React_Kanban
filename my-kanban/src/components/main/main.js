
import css from './main.module.css';
import List from "../list"


export default function Main (props) {
    const {addCard} = props
    const {todos} = props
    return (
       
       <main className = {css.main}>
            <List todos = {todos} addCard={addCard}/>
        </main>

    )
}
