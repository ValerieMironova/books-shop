import * as types from "../constants/CartActionTypes";

const initialState = {
    items: [],
    totalCost: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ITEM:
            const newState = {
                ...state
            };

            const existedItem = newState.items.find(item => item.id === action.id);
            if(existedItem) {
                existedItem.count = existedItem.count + 1;
                existedItem.total = existedItem.count * existedItem.price;
            } else {
                newState.items.push({
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    count: 1,
                    total: action.price
                })
            }

            let totalCost = 0;
            newState.items.forEach(item => totalCost += item.total);
            newState.totalCost = totalCost;

            return newState;

        case types.DELETE_ITEM:
            const deleteItemState = {
                ...state
            };

            const deleteItem = deleteItemState.items.find(item => item.id === action.id);
            if(deleteItem){
                const index = deleteItemState.items.indexOf(deleteItem);
                deleteItemState.items.splice(index, 1);
            }

            let deleteItemStateTotalCost = 0;
            deleteItemState.items.forEach(item => deleteItemStateTotalCost += item.total);
            deleteItemState.totalCost = deleteItemStateTotalCost;

            return deleteItemState;

        default:
            return state
    }
};

export default cart
