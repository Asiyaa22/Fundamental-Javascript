import React from "react";
import Card from "./Card";

const ProductList = React.memo(({ products }) => {
  return (
    <div>
      {products.map((p) => (
        <Card key={p.id} product={p} />
      ))}
    </div>
  );
});

export default ProductList;
