// before starting to create our first reducer, let's think about HOW we want our store to look like...

const initialState = {
  // a typical thing for redux store objects is to be split into multiple chunks (sub-object), or SLICES
  cart: {
    content: [],
    otherProperty: null,
  },
  user: {},
  // cart is now a SLICE of the redux store
};

// we are going to use our initialState to write our first reducer function!

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          //   content: state.cart.content.concat(action.payload),
          content: [...state.cart.content, action.payload],
        },
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          //   content: state.cart.content.filter((book, index) => index !== action.payload),
          content: [
            ...state.cart.content.slice(0, action.payload), // before indexToRemove
            ...state.cart.content.slice(action.payload + 1), // after indexToRemove
          ],
        },
      };
    default:
      return state; // in the case of falling into the default statement,
    // that means we encountered an 'unrecognized' action.type!
    // returning the state as it was from it, will not HARM our app!
    // we're just going to bring no modification to it...
  }
};
// the reducer is a function that will return the new state of the app every time,
// thanks to its two arguments: the current state of the app, and the action
// that just got dispatched (which describes the modification you want to bring in)
export default mainReducer;
