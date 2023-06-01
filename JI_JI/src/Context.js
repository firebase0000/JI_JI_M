import { createContext } from "react";
const initialState = {
  mycart: []
};
export const Pagecontext = createContext(initialState);
