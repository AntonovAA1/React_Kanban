import css from './footer.module.css'

export default function Footer (props) {
    const {todos} = props
    return (
        <footer className = {css.footer}>
            <div className = {css.tasks}>
                <p>Active tasks: {todos[0].items.length}</p>
                <p>Finished tasks: {todos[3].items.length}</p>
            </div>
            <div className = {css.name}>Kanban board by &#60; ALEKSANDER &#62;,  &#60; Oct. 2021 &#62;</div> 
        </footer>
    )
    
}