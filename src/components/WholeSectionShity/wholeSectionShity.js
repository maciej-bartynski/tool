import React, { useState, Children } from 'react';
import './wholeSectionShity.css';

const WholeSectionShity = props => {
    const [visible, setVisible] = useState(false);

    const clickHandler = () => {
        setVisible(!visible);
    }

    const renderChildren = () => {
        const { children } = props;
        return Children.map(children, (child, key) => {
            return (
                <div key={key} className="whole-section-shity__item">
                    {child}
                </div>
            )
        })
    }

    const render = () => {
        return (
            <div className="section">
                <div className="section__title">Whole section shity as fuck</div>
                <button
                    onClick={clickHandler}
                    className="whole-section-shity__button"
                >
                    {visible ? "hide" : "show"}
                </button>
                {visible && (
                    <div className="whole-section-shity__content">
                        {renderChildren()}
                    </div>
                )}
            </div>
        );
    }

    return render();
}

export default WholeSectionShity;