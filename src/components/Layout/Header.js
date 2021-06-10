import headerImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCardButton from "./HeaderCardButton";
const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
               <HeaderCardButton/>
            </header>
            <div className={classes['main-image']}>
                <img  src={headerImg} alt="Header Image"/>
                
            </div>
        </>
    );
};

export default Header;