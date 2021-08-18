import React from 'react';
import {Batton} from './Batton';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../bll/store';
import {increseIncremet, InitialStateType, setNum} from '../bll/counterReducer';

type PropsType = {}

export function Counter(props: PropsType) {
    const dispatch = useDispatch()
    const counter = useSelector<RootStateType, InitialStateType>(state => state.counter)

    const onIncHandler = () => dispatch(increseIncremet(counter.num + 1))
    const onResetHandler = () => dispatch(setNum(counter.minValue))

    const incDisabled = counter.num === counter.maxValue || counter.minValue >= counter.maxValue || counter.error
    const resetDisabled = counter.num === counter.minValue || counter.minValue >= counter.maxValue || counter.error

    return (
        <div className="counter">
            <div
                className={counter.num === counter.maxValue || counter.error
                ? `${'num'} ${'hotMessage'}` : 'num'} >

                { counter.error ? counter.errorMessage : counter.num}

            </div>
            {/*value: - {counter.num}*/}
            {/*message: {counter.errorMessage}*/}

            <div className="buttons">
                <Batton title={'inc'}
                        onClickHandler={onIncHandler}
                        disabled={incDisabled}/>
                <Batton title={'reset'}
                        onClickHandler={onResetHandler}
                        disabled={resetDisabled}/>
            </div>
        </div>
    )
}