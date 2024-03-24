import React from "react";

export type Product = {
    id: number;
    name: string;
    step: number;
    price: number;
}

type MyContextData = {
    Product: Product[],
    setProduct: (products: Product[]) => void
}

const MyContext = React.createContext<MyContextData>({

    Product: [],
    setProduct() {

    },

});

export default MyContext;