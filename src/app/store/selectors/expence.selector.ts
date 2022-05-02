import { AppStore, ExpenceStore } from "src/app/interfaces/store.interface";

export const selectExpences = (state: AppStore): ExpenceStore => state.expences;
 