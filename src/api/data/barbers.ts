import {IBarberCard} from "../../helpers/types/IBarberCard";


export const barbers:IBarberCard[] = [
    {
        id: 0,
        name: 'Ivan',
        image: '../../assets/images/barbers/ivan.jpg',
        rating:{
            rate: 4.5,
            count: 12,
        }
    },
    {
        id: 1,
        name: 'John',
        image: '../../assets/images/barbers/John.jpg',

        rating:{
            rate: 4.92,
            count: 152,
        },

    },
    {
      id: 2,
      name: 'Alex',
      image: '../../assets/images/barbers/alex.jpg',
      rating: {
          rate: 4.85,
          count: 68
      },
    },
    {
        id: 3,
        name: 'Greg',
        image: '../../assets/images/barbers/Greg.jpg',

        rating: {
            rate: 4.49,
            count: 107,
        },
    },


]