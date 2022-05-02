import { Expence } from "./expence";
import { Category } from "../modules/category/interfaces/category";

export type ExpenceStore = Record<string, Expence[]>
export type CategoryStore = Category[];

export interface AppStore {
    expences: ExpenceStore;
    categories: CategoryStore;
}