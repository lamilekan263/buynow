import { shopTypes } from './ShopActionType'
import jacket1 from '../../Assets/jacket1.jpeg'
import jacket2 from "../../Assets/jacket2.jpeg";
import jacket3 from "../../Assets/jacket3.jpeg";
import denim from "../../Assets/denim.jpeg";
import denim2 from "../../Assets/denim2.jpeg";
import denim3 from "../../Assets/denim3.jpeg";
import shirt from "../../Assets/shirts.jpg";
import blackTop from "../../Assets/blackTop.jpg";
// import sunyu from "../../Assets/sunyu.jpg";

const INTITIAL_STATE = {
  shopdata: [
    {
      id: 1,
      name: "jacket",
      price: 50,
      imageSrc: jacket1,
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquidnobis voluptatum quos qui odit hic, dicta aliquam,praesentium eos minima consectetur quidem id!",
      category: "Jackets",
    },
    {
      id: 2,
      name: "jacket 2",
      price: 150,
      imageSrc: jacket2,
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquidnobis voluptatum quos qui odit hic, dicta aliquam,praesentium eos minima consectetur quidem id!",
      category: "Jackets",
    },
    {
      id: 3,
      name: "jacket 2",
      price: 150,
      imageSrc: jacket3,
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquidnobis voluptatum quos qui odit hic, dicta aliquam,praesentium eos minima consectetur quidem id!",
      category: "Jackets",
    },
    {
      id: 4,
      name: "Black Top",
      price: 50,
      imageSrc: blackTop,
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquidnobis voluptatum quos qui odit hic, dicta aliquam,praesentium eos minima consectetur quidem id!",
      category: "Top",
    },
    {
      id: 5,
      name: "jacket 2",
      price: 150,
      imageSrc: denim2,
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquidnobis voluptatum quos qui odit hic, dicta aliquam,praesentium eos minima consectetur quidem id!",
      category: "Jackets",
    },
    {
      id: 6,
      name: "Shirts",
      price: 150,
      imageSrc: shirt,
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquidnobis voluptatum quos qui odit hic, dicta aliquam,praesentium eos minima consectetur quidem id!",
      category: "Denim",
    },

    {
      id: 7,
      name: "Black Top",
      price: 50,
      imageSrc: denim3,
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquidnobis voluptatum quos qui odit hic, dicta aliquam,praesentium eos minima consectetur quidem id!",
      category: "Denim",
    },
    {
      id: 8,
      name: "Shirts",
      price: 150,
      imageSrc: denim,
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquidnobis voluptatum quos qui odit hic, dicta aliquam,praesentium eos minima consectetur quidem id!",
      category: "Denim",
    },
    {
      id: 9,
      name: "Shirts",
      price: 150,
      imageSrc: denim,
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum accusantium itaque sit at adipisci, aliquidnobis voluptatum quos qui odit hic, dicta aliquam,praesentium eos minima consectetur quidem id!",
      category: "Denim",
    },
  ],
};


const shopReducer = (state=INTITIAL_STATE, action) => {
    switch (action.type) {
      case shopTypes.GET_DENIM:
        return {
          ...state,
          shopdata : state.shopdata.filter(shop => shop.category === action.payload)
        };
     
      default:
        return state;
    }
}

export default shopReducer