import { useState, useEffect } from 'react';
import Title from './Title';
import Input from './Input';
import Doing from './Doing';
import Done from './Done';
import style from './App.module.css';

const App: React.FC = () => {
    interface taskObj {
        id: string;
        content: string;
        isDone: boolean;
    }
    // 所有任务
    const [task, setTask] = useState<taskObj[]>([]);
    // 未完成的任务
    const [doing, setDoing] = useState<taskObj[]>([]);
    // 已完成的任务
    const [done, setDone] = useState<taskObj[]>([]);
    const todo: taskObj[] = [
        { id: '5g34jh5', content: 'Hello world!', isDone: false },
        { id: 't6h45jk6h345', content: 'Hello world!', isDone: true },
        { id: '245jhk234h5', content: 'Hello world!', isDone: false },
        { id: '4h5jk345gh', content: 'Hello world!', isDone: true },
        { id: '67hjkh345jkh', content: 'Hello world!', isDone: false },
        { id: '823hjk4ghkgh3j4', content: 'Hello world!', isDone: true },
    ];
    // 将获取到的任务放入所有任务
    useEffect((): void => {
        setTask([...todo]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // 根据是否已完成，分类
    useEffect((): void => {
        const newDoing: taskObj[] = task.filter(obj => !obj.isDone);
        const newDone: taskObj[] = task.filter(obj => obj.isDone);
        setDoing(newDoing);
        setDone(newDone);
    }, [task]);
    return (
        <>
            <div className={style.center}>
                <Title />
                <Input />
                <Doing doing={doing} />
                <Done done={done} />
            </div>
        </>
    );
};

export default App;
