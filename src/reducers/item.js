const initialState = [
    {
        id: 1,
        name: 'Сияние',
        author: 'Кинг С.',
        img: 'сияние кинг.jpg',
        price: 230,
        the_year_of_publishing: '2019',
        pages: '450',
        publishing_house: 'Махаон',
        weight: '0.5',
        age: '16+',
        annotation: '...Проходят годы, десятилетия, но потрясающая история писателя Джека Торранса, его сынишки Дэнни, наделенного необычным даром, и поединка с темными силами, обитающими в роскошном отеле "Оверлук", по-прежнему завораживает и держит в неослабевающем напряжении читателей самого разного возраста…',
    },
    {
        id: 2,
        name: 'Маус',
        author: 'Шпигельман А.',
        img: 'маус шпигельман.jpg',
        price: 950,
        the_year_of_publishing: '2020',
        pages: '550',
        publishing_house: 'Махаон',
        weight: '0.6',
        age: '16+',
        annotation: '"Маус" Арта Шпигельмана - единственный графический роман, получивший престижную Пулитцеровскую премию.\n' +
            'Автору удалось, казалось бы, невозможное - рассказать историю Холокоста в форме комикса.\n' +
            'Владек Шпигельман, отец Арта, рассказывает сыну, как прошел через гетто, Освенцим и "марш смерти" на Дахау.\n' +
            'Но "Маус" - это и глубоко личная история автора, его попытка разобраться в своих непростых отношениях с семьей.\n' +
            'На стыке этих историй и рождается уникальный текст, который без упрощений и пафоса рассказывает об одной из самых чудовищных трагедий ХХ века.\n',
    },
    {
        id: 3,
        name: ' Цветы для Элджернона',
        author: 'Киз Д.',
        img: 'цветы для элджернона.jpg',
        price: 230,
        the_year_of_publishing: '2018',
        pages: '370',
        publishing_house: 'Махаон',
        weight: '0.3',
        age: '16+',
        annotation: '"Цветы для Элджернона" Дэниела Киза входят в программу обязательного чтения в американских школах. Это единственная история в жанре научной фантастики, автор которой был дважды награжден сначала за рассказ, а потом за роман с одним и тем же названием, героем, сюжетом.\n' +
            'Тридцатитрехлетний Чарли Гордон - умственно отсталый. При этом у него есть работа, друзья и непреодолимое желание учиться. Он соглашается принять участие в опасном научном эксперименте и надежде стать ум...\n' +
            'Эта фантастическая история обладает поразительной психологической силой и заставляет задуматься над общечеловеческими вопросами нравственности: имеем ли мы право ставить друг над другом эксперименты, к каким результатам это может привести и какую цену мы готовы заплатить за то, чтобы стать "самым умным". Л одиноким?\n' +
            'На вопросы, которые поднимали еще М. Булгаков в "Собачьем сердце" и Дж. Лондон в "Мартине Идене", Дэниел Киз дает свой однозначный ответ.\n' +
            '\n' +
            'Роман Дэниела Киза "Цветы для Элджернона" стал сенсацией в жанре научной фантастики. Впервые этот сюжет появился в виде рассказа в 1959 году и был удостоен премии "Хьюго". К 1966 году Киз дописал "Цветы для Элджернона", развив сюжетные линии и превратив рассказ в полноценный роман. Эта книга до сих пор пользуется невероятной популярностью, регулярно вырываясь в списки бестселлеров наряду с популярными новинками. История об умственно отсталом мойщике полов Чарли, получившем фантастическую возможность поднять уровень своего IQ с 68 до 200, не оставит равнодушным никого.\n',
    },
    {
        id: 4,
        name: 'Египтология. В поисках гробницы Осириса',
        author: 'Красновская О. (ред.)',
        img: 'египтология.jpg',
        price: 1300,
        the_year_of_publishing: '2021',
        pages: '34',
        publishing_house: 'Махаон',
        weight: '0.9',
        age: '12+',
        annotation: 'Дневник экспедиции мисс Эмили Сэндс.\n' +
            '"Пирамиды - эти могучие символы Египта - напомнили мне о том, что я так надеялась увидеть здесь,- о пыльных гробницах, великолепных храмах, сокровищницах, полных золота, о странных и таинственных мумиях. Но я приехала сюда, чтобы найти нечто большее..." Эмили Сэндс, 1926 год.\n' +
            'Книга, покорившая вершины хит-парадов в Америке и Европе. В рейтинге издания "New York Times" книга находилась на первом месте 24 недели подряд, опережая Дэна Брауна.\n' +
            'Все загадки Египта в одной книге!\n' +
            'В этой книге не только увлекательное содержание, но и дополнительные материалы в виде красочных карт, невероятных мини-книжек, образца пелены мумии, схемы пирамид, магическим глазом сфинкса, писем из Египта с открытками, фотографиями и даже багажным талоном. Обложка инкрустирована волшебными камнями. Книга также содержит древнюю египетскую игру с древними игровыми фишками и волшебным игровым полем.\n' +
            'Книга содержит настоящие образцы, дополнительные материалы и вложения на каждой странице. Издание станет настоящим сюрпризом для всех покупателей. Функциональность и прекрасное графическое оформление удивят каждого, кто откроет книгу.\n' +
            'Это роскошное подарочное издание со множеством потайных страниц, секретиков, иллюстраций поможет вашему ребенку узнать о том, что такое Египтология. Множество интересных фактов, превосходный иллюстративный материал, интерактивный принцип подачи информации делают эту книгу по-настоящему уникальной. Она вполне способна заинтересовать читателя наукой археологией и заставить его увидеть за блестящим фасадом египетской культуры серьезную мысль ученых.\n',
    },
    {
        id: 5,
        name: 'Заводной апельсин',
        author: 'Берджесс Э.',
        img: 'заводной апельсин.jpg',
        price: 270,
    },
    {
        id: 6,
        name: 'Герой нашего времени',
        author: 'Лермонтов М.',
        img: 'герой нашего времени.jpg',
        price: 230,
    },
    {
        id: 7,
        name: 'Мастер и Маргарита',
        author: 'Булгаков М.',
        img: 'мастер и маргарита.jpg',
        price: 230,
    },
    {
        id: 8,
        name: 'Код да Винчи',
        author: 'Браун Д.',
        img: 'код да винчи.jpg',
        price: 350,
    },
];

const items = (state = initialState) => {
    return state
};

export default items;
