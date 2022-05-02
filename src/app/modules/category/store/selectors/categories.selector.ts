import { AppStore, CategoryStore } from "src/app/interfaces/store.interface";

export const selectCategories = (state: AppStore): CategoryStore => state.categories;