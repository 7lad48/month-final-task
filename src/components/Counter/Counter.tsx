import React, {ChangeEvent, useState} from 'react';
import CounterWorkspace from "./CounterWorkspace";
import styles from './Counter.module.css';
import CounterSettings from "./CounterSettings/CounterSettings";

function Counter() {
    const countRange = 1;
    const [startCount, setStartCount] = useState(0);
    const [endCount, setEndCount] = useState(5);
    const [currentCountValue, setCurrentCountValue] = useState(startCount);
    const increase = () => setCurrentCountValue((prev) => prev + countRange > endCount ? prev : prev + countRange);
    const reset = () => setCurrentCountValue((prev) => prev > startCount ? startCount : prev);
    const [onChangedMaxValue, setOnChangedMaxValue] = useState<number>(endCount);
    const [onChangedStartValue, setOnChangedStartValue] = useState<number>(startCount);
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setOnChangedStartValue(+e.currentTarget.value);
    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setOnChangedMaxValue(+e.currentTarget.value);
    }
    const setParams = () => {
        setStartCount(onChangedStartValue);
        setEndCount(onChangedMaxValue);
        setCurrentCountValue(onChangedStartValue);
    }
    return (
        <div className={styles.counterMain}>
            <CounterSettings
                onChangeMaxValueHandler={onChangeMaxValueHandler}
                onChangedMaxValue={onChangedMaxValue}
                onChangeStartValueHandler={onChangeStartValueHandler}
                onChangedStartValue={onChangedStartValue}
                setParams={setParams}
            />
            <CounterWorkspace
                startCount={startCount}
                endCount={endCount}
                increase={increase}
                reset={reset}
                currentCountValue={currentCountValue}
            />
        </div>
    );
}

export default Counter;
