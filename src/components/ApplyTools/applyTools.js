import React, { useState, useEffect } from 'react';
import { tool } from '../../devtools/tool';
import { crazyTool } from '../../devtools/crazyTool';
import './applyTool.css';

const ApplyTools = () => {
    const [applied, setApplied] = useState(false);

    const applyTool = (payl) => {

        setApplied(payl)
    }

    const didUpdate = () => {
        applied && ({
            tool,
            crazyTool
        }[applied]())
    }
    const render = () => {
        return !applied
            ? (
                <>
                    <div className="apply-tool-bar">
                        <button onClick={() => applyTool('tool')}>
                            Dodaj tool {window.isConsoleOpened}
                        </button>
                        <button onClick={() => applyTool('crazyTool')}>
                            Dodaj crazyTool
                        </button>
                    </div>
                </>
            )
            : (
                <>
                    <div className="apply-tool-bar">
                        Applied: {applied}
                    </div>
                </>
            )
    }

    useEffect(didUpdate);
    return render();
}

export default ApplyTools;