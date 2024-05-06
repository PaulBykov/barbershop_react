import {IService} from "../../helpers/types/IService"

const services: IService[] = [
    {
        id: 0,
        title: "Укладка волос",
        description: undefined,
        price: 10,
        category: 2,
    },
    {
        id: 1,
        title: "Стрижка налысо",
        description: undefined,
        price: 20,
        category: 0,
    },
    {
        id: 2,
        title: "Моделирование бороды",
        description: undefined,
        price: 30,
        category: 1,
    },
    {
        id: 4,
        title: "Стрижка (1-2 насадки)",
        description: "Стрижка с использованием не более 2-х насадок",
        price: 25,
        category: 0,
    },
    {
        id: 3,
        title: "Удлинённая стрижка",
        description: "90% работы производиться ножницами",
        price: 50,
        category: 0,
    },
    {
        id: 5,
        title: "Борода + усы",
        description: "Моделирование бороды и усов",
        price: 50,
        category: 1,
    },
    {
        id: 6,
        title: "Окрашивание волос",
        description: "Окрашивание волос в выбранный оттенок",
        price: 40,
        category: 2,
    },
    {
        id: 7,
        title: "Мужская стрижка",
        description: undefined,
        price: 40,
        category: 0,
    },
    {
        id: 8,
        title: "Подарочный сертификат",
        description: undefined,
        price: 50,
        category: 2,
    },
    {
        id: 9,
        title: "Подарочный сертификат",
        description: undefined,
        price: 100,
        category: 2,
    },
];

export default services;