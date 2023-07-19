import React, {FC} from 'react';
import mainStyles from "../Counter.module.css";
import styles from "./CounterSettings.module.css";
import Button from "../../Button";
import Input from "../../Input";
import {StatusType} from "../Counter";

type CounterSettingsType = {
    setOnChangeMaxValueHandler: (value: number)=> void
    onChangedMaxValue: number
    setOnChangeStartValueHandler: (value: number)=> void
    onChangedStartValue: number
    setParams: () => void
    status: StatusType
    wrongStartValue: boolean
    wrongMaxValue: boolean
}
const CounterSettings: FC<CounterSettingsType> = ({
                                                      setOnChangeMaxValueHandler,
                                                      onChangedMaxValue,
                                                      setOnChangeStartValueHandler,
                                                      onChangedStartValue,
                                                      setParams,
                                                      status,
                                                      wrongStartValue,
                                                      wrongMaxValue
                                                  }) => {
    return (
        <div className={mainStyles.body}>
            <div className={`${mainStyles.counterBoard} ${styles.settingBoard}`}>
                <div className={styles.settingLine}>
                    <div className={styles.settingName}>max value:</div>
                    <Input
                        type={'number'}
                        setValueHandler={setOnChangeMaxValueHandler}
                        controlledValue={onChangedMaxValue}
                        wrongMaxValue={wrongMaxValue}
                    />
                </div>
                <div className={styles.settingLine}>
                    <div className={styles.settingName}>start value:</div>
                    <Input
                        type={'number'}
                        setValueHandler={setOnChangeStartValueHandler}
                        controlledValue={onChangedStartValue}
                        wrongStartValue={wrongStartValue}
                    />
                </div>
            </div>
            <div className={mainStyles.counterButtons}>
                <Button name={'set'} handler={setParams} style={mainStyles.button} disabled={status !=="changing"}/>
            </div>
        </div>
    );
}

export default CounterSettings;