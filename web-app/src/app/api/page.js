"use client"
import { useState } from "react";
import Image from "next/image";

export default function Page() {
    // x create a product page
    // x header
    // x button that requests data
    // 4 request
    // 5 store the data in my state (react state)
    // 6 output the data

    const [products, setProducts] = useState(null);
    const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

    async function fetchProducts() {
        const response = await fetch(API_ENDPOINT);
        // waiting for the response
        // taking the response and assigning to another variable
        console.log(response);
        const data = await response.json();
        console.log(data);

        setProducts(data);
    }


    const ProductList = () => {
        if (products) {
            let productsList = [];
            products.forEach((product, index) => {
                productsList.push(
                    <li key={index}>{product.name}</li>
                )
            });
            return (
                <div className="border-black border-2 p-3 bg-black text-yellow-200">
                    <ul>{productsList}</ul>
                </div>
            )
        }

        return (
            <div className="border-black border-2 p-3 bg-black text-yellow-200">
                Gimme that fetch 
            </div>
        )
    }
    

  return (
    <div className="bg-yellow-300 p-4">
     <header className="border-4 border-black p-4 mb-4">
        <h1 className="text-4xl mb-6 text-black">Welcome to my product page!</h1>
        <button 
            className="border-black border-2 p-3 bg-black text-yellow-200" 
            onClick={fetchProducts}
        >
            Fetch products!
        </button>
     </header>
     <ProductList/>
    </div>
  );
}
