import styles from './buttons.module.css';

const Buttons = ({options, onHandleBtnClick}) => {

    
    const createBtns = (options) => {
        let arrOptionsName = Object.keys(options);
        return arrOptionsName.map((option, index) => {
            return <button key={index} value={option} onClick={(event) => {onHandleBtnClick(event)}} className={styles.button}>{option}</button>
        });
    }

    return (
        <div className={styles.buttons}>
            {createBtns(options)}
        </div>
    )
}

export default Buttons;