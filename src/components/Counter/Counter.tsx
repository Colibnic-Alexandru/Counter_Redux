import React, {useState} from 'react';
import {AppStateType} from "../BLL/store";
import {useDispatch, useSelector} from "react-redux";
import {incrementCountAC, resetCountAC} from "../BLL/counter-reducer";
import style from './Counter.module.css'
import {ErrorNumber} from "../Utils/ErrorNumber";
import {Button} from "@material-ui/core";

export const Counter = () => {
    const value = useSelector<AppStateType, number>(state => state.counter.value);
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const dispatch = useDispatch()
    const [editMode] = useState(false)

    const onIncrementHandler = () => {
        dispatch(incrementCountAC())
    };

    const onResetHandler = () => {
        dispatch(resetCountAC())
    };


    const condition = maxValue < 0
        || startValue < 0
        || startValue > maxValue
        || maxValue === startValue

    return (
        <div className={style.container}>
            {condition
                ? <ErrorNumber/>
                : <div className={value !== maxValue ? style.counter : style.counterItem}>{value}</div>
            }
            <div className={style.button}>
                <Button style={{color: "black", margin: "5px"}} variant="contained" size="large" color="primary"
                        disabled={editMode || value === maxValue}
                        onClick={onIncrementHandler}>inc
                </Button>
                <Button style={{color: "black", margin: "5px"}} variant="contained" size="large" color="primary"
                        disabled={editMode || value === startValue}
                        onClick={onResetHandler}>reset
                </Button>
            </div>
        </div>
    );
};
