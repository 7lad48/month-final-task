import React, {ChangeEvent, FC} from 'react';
import s from './Counter/CounterSettings/CounterSettings.module.css'

type InputType = {
    type: 'number'
    setValueHandler: (value: number)=> void
    controlledValue: number
    wrongStartValue?: boolean
    wrongMaxValue?: boolean
}
const Input: FC<InputType> = ({
                                  type,
                                  setValueHandler,
                                  controlledValue,
                                  wrongStartValue,
                                  wrongMaxValue,
                              }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueHandler(Math.round(e.target.valueAsNumber));
    }
    return (
        <input type={type} value={controlledValue} onChange={onChangeHandler} className={`${wrongStartValue || wrongMaxValue ? s.error : ''}`}/>
    );
}
export default Input;