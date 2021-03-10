const initialState = [
    {
        id: 1,
        name: 'Книги',
        children: [
            {
                id: 10,
                name: 'Детективы'
            },
            {
                id: 11,
                name: 'Фантастика'
            },
            {
                id: 12,
                name: 'Ужасы'
            },
            {
                id: 13,
                name: 'Мировая классика'
            },
            {
                id: 14,
                name: 'Проза'
            },
        ]
    },

    {
        id: 2,
        name: 'Игры',
        children: [
            {
                id: 20,
                name: 'Настольные'
            },
            {
                id: 21,
                name: 'Подвижные'
            },
            {
                id: 22,
                name: 'Для детей'
            },
        ]
    },

    {
        id: 3,
        name: 'Творчество',
        children: [
            {
                id: 30,
                name: 'Рисование'
            },
            {
                id: 31,
                name: 'Вязание'
            },
            {
                id: 32,
                name: 'Лепка'
            },
        ]
    },
    {
        id: 4,
        name: 'Что еще почитать',
    },
    {
        id: 5,
        name: 'Доставка и оплата',
    },
];

const categories = (state = initialState) => {
    return state
};

export default categories
