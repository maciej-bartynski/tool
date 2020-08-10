import React, { useState, useEffect } from 'react';
import qwer from './../../qwer';
import './consoleLogTest.css';

const qwerConsole = () => {
    qwer("console");
}
console.log(qwer)
const ConsoleLogTest = () => {
    const [key, setKey] = useState(false);
    const [style, setStyle] = useState(false);
    const [css, setCss] = useState(false);
    const [txt, setTxt] = useState(false);
    const [attr, setAttr] = useState(false);
    const [html, setHtml] = useState(false);
    const [state, setState] = useState(false);

    const recreateDiv = () => {
        setKey(!key);
    }

    const updateCss = () => {
        setCss(!css);
    }

    const updateStyle = () => {
        setStyle(!style);
    }

    const updateAttrib = () => {
        setAttr(!attr);
    }

    const updateHTML = () => {
        setHtml(!html);
    }

    const updateTxt = () => {
        setTxt(!txt);
    };

    const updateState = () => {
        setState(!state);
    }

    const getAttributes = () => {
        const attributes = {
            key: key ? "base-key" : "different-key",
            className: css ? "image-test-small-font" : "image-test-huge-font",
            style: {
                borderColor: style ? "red" : "green"
            }
        }

        if (attr) attributes["data-some-attribute"] = "some-value";
        if (!attr) attributes["data-other-attribute"] = "other-value";

        return attributes;
    }

    const getTextContent = () => {
        return !txt ? "" : "raw text content"
    }

    const getHtmlContent = () => {
        return !html ? "" : <div>HTML content</div>
    }

    const onSensitiveImageError = () => {
        console.log('Sensitive image load attempt')
    }

    const onInsensitiveImageError = () => {
        console.log('Insensitive image load attempt')
    }

    const catchAnimationEnd = () => {
        console.log('Animation end')
    }

    const render = () => {
        return (
            <>
                <p className="title">QWER console: <button onClick={qwerConsole}>apply</button></p>
                <div className="container">
                    <div onAnimationEnd={catchAnimationEnd} {...getAttributes()}>
                        <img src="random" onError={onSensitiveImageError} />
                        {getTextContent()}
                        {getHtmlContent()}
                    </div>
                    <button onClick={updateCss}>
                        Change classname
                    </button>
                    <button onClick={updateStyle}>
                        Change styles attribute
                    </button>
                    <button onClick={updateAttrib}>
                        Change data attribute
                    </button>
                    <button onClick={updateHTML}>
                        Change innerHtml
                    </button>
                    <button onClick={updateTxt}>
                        Change innerText
                    </button>
                    <button onClick={updateState}>
                        Just update state
                    </button>
                    <button onClick={recreateDiv}>
                        Recreate div with border
                    </button>
                    <img src="random" onError={onInsensitiveImageError} />
                </div>
            </>
        )
    }

    return render();
}

export default ConsoleLogTest;