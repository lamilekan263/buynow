import { shopTypes } from './ShopActionType'
import denim1 from '../../Assets/denim.jpeg'
import denim2 from "../../Assets/denim2.jpeg";
import denim3 from "../../Assets/denim3.jpeg";

const INTITIAL_STATE = {
  shopdata: [
    {
      id: 1,
      name: "Denim",
      price: 50,
      imageSrc: denim1,
      category: "denim",
    },
    {
      id: 2,
      name: "Denim 2",
      price: 150,
      imageSrc: denim2,
      category: "denim",
    },
    {
      id: 3,
      name: "Denim 2",
      price: 150,
      imageSrc: denim3,
      category: "denim",
    },
  ],
};


const shopReducer = (state=INTITIAL_STATE, action) => {
    switch (action.type) {
        case shopTypes.GET_DENIM:
            return {
                ...state,
               
            }
        default:
            return state
    }
}

export default shopReducer