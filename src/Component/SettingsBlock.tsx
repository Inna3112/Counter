import React from 'react';
import {Batton} from './Batton';
import {InputBlock} from './InputBlock';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../bll/store';
import {InitialStateType, setError, setMaxValue, setMinValue, setNum} from '../bll/counterReducer';


export function SettingsBlock() {
    const dispatch = useDispatch()
    const counter = useSelector<RootStateType, InitialStateType>(state => state.counter)

    const onClickHandler = () => {
        if (counter.maxValue > 0) {
            dispatch(setError(false, ''))
        }
        dispatch(setNum(counter.minValue))
    }

    const startInputChangeHandler = (value: number) => {
        if (value < 0) {
            dispatch(setError(true, "Incorrect value"))
        } else if (value > counter.maxValue) {
            dispatch(setError(true, "Incorrect value"))
        } else if (value === counter.maxValue) {
            dispatch(setError(true, "Incorrect value"))
        } else if (value !== counter.maxValue) {
            dispatch(setError(false, ""))
        }
        dispatch(setMinValue(value))
    }
    const maxInputChangeHandler = (value: number) => {
        if (value < 0) {
            dispatch(setError(true, "Incorrect value"))
        } else if (value === counter.minValue) {
            dispatch(setError(true, "Incorrect value"))
        } else if (value < counter.minValue) {
            dispatch(setError(true, "Incorrect value"))
        } else if (value !== counter.minValue) {
            dispatch(setError(false, ""))
        }
        dispatch(setMaxValue(value))
    }

    const classNameStart = counter.minValue < 0 || counter.minValue === counter.maxValue || counter.maxValue < counter.minValue ? `${'error'}` : `${'input'}`
    const disableSet = counter.minValue < 0 || counter.maxValue === counter.minValue || counter.minValue > counter.maxValue

    return (
        <div className="settings">
            <div className={'num'}>
                <InputBlock title={'Start value'}
                            value={counter.minValue}
                            error={counter.error}
                            onChangeHandler={startInputChangeHandler}
                            className={classNameStart}
                />
                <InputBlock title={'Max value'}
                            value={counter.maxValue}
                            error={counter.error}
                            onChangeHandler={maxInputChangeHandler}
                            className={classNameStart}
                />
            </div>
            <div className="buttons">
                <Batton title={'Set'}
                        onClickHandler={onClickHandler}
                        disabled={disableSet}
                />
            </div>
        </div>
    );
}