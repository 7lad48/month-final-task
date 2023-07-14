import React, {ChangeEvent, FC, useState} from 'react';

type InputTypes = 'number';
type InputType = {
    type: InputTypes
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    controlledValue: number
}
const Input: FC<InputType> = ({
                                  type,
                                  onChangeHandler,
                                  controlledValue,
                              }) => {
    return (
        <input type={type} value={controlledValue} onChange={onChangeHandler}/>
    );
}
export default Input;