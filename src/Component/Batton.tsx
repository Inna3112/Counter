import React from 'react';

type PropsType = {
    title: string
    onClickHandler: () => void
    disabled: boolean
}

export function Batton(props: PropsType) {

    return (
        <div>
            <button className="button"
                    onClick={props.onClickHandler}
                    disabled={props.disabled}>{props.title}</button>
        </div>
    );
}