import React from 'react';
import {Batton} from "./Batton";

type PropsType = {
    num: number
    message: string
    maxValue: number
    minValue: number
    minError: string
    maxError: string
    increaseInc: (maxValue: number) => void
    setInNumMinValue: (minValue: number) => void
}

export function Counter(props: PropsType) {

    const onIncHandler = () => props.increaseInc(props.maxValue)
    const onResetHandler = () => props.setInNumMinValue(props.minValue)

    return (
        <div className="counter">
            <div className={props.num === props.maxValue || props.minError || props.maxError
                ? `${'num'} ${'hotMessage'}` : 'num'}>

                { props.num || props.message || props.minError || props.maxError}

            </div>
            <div className="buttons">
                <Batton title={'inc'} onClickHandler={onIncHandler} disabled={props.num === props.maxValue || !props.num }/>
                <Batton title={'reset'} onClickHandler={onResetHandler} disabled={props.num === props.minValue || !props.num}/>
            </div>
        </div>
    )
}