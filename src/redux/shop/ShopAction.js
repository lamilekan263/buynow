import { shopTypes } from './ShopActionTypes'


export const getDenim = () => {
    return {
        type: shopTypes.getDenim,
    }
}
export const getShirts = () => {
    return {
        type: shopTypes.getShirts,
    }
}
export const getShorts = () => {
    return {
        type: shopTypes.getShorts,
    }
}
export const getDresses = () => {
    return {
        type: shopTypes.getDresses,
    }
}
export const getJackets = () => {
  return {
    type: "GET_JACKETS",
  };
};
export const getSkirts = () => {
  return {
    type: "GET_SKIRTS",
  };
};
export const getJeans = () => {
  return {
    type: "GET_JEANS",
  };
};
export const getTops = () => {
  return {
    type: "GET_TOPS",
  };
};