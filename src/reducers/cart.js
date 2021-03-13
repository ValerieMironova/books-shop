import * as types from "../constants/CartActionTypes";

const initialState = {
    items: [],
    totalCost: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    const newState = {
        ...state
    };

    const existedItem = newState.items.find(item => item.id === action.id);

    switch (action.type) {
        case types.ADD_ITEM:
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
            break;

        case types.DELETE_ITEM:
            if(existedItem){
                const index = newState.items.indexOf(existedItem);
                newState.items.splice(index, 1);
            }
            break;

        case types.ADD_QUANTITY:
            if (existedItem) {
                existedItem.count = existedItem.count + 1;
                existedItem.total = existedItem.count * existedItem.price;
            }
            break;

        case types.REMOVE_QUANTITY:
            if (existedItem) {
                existedItem.count = existedItem.count - 1;
                existedItem.total = existedItem.count * existedItem.price;
            }
            break;
        default:
            break;
    }

    let totalCost = 0;
    newState.items.forEach(item => totalCost += item.total);
    newState.totalCost = totalCost;

    let totalCount = 0;
    newState.items.forEach(item => totalCount += item.count);
    newState.totalCount = totalCount;

    return newState;
};

export default cart
