import { useState } from "react";
const Product = (props: any) => {
  const [show, setShow] = useState(false);
  // console.log(props.product);
  function handleShowDetails() {
    console.log("Hello");
    setShow((current) => !current); // false => !false => true
    console.log(show);
  }
  return (
    <div className="product">
      <h2>Product Component</h2>
      <div key={props.product.id}>
        <h2>{props.product.title}</h2>
        <p>{props.product.description}</p>
        <p>
          <img
            src={props.product.image}
            alt={`image-${props.product.id}`}
            height={200}
            width={200}
          />
        </p>
        <button onClick={handleShowDetails}>Show more...</button>
        {show && (
          <div>
            <p>Price: Rs. {props.product.price}</p>
            <p>Category: {props.product.category}</p>
            <p>Rating: {props.product.rating.rate}</p>
            <p>Count: {props.product.rating.count}</p>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
};

export default Product;
