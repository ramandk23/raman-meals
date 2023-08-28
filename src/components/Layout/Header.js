import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsHeaderImg from '../../assets/meals-header.png';
import classes from './Header.module.css';

const Header = props => {
return <Fragment>
<header className={classes.header}>
    <h1>Raman Meals</h1>
    <HeaderCartButton onClick={props.onShowCart} />
</header>
<div className={classes['main-image']}>
    <img src={mealsHeaderImg} alt = 'Your Platter on the Table!!!'/>
</div>
</Fragment>
};

export default Header;