import css from "./list.module.css"

export default function ListItem (props) {
    const {content} = props
    return (
       
        <li className = {css.listItem}>{content}</li>
     
    )
}