import style from './Input.module.css';

const Input: React.FC = () => {
    return (
        <div className={style.inputBox}>
            <input type="text" className={style.input} placeholder="Add a todo here..." />
        </div>
    );
};

export default Input;
