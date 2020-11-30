export const initialState = {
  basket: [],
};

const AddItemToBasket = (basket, basketItemToAdd) => {
  const existingCartItem = basket.find(
    (basketItem) => basketItem.id === basketItemToAdd.id
  );

  if (existingCartItem) {
    return basket.map((basketItem) =>
      basketItem.id === basketItemToAdd.id
        ? {
            ...basketItem,
            quantity: existingCartItem.quantity + 1,
          }
        : basketItem
    );
  }

  return [...basket, { ...basketItemToAdd, quantity: 1 }];
};

//Start: Selectors

export const getBasketTotalPrice = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

export const getTotalItems = (basket) =>
  basket?.reduce((amount, item) => item.quantity + amount, 0);

//End: Selectors

const reducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: AddItemToBasket(state.basket, action.item),
      };
    case "REMOVE_FROM_BASKET":
      //find the first item which id matches
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // Copy the basket
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
