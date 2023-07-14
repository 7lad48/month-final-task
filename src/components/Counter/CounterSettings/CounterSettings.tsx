import React, {ChangeEvent, FC, useState} from 'react';
import mainStyles from "../Counter.module.css";
import styles from "./CounterSettings.module.css";
import Button from "../../Button";
import Input from "../../Input";

type CounterSettingsType = {
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangedMaxValue: number
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangedStartValue: number
    setParams: () => void
}
const CounterSettings: FC<CounterSettingsType> = ({
                                                      onChangeMaxValueHandler,
                                                      onChangedMaxValue,
                                                      onChangeStartValueHandler,
                                                      onChangedStartValue,
                                                      setParams,
                                                  }) => {
    return (
        <div className={mainStyles.body}>
            <div className={`${mainStyles.counterBoard} ${styles.settingBoard}`}>
                <div className={styles.settingLine}>
                    <div className={styles.settingName}>max value:</div>
                    <Input
                        type={'number'}
                        onChangeHandler={onChangeMaxValueHandler}
                        controlledValue={onChangedMaxValue}/>
                </div>
                <div className={styles.settingLine}>
                    <div className={styles.settingName}>start value:</div>
                    <Input
                        type={'number'}
                        onChangeHandler={onChangeStartValueHandler}
                        controlledValue={onChangedStartValue}/>
                </div>
            </div>
            <div className={mainStyles.counterButtons}>
                <Button name={'set'} handler={setParams} style={mainStyles.button} disabled={false}/>
            </div>
        </div>
    );
}

export default CounterSettings;