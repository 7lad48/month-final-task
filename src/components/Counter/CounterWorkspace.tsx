import React, {FC} from 'react';
import styles from './Counter.module.css'
import Button from "../Button";

type CounterType = {
    startCount: number
    endCount: number
    increase: () => void
    reset: () => void
    currentCountValue: number
}
const CounterWorkspace: FC<CounterType> = ({
                                               startCount,
                                               endCount,
                                               currentCountValue,
                                               increase,
                                               reset,
                                           }) => {
    return (
        <div className={styles.body}>
            <div className={`${styles.counterBoard} ${currentCountValue === endCount ? styles.limit : ''}`}>{currentCountValue}</div>
            <div className={styles.counterButtons}>
                <Button name={'inc'} handler={increase} style={styles.button} disabled={currentCountValue === endCount}/>
                <Button name={'reset'} handler={reset} style={styles.button} disabled={currentCountValue === startCount}/>
            </div>
        </div>
    );
}

export default CounterWorkspace;