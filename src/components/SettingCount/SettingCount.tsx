import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../BLL/store";
import {setMaxValueAC, setStartValueAC, setValuesAC} from "../BLL/counter-reducer";
import style from "./SettingCount.module.css";
import {Button, TextField} from "@material-ui/core";

export const SettingCount = () => {

    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const dispatch = useDispatch()

    const onClickSetStartValueHandler = (value: number) => {
        dispatch(setStartValueAC(value))
    }

    const onClickSetMaxValueHandler = (value: number) => {
        dispatch(setMaxValueAC(value))
    }

    const onClickSetValuesHandler = () => {
        dispatch(setValuesAC())
    }

    const condition = maxValue < 0
        || startValue < 0
        || startValue > maxValue
        || maxValue === startValue

    return (
        <div className={style.container}>
            <div className={style.values}>
                <div className={style.maxValue}>
                    <span>Max Value</span>
                    <TextField style={{marginTop: "10px"}} size={'small'} className={condition ? style.inputStyleRed : style.inputStyle} type={'number'}
                               value={maxValue}
                               onChange={(e) => onClickSetMaxValueHandler(+e.currentTarget.value)}
                    />
                </div>
                <div className={style.startValue}>
                    <span>Start Value</span>
                    <TextField size={"small"} className={condition ? style.inputStyleRed : style.inputStyle} type={'number'}
                               value={startValue}
                               onChange={(e) => onClickSetStartValueHandler(+e.currentTarget.value)}
                    />
                </div>
            </div>
            <div className={style.button}>
                <Button variant="contained" color="primary" size="large"
                        disabled={startValue === maxValue || maxValue === 0 || condition}
                        onClick={onClickSetValuesHandler}>SET
                </Button>
            </div>
        </div>
    );
};