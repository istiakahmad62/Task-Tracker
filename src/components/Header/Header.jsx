import Button from "../Button/Button";
import classes from "./Header.module.css";

const Header = (props) => {
    // const onClick = () => {
    //     console.log("Click!")
    // }

    return (
        <header className={classes.header}>
            <h1>{props.title}</h1>
            <Button color={props.showTask ? "red" : "green"} title={props.showTask ? "Close" : "Add"} onAdd={props.onAdd} />
        </header>
    )
};

Header.defaultProps = {
    'title' : 'Task Tracker',
}

export default Header;