import { useState } from "react";
import Recieve from "../Recieve/Recieve";

export default function Send() {
  const prodArray = [
    { id: 1, pName: "samsung", price: 5000, onSale: true, desc: "Good phone", counter: 0 },
    { id: 2, pName: "oppo", price: 10000, onSale: true, desc: "Nice phone", counter: 0 },
    { id: 3, pName: "iphone", price: 20000, onSale: false, desc: "Premium phone", counter: 0 },
    { id: 4, pName: "tv", price: 7000, onSale: true, desc: "Big screen", counter: 0 },
  ];

  const [products, setProducts] = useState(prodArray);

  function deleteProd(prodId) {
    const newProducts = products.filter((product) => product.id !== prodId);
    setProducts(newProducts);
  }

  function updateCounter(prodId) {
    const updatedProducts = products.map((product) =>
      product.id === prodId ? { ...product, counter: product.counter + 1 } : product
    );
    setProducts(updatedProducts);
  }

  return (
    <div className="container text-2xl bg-info p-4">
      <div className="row g-4">
        {products.map((product) => (
          <Recieve
            key={product.id}
            product={product}
            delProd={deleteProd}
            updateCounter={updateCounter}
          />
        ))}
      </div>
      
    </div>
 );
}