import React, {useState} from 'react';
import {Batton} from "./Batton";

type PropsType = {
    num: number
    message: string
    maxValue: number
    minValue: number
    minError: string
    maxError: string
    increaseInc: (maxValue: number) => void
    setNum: (num: number) => void
}

export function Counter(props: PropsType) {
    const [display, setDisplay] = useState(false)

    const onIncHandler = () => props.increaseInc(props.maxValue)
    const onResetHandler = () => props.setNum(props.minValue)
    const changeDisplay = () => {
        if (display){
            return props.message
        } else {
            return props.num
        }
    }

    return (
        <div className="counter">
            <div className={props.num === props.maxValue || props.minError || props.maxError
                ? `${'num'} ${'hotMessage'}` : 'num'}>

                { props.num || props.message || props.minError || props.maxError }

            </div>
            {/*value: - {props.num}*/}
            {/*message: {props.message}*/}
            {/*minError: -{props.minError}*/}
            {/*maxError: -{props.maxError}*/}
            <div className="buttons">
                <Batton title={'inc'} onClickHandler={onIncHandler} disabled={props.num === props.maxValue || !props.num }/>
                <Batton title={'reset'} onClickHandler={onResetHandler} disabled={props.num === props.minValue || !props.num}/>
            </div>
        </div>
    )
}