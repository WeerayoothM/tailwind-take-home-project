import { createContext, useReducer, useContext } from "react";

const initialState = {
  photos: [
    "/img/head-black_front.png",
    "/img/head-black_front-side-left.png",
    "/img/powerhead_back.png",
  ],
  photoSelectedIndex: 0,
};

const ProductContext = createContext();

const reducer = (state, action) => {
  console.log(action.payload.selectedIndex);
  switch (action.type) {
    case "selectPhoto":
      return { ...state, photoSelectedIndex: action.payload.selectedIndex };
    default:
      return state;
  }
};

export const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
