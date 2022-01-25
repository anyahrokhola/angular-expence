import { Expence } from "./expence";

export interface ExpenceGroup{
    date: Date,
    expences: Expence[]
} 

export interface LocalStorageData{
    [key: string]: Expence[]
}

const data: LocalStorageData = {
    '23/01/2022': [],
};

const keys = Object.keys(data);