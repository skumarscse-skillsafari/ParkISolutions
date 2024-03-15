import products from "../../data";
import { Link, useParams } from "react-router-dom";
const Product = () => {
  console.log(useParams()); // {id: "4"}
  // Object destructuring
  // let user = { name: "John", age: 23}
  // user.name // "John"
  // let {propName-1, propName-2,..., propName-N} = {propName-1: propValue-1, ..., propName-N: propValue-N}
  // let {name, age} = user; // { name: "John", age: 23}
  // name => "John" and age => 23
  // useParams() => {id: 4}
  // let {id} = useParams()
  // id => "4"
  const { id }: any = useParams();
  console.log(id);
  let findProduct = products.find((product) => product.id === +id);
  console.log(findProduct);
  return (
    <div>
      <Link to="/">Back to Home page</Link>
      <h2>Product Component</h2>
      <h2>{findProduct?.title}</h2>
      <p>{findProduct?.description}</p>
    </div>
  );
};

export default Product;
