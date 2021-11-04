import { useState, useEffect } from 'react';
import { DATA_BASE_NAME } from './utils/constant';
import { TaskObj } from './utils/interface';
import { getLocalTasks } from './utils/functon';
import Title from './Title';
import Input from './Input';
import Doing from './Doing';
import Done from './Done';
import style from './App.module.css';

const App: React.FC = () => {
    // 所有任务
    const [task, setTask] = useState<TaskObj[]>([]);
    // 未完成的任务
    const [doing, setDoing] = useState<TaskObj[]>([]);
    // 已完成的任务
    const [done, setDone] = useState<TaskObj[]>([]);

    // 初始化
    useEffect(() => {
        if (localStorage.getItem(DATA_BASE_NAME) === null) {
            localStorage.setItem(DATA_BASE_NAME, '[]');
        }
    }, []);
    // 获得所有任务
    useEffect((): void => {
        setTask(getLocalTasks());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // 根据是否已完成，分类
    useEffect((): void => {
        const newDoing: TaskObj[] = task.filter(obj => !obj.isDone);
        const newDone: TaskObj[] = task.filter(obj => obj.isDone);
        setDoing(newDoing);
        setDone(newDone);
    }, [task]);
    return (
        <>
            <div className={style.center}>
                <Title />
                <Input setTask={setTask} />
                <Doing doing={doing} setTask={setTask} />
                <Done done={done} setTask={setTask} />
            </div>
        </>
    );
};

export default App;
