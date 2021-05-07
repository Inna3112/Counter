import React from 'react';

type PropsType = {
   title: string
    onHandler: () => void
    disabled: boolean | undefined
}

export function Batton (props: PropsType) {

    return (
        <div className="button">
            <button className="button" onClick={props.onHandler} disabled={props.disabled}>{props.title}</button>
        </div>
    );
}