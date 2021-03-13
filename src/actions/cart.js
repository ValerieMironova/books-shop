import * as types from "../constants/CartActionTypes";

export const addItem = item => ({
    type: types.ADD_ITEM,
    id: item.id,
    name: item.name,
    price: item.price,
});

export const deleteItem = item => ({
    type: types.DELETE_ITEM,
    id: item.id,
});

export const addQuantity = item =>({
    type: types.ADD_QUANTITY,
    id: item.id,
});
export const removeQuantity = item =>({
    type: types.REMOVE_QUANTITY,
    id: item.id,
});
