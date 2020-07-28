import React, { useState, useRef, useEffect } from 'react';
import './appRenderCounter.css';

const ButtonWellMade = props => {
    const appRenderCount = useRef(0);

    const setAppRenderCounter = () => {
        appRenderCount.current = appRenderCount.current + 1;
    };

    const render = () => {
        return (
            <div className="section">
                <div className="section__title">1. APPLY FUCKIN TOOL</div>
                <div className="section__title">2. OPEN FUCKING CONSOLE</div>
                <div className="section__title">3. CLICK FUCKING BUTTONS</div>
                <div className="section__title">SEE: RED OUTLINE === JUST CREATED IN DOM.</div>
                <div className="section__title">SEE: "CHECK" OBJECT KEY MEANING === CREATION AMOUNT</div>
                <div className="section__title">SEE: "CHECK" OBJECT VALUE === HOVER IT WITH MOUSE</div>
            </div>
        );
    }

    useEffect(setAppRenderCounter)
    return render();
}

export default ButtonWellMade;