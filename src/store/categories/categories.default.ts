import { ICategory } from "./categories.types";

export interface ICategoriesState {
    categories: ICategory[];
    isLoading: boolean;
    error: Error | null;
    dataFetched: boolean;
}


const CATEGORIES_INITIA_STATE: ICategoriesState = {
    categories: [],
    isLoading: false,
    error: null,
    dataFetched: false
}

export default CATEGORIES_INITIA_STATE;