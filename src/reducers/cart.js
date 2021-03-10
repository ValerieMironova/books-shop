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

            newState.totalCost = newState.items.reduce((item1, item2) => {
                const total1 = item1.total ? item1.total : 0;
                const total2 = item2.total ? item2.total : 0;

                return total1 + total2;
            }, 0);

            return newState;
        default:
            return state
    }
};

export default cart
