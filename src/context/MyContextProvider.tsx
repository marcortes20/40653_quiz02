import { useState } from "react";
import MyContext, { Product } from "./MyContext";


export interface IThemeProviderProps {
  children: React.ReactNode;
}

export const MyProvider: React.FC<IThemeProviderProps> = ({ children }) => {

  const [Product, setProduct] = useState<Product[]>([])
  return (
    <MyContext.Provider value={{ Product, setProduct }} >
      {children}
    </MyContext.Provider>
  );
};