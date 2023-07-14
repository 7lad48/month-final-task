import React, {FC} from 'react';
import styles from '../Counter.module.css'
import Button from "../../Button";
import {StatusType} from "../Counter";

type CounterType = {
    startCount: number
    endCount: number
    increase: () => void
    reset: () => void
    currentCountValue: number
    status: StatusType
}
const CounterWorkspace: FC<CounterType> = ({
                                               startCount,
                                               endCount,
                                               currentCountValue,
                                               increase,
                                               reset,
                                               status,
                                           }) => {
    return (
        <div className={styles.body}>
            {
                 status === 'changing'
                 ? <div className={styles.counterBoard}>enter values and press 'set'</div>
                     :  status === 'changed'
                         ? <div className={`${currentCountValue === endCount ? styles.limit : ''} ${styles.counterBoard} ${styles.bigText}`}>{currentCountValue}</div>
                         : <div className={`${styles.counterBoard} ${styles.limit}`}>Incorrect value!</div>

            }
            <div className={styles.counterButtons}>
                <Button name={'inc'} handler={increase} style={styles.button}
                        disabled={currentCountValue === endCount || status !== 'changed'}/>
                <Button name={'reset'} handler={reset} style={styles.button}
                        disabled={currentCountValue === startCount || status !== 'changed'}/>
            </div>
        </div>
    );
}

export default CounterWorkspace;