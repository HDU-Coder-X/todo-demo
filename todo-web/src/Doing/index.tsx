import { VscCheck, VscChromeClose } from 'react-icons/vsc';
// import { useState } from 'react';
import './index.css';

interface taskObj {
    id: string;
    content: string;
    isDone: boolean;
}

interface props {
    doing: taskObj[];
}

const Doing: React.FC<props> = props => {
    const { doing } = props;
    // const [state, setstate] = useState(initialState)

    return (
        <div className="doing-center">
            <div className="doing-title">Doing</div>
            <ul className="doing-ul">
                {doing.map(obj => (
                    <li className="doing-li" key={obj.id}>
                        <div className="doing-done">
                            <VscCheck />
                        </div>
                        <input type="text" className="doing-edit" defaultValue={obj.content} />
                        <div className="doing-delete">
                            <VscChromeClose />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Doing;
