import React, { useState } from 'react';
import './DropDown';
import DropDown from "./DropDown";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>

            <DropDown label="Select a language" selected={language} onSelectedChanged={setLanguage} options={options}/>
            <hr />
            <h3 className="ui header">Output</h3>
            <Translate text={text} language={language}/>
        </div>
    )
};

export default Translate;