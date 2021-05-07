import React, {useState} from 'react';
import {Batton} from "./Batton";

type PropsType = {
    num: number
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setValue:(minValue: number) => void

}

export function SettingsBlock(props: PropsType) {

    const onHandler = () => props.setValue(props.minValue)


    return (
        <div className="counter">
            <div>
                Start <input className='input' type='number' value={props.minValue} onChange={(e)=> props.setMinValue(Number(e.currentTarget.value))}/>
            </div>
            <div>
                Max <input className='input' type='number' value={props.maxValue} onChange={(e)=> props.setMaxValue(Number(e.currentTarget.value))}/>
            </div>
            <div className="buttons">
                <Batton title={'Set'} onHandler={onHandler} disabled={props.minValue < 0 || props.maxValue < 0 || props.minValue >= props.maxValue}/>
                {/*<button className="button" onClick={onSetHandler}>Set</button>*/}
            </div>
        </div>
    );
}