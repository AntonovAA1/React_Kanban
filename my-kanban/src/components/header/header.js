
import css from './header.module.css'
import Menu from './menu/menu.js'

export default function Header () {
    return (
        <header className = {css.header}>
            <div className = {css.awesome}>
                <h1>Awesome Kanban Board</h1>
            </div>
            <Menu />
        </header>
    )
}