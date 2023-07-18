import React, {FC, useEffect, useState} from 'react';
import CounterWorkspace from "./CounterWorkspace/CounterWorkspace";
import styles from './Counter.module.css';
import CounterSettings from "./CounterSettings/CounterSettings";

export type StatusType = 'changing' | 'changed' | 'error';

type CounterType = {
    startCountVal: number
    endCountVal: number
    countRange: number
}

export const Counter: FC<CounterType> = ({
                                             startCountVal,
                                             endCountVal,
                                             countRange
                                         }) => {
    const [startCount, setStartCount] = useState(startCountVal);
    const [endCount, setEndCount] = useState(endCountVal);
    const [currentCountValue, setCurrentCountValue] = useState(startCount);
    const increase = () => setCurrentCountValue((prev) => prev + countRange > endCount ? prev : prev + countRange);
    const reset = () => setCurrentCountValue((prev) => prev > startCount ? startCount : prev);

    const [onChangedMaxValue, setOnChangedMaxValue] = useState<number>(endCount);
    const [onChangedStartValue, setOnChangedStartValue] = useState<number>(startCount);

    const [status, setStatus] = useState<StatusType>('changed')
    const wrongStartValue = onChangedStartValue < 0 || onChangedStartValue >= onChangedMaxValue;
    const wrongMaxValue = onChangedMaxValue <= 0 || onChangedMaxValue <= onChangedStartValue;
    useEffect(()=> {
        if(wrongStartValue || wrongMaxValue) {
            setStatus('error')
        } else if(startCount !== onChangedStartValue || endCount !== onChangedMaxValue){
            setStatus('changing')
        } else if(startCount === onChangedStartValue || endCount === onChangedMaxValue) {
            setStatus('changed')
        }
    }, [onChangedMaxValue, onChangedStartValue])

    const setParams = () => {
        setStartCount(onChangedStartValue);
        setEndCount(onChangedMaxValue);
        setCurrentCountValue(onChangedStartValue);
        setStatus('changed')
    }
    return (
        <div className={styles.counterMain}>
            <CounterSettings
                setOnChangeMaxValue={setOnChangedMaxValue}
                onChangedMaxValue={onChangedMaxValue}
                setOnChangeStartValueHandler={setOnChangedStartValue}
                onChangedStartValue={onChangedStartValue}
                setParams={setParams}
                status={status}
                wrongStartValue={wrongStartValue}
                wrongMaxValue={wrongMaxValue}
            />
            <CounterWorkspace
                startCount={startCount}
                endCount={endCount}
                increase={increase}
                reset={reset}
                currentCountValue={currentCountValue}
                status={status}
            />
        </div>
    );
}
