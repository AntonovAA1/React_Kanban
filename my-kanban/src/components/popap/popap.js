
import css from './popap.module.css';
import { Route, NavLink } from 'react-router-dom';
import { formatDate } from '../../utils'


export default function Popap (props) {
    const { title, created } = props;
        return (
            <div className={css.popup}>
                <div className={css.popup__header}>
                   <h3 className={css.popup__header__title}>{title}</h3>
                    <Route>
                        <NavLink to='/' style={{ textDecoration: 'none' }} activeStyle={{ color: 'black' }} className={css.popup__header__btn}>
                            <div> &#9746; </div>
                        </NavLink>
                    </Route>
                </div>
                <p className={css.popup__created}>Created at: {formatDate(created)}</p>
                <div className={css.popup__header__description}>
                    Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
                    охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока
                    русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся.
                    Он появился в Раквере, где советский капитан наградил его медалью.
                    Медаль была украшена четырьмя непонятными словами, фигурой и
                    восклицательным знаком.
                </div>
            </div>
        
     );
};