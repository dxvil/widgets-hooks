import React, {useEffect, useRef, useState} from 'react';

const DropDown = ({options, selected, onSelectedChanged, label}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
         const onBodyClick = () => {
             document.body.addEventListener('click', (e) => {
                 if(ref.current.contains(e.target)) {
                     return;
                 }
                 setOpen(false);
             })
         }

         return () => {
             document.body.removeEventListener('click', onBodyClick);
         }
     }, [])

    const renderedOptions = options.map((option => {
        if(option.value === selected.value) {
            return null;
        }

        return <div
            key={option.value}
            className="item"
            onClick={() => onSelectedChanged(option)}
        >
            {option.label}
        </div>
    }));

    return (
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">{label}</label>
            <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${open ? 'visible transition' : ''}`}>
                    {renderedOptions}
                </div>
            </div>
        </div>
    </div>
    );
};

export default DropDown;