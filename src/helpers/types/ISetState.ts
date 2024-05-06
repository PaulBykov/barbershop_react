import {Dispatch, SetStateAction} from "react";

export interface ISetState{
    selectedCategory: number,
    setCategory: Dispatch<SetStateAction<number>>,
}