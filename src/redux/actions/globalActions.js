import { GLOBAL } from "../defines";

export const setGlobalCategory = (category) => ({
    type: GLOBAL.SET_CATEGORY,
    category,
});

export const setGlobalSearch = (keyword) => ({
    type: GLOBAL.SET_SEARCH,
    keyword,
});