import React from 'react';
import {Batton} from "./Batton";

type PropsType = {
    num: number
    maxValue: number
    minValue: number
    increaseInc: (maxValue: number) => void
    resetNum: (minValue: number) => void
}

export function Counter(props: PropsType) {

    const onIncHandler = () => props.increaseInc(props.maxValue)
    const onResetHandler = () => props.resetNum(props.minValue)

    return (
        <div className="counter">
            <div className={props.num === props.maxValue ? 'error' : 'num'}>
                {props.num > 0 ? props.num : 'Enter values and press set!'}
            </div>
            <div className="buttons">
                <Batton title={'inc'} onHandler={onIncHandler} disabled={props.num === props.maxValue}/>
                <Batton title={'reset'} onHandler={onResetHandler} disabled={props.num === props.minValue}/>
            </div>
        </div>
    );
}