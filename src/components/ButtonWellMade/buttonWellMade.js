import React, { useState, useRef, useEffect } from 'react';
import './buttonWellMade.css';

const ButtonWellMade = props => {
    const [label, setLabel] = useState(0);

    const clickHandler = () => {
        setLabel(label + 1);
    }

    const attachClassname = () => {
        const isEven = label % 2 === 0;
        return isEven
            ? "button-well-made button-well-made_even"
            : "button-well-made button-well-made_odd";
    }

    const render = () => {
        return (
            <div className="section">
                <div className="section__title">Button well made</div>
                <button
                    onClick={clickHandler}
                    className={attachClassname()}
                >
                    {label}
                </button>
            </div>
        );
    }

    return render();
}

export default ButtonWellMade;