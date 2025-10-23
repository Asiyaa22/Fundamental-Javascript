import React from "react";

const Card = React.memo(({ product }) => {
  console.log("Rendered:", product.name);
  return <p>{product.name}</p>;
});

export default Card;
