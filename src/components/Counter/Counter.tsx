import React, {ChangeEvent, useState} from 'react';
import CounterWorkspace from "./CounterWorkspace/CounterWorkspace";
import styles from './Counter.module.css';
import CounterSettings from "./CounterSettings/CounterSettings";

export type StatusType = 'changing' | 'changed' | 'error';

function Counter() {
    const countRange = 1;
    const [startCount, setStartCount] = useState(0);
    const [endCount, setEndCount] = useState(5);
    const [currentCountValue, setCurrentCountValue] = useState(startCount);
    const increase = () => setCurrentCountValue((prev) => prev + countRange > endCount ? prev : prev + countRange);
    const reset = () => setCurrentCountValue((prev) => prev > startCount ? startCount : prev);

    const [onChangedMaxValue, setOnChangedMaxValue] = useState<number>(endCount);
    const [onChangedStartValue, setOnChangedStartValue] = useState<number>(startCount);
    const [status, setStatus] = useState<StatusType>('changed')

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const target = +e.currentTarget.value;
        setOnChangedStartValue(target);
        //логика
        if(target < 0 || target >= onChangedMaxValue){
            setStatus('error')
        } else {
            setStatus('changing')
        }
    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const target = +e.currentTarget.value;
        setOnChangedMaxValue(target);
        //логика
        if(target < 0 || target <= onChangedStartValue){
            setStatus('error')
        } else {
            setStatus('changing')
        }
    }
    const setParams = () => {
        setStartCount(onChangedStartValue);
        setEndCount(onChangedMaxValue);
        setCurrentCountValue(onChangedStartValue);
        setStatus('changed')
    }
    return (
        <div className={styles.counterMain}>
            <CounterSettings
                onChangeMaxValueHandler={onChangeMaxValueHandler}
                onChangedMaxValue={onChangedMaxValue}
                onChangeStartValueHandler={onChangeStartValueHandler}
                onChangedStartValue={onChangedStartValue}
                setParams={setParams}
                status={status}
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

export default Counter;
