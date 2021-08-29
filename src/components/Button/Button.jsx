import classes from "./Button.module.css";

const Button = ({ color, title, onAdd }) => {
    return (
        <button className={classes.btn} onClick={onAdd} style={{backgroundColor: color}}>
            {title}
        </button>
    )
};

export default Button;