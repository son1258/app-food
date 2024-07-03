import { atom } from "recoil";
import { selector } from "recoil"; 
import { Product } from "./interfaces/productProp";

export const dataState = atom<Product[]>({
    key: "dataState",
    default: [],
});

export const fetchDataSelector = selector({
    key: "fetchDataSelector",
    get: async ({get}) => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    },
});