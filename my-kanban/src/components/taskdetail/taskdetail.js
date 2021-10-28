import css from './taskdetail.module.css';
import Addtaskdetail from '../addtaskdetail'
import { Route, NavLink } from 'react-router-dom';
import { formatDate } from '../../utils'


export default function TaskDetail (props) {
        const { title, created, content, description, addCard} = props;

        return (
            <div className={css.popup}>
                <div className={css.popup__header}>
                   <h3 className={css.popup__header__title}> Title: "{title}"</h3>
                    <Route>
                        <NavLink to='/' style={{ textDecoration: 'none' }} activeStyle={{ color: 'black' }} className={css.popup__header__btn}>
                            <div> &#9746; </div>
                        </NavLink>
                    </Route>
                </div>
                <p className={css.popup__created}>Created at: {formatDate(created)}</p>
                <div className={css.popup__header__description}>
                    <h5> Task:  "{content}" </h5>
                    <p >Description: {description || "(this task has no description...)"}</p>
                    <Addtaskdetail addCard = {addCard}/>

                </div>
            </div>
        
     );
};