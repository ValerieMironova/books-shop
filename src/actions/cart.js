import * as types from "../constants/CartActionTypes";

export const addItem = item => ({
    type: types.ADD_ITEM,
    id: item.id,
    name: item.name,
    price: item.price,
});
