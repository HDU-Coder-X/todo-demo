import { KeyboardEvent, useState } from 'react';
import { TaskObj } from '../utils/interface';
import { getLocalTasks, setLocalTasks } from '../utils/functon';
import { nanoid } from 'nanoid';
import style from './Input.module.css';

interface InputProps {
    setTask: Function;
}

const Input: React.FC<InputProps> = ({ setTask }) => {
    const [input, setInput] = useState<string>('');
    const addTask = (e: KeyboardEvent) => {
        if (e.code !== 'Enter') return;
        const content: string = input.trim();
        if (!content) {
            setInput('');
            return;
        }
        const allOldTaks: TaskObj[] = getLocalTasks();
        const newTask: TaskObj = { id: nanoid(), content, isDone: false };
        allOldTaks.push(newTask);
        setLocalTasks(allOldTaks);
        setTask(getLocalTasks());
        setInput('');
    };
    return (
        <div className={style.inputBox}>
            <input
                type="text"
                className={style.input}
                placeholder="Add a todo here..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={(e: KeyboardEvent) => addTask(e)}
            />
        </div>
    );
};

export default Input;
