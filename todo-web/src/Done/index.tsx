import { VscChromeClose, VscTrash } from 'react-icons/vsc';
import { TaskObj } from '../utils/interface';
import { setLocalTasks, getLocalTasks } from '../utils/functon';
import { GrRotateLeft } from 'react-icons/gr';
import './index.css';
import None from '../None';

interface DoneProps {
    done: TaskObj[];
    setTask: Function;
}

const Done: React.FC<DoneProps> = ({ done, setTask }) => {
    const deleteTask = (id: string) => {
        const allOldTaks: TaskObj[] = getLocalTasks();
        const newTasks: TaskObj[] = allOldTaks.filter((obj: TaskObj) => obj.id !== id);
        setLocalTasks(newTasks);
        setTask(getLocalTasks());
    };

    const reDoTask = (id: string) => {
        const allOldTaks: TaskObj[] = getLocalTasks();
        for (const obj of allOldTaks) {
            if (obj.id === id) {
                obj.isDone = !obj.isDone;
                break;
            }
        }
        setLocalTasks(allOldTaks);
        setTask(getLocalTasks());
    };
    const deleteAllTask = () => {
        const allOldTaks: TaskObj[] = getLocalTasks();
        const newTasks: TaskObj[] = allOldTaks.filter((obj: TaskObj) => !obj.isDone);
        setLocalTasks(newTasks);
        setTask(getLocalTasks());
    };
    return (
        <div className="doing-center">
            <div className="title-box">
                <div className="doing-title done-title">Done</div>
                {done.length ? (
                    <div className="deleteAll" onClick={deleteAllTask}>
                        <VscTrash />
                    </div>
                ) : null}
            </div>
            {!done.length ? (
                <None />
            ) : (
                <ul className="doing-ul">
                    {done.map(obj => (
                        <li className="doing-li" key={obj.id}>
                            <div className="doing-done" onClick={() => reDoTask(obj.id)}>
                                <GrRotateLeft />
                            </div>
                            <div className="doing-show">{obj.content}</div>
                            <div className="doing-delete" onClick={() => deleteTask(obj.id)}>
                                <VscChromeClose />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Done;
