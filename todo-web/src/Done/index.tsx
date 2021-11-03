import { VscChromeClose } from 'react-icons/vsc';
import { GrRotateLeft } from 'react-icons/gr';

interface taskObj {
    id: string;
    content: string;
    isDone: boolean;
}

interface props {
    done: taskObj[];
}

const Done: React.FC<props> = props => {
    const { done } = props;
    return (
        <div className="doing-center">
            <div className="doing-title">Done</div>
            <ul className="doing-ul">
                {done.map(obj => (
                    <li className="doing-li" key={obj.id}>
                        <div className="doing-done">
                            <GrRotateLeft />
                        </div>
                        <div className="doing-show">{obj.content}</div>
                        <div className="doing-delete">
                            <VscChromeClose />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Done;
