import products from "../data";

const Products = () => {
  return (
    <div>
      {products.map((product: any) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
