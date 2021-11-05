import { VscCheck, VscChromeClose } from 'react-icons/vsc';
import { TaskObj } from '../utils/interface';
import { setLocalTasks, getLocalTasks } from '../utils/functon';
import { KeyboardEvent } from 'react';
import None from '../None';
import './index.css';

interface DoingProps {
    doing: TaskObj[];
    setTask: Function;
}

const Doing: React.FC<DoingProps> = ({ doing, setTask }) => {
    // 删除任务
    const deleteTask = (id: string) => {
        const allOldTaks: TaskObj[] = getLocalTasks();
        const newTasks: TaskObj[] = allOldTaks.filter((obj: TaskObj) => obj.id !== id);
        setLocalTasks(newTasks);
        setTask(getLocalTasks());
    };
    // 完成任务
    const finishTask = (id: string) => {
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
    // 失去焦点，恢复原任务
    const recoverTask = (id: string, oldContent: string) => {
        const inputNode: HTMLInputElement = document.getElementById(`${id}`) as HTMLInputElement;
        inputNode.value = oldContent;
    };
    // 更新任务
    const updateTask = (e: KeyboardEvent, id: string, oldContent: string) => {
        if (e.code !== 'Enter') return;
        const inputNode: HTMLInputElement = document.getElementById(`${id}`) as HTMLInputElement;
        const newContent: string = inputNode.value.trim();
        if (newContent === oldContent) {
            inputNode.blur();
            return;
        }
        const allOldTaks: TaskObj[] = getLocalTasks();
        for (const obj of allOldTaks) {
            if (obj.id === id) {
                obj.content = newContent;
                break;
            }
        }
        setLocalTasks(allOldTaks);
        setTask(getLocalTasks());
    };
    return (
        <div className="doing-center">
            <div className="title-box">
                <div className="doing-title">Doing</div>
            </div>
            {!doing.length ? (
                <None />
            ) : (
                <ul className="doing-ul">
                    {doing.map(obj => (
                        <li className="doing-li" key={obj.id}>
                            <div className="doing-done" onClick={() => finishTask(obj.id)}>
                                <VscCheck />
                            </div>
                            <input
                                type="text"
                                id={obj.id}
                                className="doing-edit"
                                defaultValue={obj.content}
                                onBlur={() => recoverTask(obj.id, obj.content)}
                                onKeyDown={(e: KeyboardEvent) => updateTask(e, obj.id, obj.content)}
                            />

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

export default Doing;
