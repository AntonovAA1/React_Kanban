
import css from './main.module.css';
import List from "../list"


export default function Main (props) {
    const {addCard, addDescription, addCardReady, addCardInProgress, addCardFinished} = props
    const {todos} = props

    return (
       
       <main className = {css.main}>
            <List todos = {todos} 
                  addCard={addCard} 
                  addDescription = {addDescription}
                  addCardReady = {addCardReady} 
                  addCardInProgress = {addCardInProgress}
                  addCardFinished = {addCardFinished}/>
        </main>

    )
}
