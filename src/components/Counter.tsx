import React, {FC, useState} from 'react';
import styles from './Counter.module.css'
import Button from "./Button";

type CounterType = {
    startCount: number
    endCount: number
    countRange: number
}
const Counter:FC<CounterType> = ({
                                            startCount,
                                            endCount,
                                            countRange,
                                        }) => {
    const [count, setCount] = useState(startCount);
    const increase = () => setCount((prev)=> prev + countRange > endCount ? prev : prev + countRange);
    const reset = () => setCount( (prev) => prev > startCount ? startCount : prev);
    return (
        <div className={styles.body}>
            <div className={`${styles.counterBoard} ${count === endCount ? styles.limit : ''}`}>{count}</div>
            <div className={styles.counterButtons}>
                <Button name={'inc'} handler={increase} style={styles.button} disabled={count === endCount}/>
                <Button name={'reset'} handler={reset} style={styles.button} disabled={count === startCount}/>
            </div>
        </div>
    );
}

export default Counter;