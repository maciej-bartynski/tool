import React, { useState, useRef, useEffect } from 'react';
import './buttonShity.css';

const ButtonShity = props => {
    const [label, setLabel] = useState(0);

    const clickHandler = () => {
        setLabel(label + 1);
    }

    const attachClassname = () => {
        const isEven = label % 2 === 0;
        return isEven
            ? "button-shity button-shity_even"
            : "button-shity button-shity_odd";
    }

    const render = () => {
        return (
            <div className="section">
                <div className="section__title">Crap-button shity made</div>
                <button
                    key={label}
                    onClick={clickHandler}
                    className={attachClassname()}
                    data-name="my-name"
                >
                    {label}
                    <span data-some="x">asdf</span>
                    {/* <span>x
                        <a href="dd" target="_blank">Ale jazda</a>
                        <input type="checkbox" selected />
                        <button disabled>dusable</button>
                        <label htmlFor="ddd">
                            he
                            <input value="nosiemka" id="ddd" readOnly/>
                        </label>
                    </span> */}
                </button>
            </div>
        );
    }

    return render();
}

export default ButtonShity;