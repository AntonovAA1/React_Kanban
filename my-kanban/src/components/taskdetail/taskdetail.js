import css from './taskdetail.module.css';
import Addtaskdetail from '../addtaskdetail'
import { Route, NavLink } from 'react-router-dom';


export default function TaskDetail (props) {
        const { title, content, description, addDescription, id} = props;

        return (
            <div className={css.popup}>
                <div className={css.popup__header}>
                <h3> {content} </h3>
                    <Route>
                        <NavLink to='/' style={{ textDecoration: 'none' }} activeStyle={{ color: 'black' }} className={css.popup__header__btn}>
                            <div> &times; </div>
                        </NavLink>
                    </Route>
                </div>
                <div className={css.popup__header__description}>
                    <p >{description || '"This task has no description."'}</p>
                    <br />
                    <Addtaskdetail 
                    addDescription = {addDescription}
                    title = {title}
                    content = {content}
                    id = {id}/>

                </div>
            </div>
        
     );
};