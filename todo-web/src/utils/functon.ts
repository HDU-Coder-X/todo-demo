import { DATA_BASE_NAME } from './constant';
import { TaskObj } from './interface';

// 获得本地任务
export const getLocalTasks = () => JSON.parse(localStorage.getItem(DATA_BASE_NAME) as string);

// 设置本地任务
export const setLocalTasks = (tasks: TaskObj[]) => {
    localStorage.setItem(DATA_BASE_NAME, JSON.stringify(tasks));
};
