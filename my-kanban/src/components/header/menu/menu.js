import React, { useState } from "react";
import userPic from './user-avatar.svg';
import arrow from './arrow-down.svg';
import rectangle from './rectangle.svg';
import css from './menu.module.css'

export default function Menu () {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!isClicked);
    };

    return (
        <div className={css.usermenu} onClick={handleClick}>
            <div className={css.userMenuPicAndArrow}>
                <img className={css.userMenuUserpic}  src={userPic} alt=""/>
                <img
                    className={
                        isClicked
                            ? css.userMenuArrowRotated
                            : css.userMenuArrow
                    }
                    src={arrow}
                    alt="Dropdown arrow"
                />
            </div>
            {isClicked && (
                <>
                 <img src={rectangle} alt="rectangle..." className={css.rectangle}/>
                    <ul className={css.userMenuDropdown}>
                        <li className={css.userMenuDropdownEl}>My Profile</li>
                        <li className={css.userMenuDropdownEl}>Log Out</li>
                    </ul>
                </>
            )}
        </div>
    );
};
